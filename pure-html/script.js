// Lumina - Volumetric Light Art Installation
// Inspired by Anthony McCall's "Line Describing a Cone"

let scene, camera, renderer, cone, particles;
let autoRotate = true;
let animationSpeed = 0.3;
let time = 0;

// Initialize the scene
function init() {
    // Create scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.05);

    // Create camera
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 5, 15);
    camera.lookAt(0, 0, 0);

    // Create renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('container').appendChild(renderer.domElement);

    // Create volumetric light cone
    createLightCone();

    // Create particle system for volumetric effect
    createParticles();

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    // Add point light inside cone
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 10, 0);
    scene.add(pointLight);

    // Setup controls
    setupControls();

    // Handle window resize
    window.addEventListener('resize', onWindowResize);

    // Start animation
    animate();
}

// Create the main light cone geometry
function createLightCone() {
    // Create cone geometry - representing the light volume
    const geometry = new THREE.ConeGeometry(8, 16, 32, 1, true);

    // Custom shader material for volumetric effect
    const material = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 },
            color1: { value: new THREE.Color(0x4488ff) },
            color2: { value: new THREE.Color(0x88ccff) }
        },
        vertexShader: `
            varying vec3 vPosition;
            varying vec3 vNormal;

            void main() {
                vPosition = position;
                vNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float time;
            uniform vec3 color1;
            uniform vec3 color2;

            varying vec3 vPosition;
            varying vec3 vNormal;

            void main() {
                // Calculate distance from center
                float dist = length(vPosition.xz);

                // Create gradient based on height
                float gradient = (vPosition.y + 8.0) / 16.0;

                // Mix colors
                vec3 color = mix(color1, color2, gradient);

                // Add pulsing effect
                float pulse = sin(time * 2.0 + dist) * 0.5 + 0.5;

                // Calculate alpha based on viewing angle (Fresnel-like effect)
                float alpha = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
                alpha = alpha * 0.3 + 0.1;
                alpha *= pulse * 0.5 + 0.5;

                gl_FragColor = vec4(color, alpha);
            }
        `,
        transparent: true,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    cone = new THREE.Mesh(geometry, material);
    cone.position.y = 2;
    cone.rotation.x = Math.PI;
    scene.add(cone);
}

// Create particle system for atmospheric effect
function createParticles() {
    const particleCount = 3000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    // Create particles within and around the cone volume
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Random position within a larger volume
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 12;
        const height = Math.random() * 20 - 5;

        positions[i3] = Math.cos(angle) * radius;
        positions[i3 + 1] = height;
        positions[i3 + 2] = Math.sin(angle) * radius;

        // Random velocity for each particle
        velocities.push({
            x: (Math.random() - 0.5) * 0.02,
            y: (Math.random() - 0.5) * 0.02,
            z: (Math.random() - 0.5) * 0.02
        });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.1,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    particles = new THREE.Points(geometry, material);
    particles.userData.velocities = velocities;
    scene.add(particles);
}

// Setup UI controls
function setupControls() {
    const autoRotateCheckbox = document.getElementById('autoRotate');
    const fogDensitySlider = document.getElementById('fogDensity');
    const animSpeedSlider = document.getElementById('animSpeed');

    autoRotateCheckbox.addEventListener('change', (e) => {
        autoRotate = e.target.checked;
    });

    fogDensitySlider.addEventListener('input', (e) => {
        const density = e.target.value / 1000;
        scene.fog.density = density;
    });

    animSpeedSlider.addEventListener('input', (e) => {
        animationSpeed = e.target.value / 100;
    });

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

        if (!autoRotate) {
            camera.position.x = mouseX * 5;
            camera.position.y = mouseY * 5 + 5;
            camera.lookAt(0, 0, 0);
        }
    });
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    time += 0.01 * animationSpeed;

    // Update cone shader time
    if (cone && cone.material.uniforms) {
        cone.material.uniforms.time.value = time;
    }

    // Rotate cone
    if (cone) {
        cone.rotation.y += 0.005 * animationSpeed;

        // Subtle morphing animation - like McCall's evolving forms
        cone.scale.x = 1 + Math.sin(time * 0.5) * 0.1;
        cone.scale.z = 1 + Math.cos(time * 0.5) * 0.1;
    }

    // Animate particles
    if (particles) {
        const positions = particles.geometry.attributes.position.array;
        const velocities = particles.userData.velocities;

        for (let i = 0; i < positions.length; i += 3) {
            const idx = i / 3;

            // Update positions
            positions[i] += velocities[idx].x;
            positions[i + 1] += velocities[idx].y;
            positions[i + 2] += velocities[idx].z;

            // Boundary check and reset
            if (Math.abs(positions[i]) > 15 ||
                Math.abs(positions[i + 1]) > 15 ||
                Math.abs(positions[i + 2]) > 15) {
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * 12;
                positions[i] = Math.cos(angle) * radius;
                positions[i + 1] = Math.random() * 20 - 5;
                positions[i + 2] = Math.sin(angle) * radius;
            }
        }

        particles.geometry.attributes.position.needsUpdate = true;
        particles.rotation.y += 0.001 * animationSpeed;
    }

    // Auto-rotate camera
    if (autoRotate) {
        const radius = 15;
        camera.position.x = Math.sin(time * 0.2) * radius;
        camera.position.z = Math.cos(time * 0.2) * radius;
        camera.position.y = 5 + Math.sin(time * 0.1) * 3;
        camera.lookAt(0, 0, 0);
    }

    renderer.render(scene, camera);
}

// Handle window resize
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Start the experience
init();
