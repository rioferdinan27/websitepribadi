# Muhamad Rio Ferdinan - Cyber Portfolio

A futuristic, interactive portfolio built with **Three.js** featuring cyberpunk aesthetics, floating 3D elements, and responsive glassmorphism design.

---

## 🌌 Features

| Feature | Description |
|---------|-------------|
| **3D Cyber World** | Interactive skyscrapers, particle orbs, and data streams powered by Three.js |
| **Custom Cyber Cursor** | Animated glowing dot with blur trail that follows mouse movements |
| **Glassmorphism UI** | Translucent cards with blur effects and neon borders |
| **Scroll Animation** | Camera subtle movement following scroll and mouse position |
| **Responsive** | Works on desktop and mobile with optimized layout |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| 3D Graphics | Three.js (r128 - UMD, works without build tools) |
| Styling | Vanilla CSS with custom properties |
| Structure | HTML5 |
| Typography | Plus Jakarta Sans, Fira Code |

---

## 📂 Project Structure

```
web pribadi/
├── index.html           # Main HTML with custom cursor
├── style.css            # Glassmorphism & cyberpunk styling
├── main.js              # Three.js scene & animation
├── README.md            # This file
└── file_00000000cb308211a696a2b37e2db232.png  # Profile photo
```

---

## 🚀 How to Run

### Method 1: Direct Open (No Server)
```bash
# Just double-click index.html
# Works because we use UMD Three.js from CDN
```

### Method 2: With Local Server (Recommended)
```bash
# Python 3
python -m http.server 3000

# Then open: http://localhost:3000
```

### Method 3: Deploy
- **Vercel**: Connect GitHub repo, deploy instantly
- **Netlify**: Drag & drop folder or connect repo
- **GitHub Pages**: Push to `gh-pages` branch

---

## 🌐 Features Breakdown

### 3D Elements
- **20+ Tower Skyscrapers** with window lighting effects
- **4 Floating Particle Orbs** representing IoT, Backend, Web, Database
- **Cyber Grid Floor** with neon blue/teal grid
- **Torus Knot** at center rotating continuously
- **2000 Data Stream Particles** flowing upward

### UI Elements
- **Hero Card** with profile photo and status indicator
- **Tech Matrix Grid** for skills
- **Project Cards** with hover animations and badges
- **Custom Cyber Cursor** (glowing dot + blur)

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Cyan | `#00d2ff` | Main brand, buttons, highlights |
| Secondary Violet | `#7c3aed` | Accents, hover states |
| Background Dark | `#050505` | Canvas background |
| Text Light | `#e0e0e0` | Primary text |
| Text Muted | `#888888` | Secondary text |

---

## 📱 Responsive Design

| Screen | Layout |
|--------|--------|
| Desktop (>768px) | 2-column hero, 4-column matrix grid, 3-column projects |
| Tablet | Single column hero, 2-column matrix, 2-column projects |
| Mobile | Single column all elements, smaller typography |

---

## 🎯 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |
| Safari | 14.1+ | ✅ Full Support |

---

## 📝 License

MIT License - Feel free to use this design for your own portfolio!

---

**Built with Three.js by Muhamad Rio Ferdinan**  
*Politeknik Elektronika Negeri Surabaya (PENS)*
