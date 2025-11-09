# Pure HTML Version - Lumina

A pure HTML + CSS + JavaScript implementation of volumetric light art, inspired by Anthony McCall's pioneering works.

## Features

- **Volumetric Light Cone**: A 3D light cone with custom shader effects
- **Particle System**: 3000+ particles creating atmospheric haze
- **Dynamic Animation**: Morphing light forms with pulsing effects
- **Interactive Controls**:
  - Auto-rotate camera
  - Adjustable fog density
  - Variable animation speed
  - Mouse-controlled camera (when auto-rotate is off)

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Three.js (r128)

## Running Locally

### Option 1: Direct Open (Recommended - No Server Needed! 🎉)
Simply **double-click** `index.html` in your file manager!

The project works directly in your browser without any server because:
- Three.js loads from CDN
- All assets use relative paths
- No ES6 modules or server-dependent features

### Option 2: VS Code Live Server
If you prefer a live-reload experience:
- Right-click on `index.html` and select "Open with Live Server"

### Option 3: Simple HTTP Server (Optional)
If you encounter CORS issues (rare):

**Node.js:**
```bash
cd pure-html
npx serve
```

**Python:**
```bash
cd pure-html
python -m http.server 8000
```

**PHP:**
```bash
cd pure-html
php -S localhost:8000
```

## Implementation Details

### Volumetric Light Effect

The cone is rendered using:
- Custom GLSL shaders for gradient and transparency effects
- Fresnel-like lighting for viewing angle dependent opacity
- Additive blending for luminous appearance
- Pulsing animation synchronized with rotation

### Particle System

- 3000 particles simulating atmospheric haze
- Individual velocity for each particle
- Boundary detection and recycling
- Additive blending for ethereal glow

### Animation

- Continuous rotation and morphing of the cone
- Auto-rotating camera with sinusoidal motion
- Time-based shader animations
- Interactive mouse controls

## Customization

Edit `script.js` to customize:

```javascript
// Particle count
const particleCount = 3000;

// Cone dimensions
const geometry = new THREE.ConeGeometry(8, 16, 32, 1, true);

// Color scheme
color1: { value: new THREE.Color(0x4488ff) },
color2: { value: new THREE.Color(0x88ccff) }

// Fog density
scene.fog = new THREE.FogExp2(0x000000, 0.05);
```

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile: Supported (with reduced particle count recommended)

## Performance Tips

For slower devices, reduce particle count:
```javascript
const particleCount = 1000; // Instead of 3000
```

## Artistic Inspiration

This implementation recreates the essence of Anthony McCall's "Line Describing a Cone" (1973), where a film projector creates a volumetric cone of light that viewers can walk through, experiencing light as a tangible sculptural medium.

## Next Steps

- [ ] Add multiple light cones
- [ ] Implement different geometric forms
- [ ] Add audio reactivity
- [ ] VR support with WebXR
- [ ] Save/load camera positions
