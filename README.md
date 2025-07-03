# Createch XR - Extended Reality Solutions

<div align="center">

![Createch XR](https://img.shields.io/badge/Createch-XR%20Solutions-e6b3ff?style=for-the-badge&logo=virtual-reality)
![Status](https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Leading the future of extended reality with cutting-edge AR, VR, and MR solutions**

[Live Demo](#) • [Documentation](#) • [Contact](#contact)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Design System](#design-system)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Overview

Createch XR is a modern, cyberpunk-themed website showcasing extended reality (XR) solutions including Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR) services. The project features a sleek dark theme with purple accent colors, monospace typography, and immersive grid backgrounds.

### Key Highlights

- **🎯 Modern XR Focus**: Specialized in cutting-edge extended reality solutions
- **🎨 Cyberpunk Aesthetic**: Dark theme with neon purple accents and grid patterns
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Fast Loading**: Resource preloading for optimal performance
- **🎭 Professional Design**: Clean, minimalist interface with smooth animations

---

## 📁 Project Structure

```
createch-vibe/
├── README.md                     # Project documentation
├── claude-design.json           # Design system specifications
├── gpt-dsign.json              # Alternative design configurations
├── mistral-ai-design-system.json # AI design system reference
├── docs/                       # Project documentation
│   └── forntend application development.md
├── wireframe/                  # Website wireframes & prototypes
│   ├── index.html             # Homepage wireframe
│   ├── about.html             # About page wireframe
│   ├── services.html          # Services page wireframe
│   ├── portfolio.html         # Portfolio page wireframe
│   ├── contact.html           # Contact page wireframe
│   ├── blog.html              # Blog page wireframe
│   ├── loading.html           # Loading screen wireframe
│   ├── components.html        # UI components wireframe
│   ├── wireframe.html         # Main wireframe index
│   ├── README.md              # Wireframe documentation
│   └── assets/                # Wireframe assets
└── ui/                        # Production UI implementation
    ├── index.html             # Homepage
    ├── about.html             # About page
    ├── services.html          # Services page
    ├── portfolio.html         # Portfolio page
    ├── contact.html           # Contact page
    ├── blog.html              # Blog page
    ├── loading.html           # Loading screen
    ├── README.md              # UI documentation
    └── assets/                # Production assets
        ├── css/
        │   └── main.css       # Main stylesheet (15KB)
        ├── js/
        │   └── main.js        # Main JavaScript (17KB)
        └── images/            # Image assets
```

### Folder Descriptions

#### `/wireframe` 📐
Contains the initial wireframes and prototypes of the website. These files serve as:
- **Design Reference**: Layout and structure planning
- **Development Guide**: Component and page organization
- **Client Review**: Visual mockups for stakeholder approval
- **Iteration History**: Design evolution tracking

#### `/ui` 🎨
Contains the production-ready implementation with:
- **Optimized Code**: Clean, performant HTML/CSS/JS
- **Design System**: Consistent styling following `claude-design.json`
- **Responsive Design**: Mobile-first approach
- **Asset Optimization**: Compressed and optimized resources

---

## ✨ Features

### 🚀 Core Features

- **Interactive Loading Screen**: Minimalist percentage-based loader inspired by modern XR interfaces
- **Responsive Navigation**: Smooth, collapsible navigation with active states
- **Service Showcase**: Comprehensive XR, AI/ML, and cloud consulting services
- **Portfolio Gallery**: Project showcases with filtering and modal views
- **Contact Forms**: Multi-step quote request and contact forms
- **Blog System**: Article management with categories and search
- **Grid Backgrounds**: Animated cyberpunk-style grid overlays

### 🎨 Design Features

- **Cyberpunk Theme**: Dark backgrounds with neon purple accents (`#e6b3ff`)
- **Monospace Typography**: VT323 font for authentic tech aesthetic
- **Smooth Animations**: CSS transitions and keyframe animations
- **Glow Effects**: Subtle neon glow on interactive elements
- **Pixel-Perfect Layouts**: Grid-based responsive design

### ⚡ Performance Features

- **Resource Preloading**: Critical CSS, fonts, and scripts loaded efficiently
- **Lazy Loading**: Images and non-critical resources loaded on demand
- **Optimized Assets**: Minified CSS/JS and compressed images
- **Fast Navigation**: SPA-like page transitions

---

## 🛠 Technology Stack

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern flexbox/grid layouts with custom properties
- **Vanilla JavaScript**: No framework dependencies for lightweight performance
- **Google Fonts**: VT323 monospace font integration

### Design System
- **Claude Design System**: Comprehensive design tokens and component guidelines
- **Color Palette**: 
  - Primary: `#1a1a1a` (background)
  - Secondary: `#2a2a2a` (surfaces)
  - Accent: `#e6b3ff` (primary purple)
  - Accent Secondary: `#b366ff` (darker purple)
  - Text: `#ffffff` (primary) / `#cccccc` (secondary)

### Development Tools
- **Live Server**: Local development server
- **Git**: Version control
- **VS Code**: Recommended IDE with extensions

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (Live Server, Python SimpleHTTPServer, or similar)
- Text editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/createch-vibe.git
   cd createch-vibe
   ```

2. **Start a local server**
   
   Using Live Server (VS Code extension):
   - Right-click on `ui/index.html`
   - Select "Open with Live Server"
   
   Using Python:
   ```bash
   cd ui
   python -m http.server 8000
   ```
   
   Using Node.js:
   ```bash
   cd ui
   npx http-server
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Quick Start with Loading Screen

To experience the full loading sequence:
1. Navigate to `ui/loading.html` first
2. The page will automatically redirect to `index.html` after loading
3. Click anywhere or press Space/Enter to skip during development

---

## 🎨 Design System

The project follows the **Claude Design System** (`claude-design.json`) which defines:

### Color Palette
```css
--bg-primary: #1a1a1a;        /* Main background */
--bg-surface: #2a2a2a;        /* Card/surface backgrounds */
--accent: #e6b3ff;            /* Primary accent (purple) */
--accent-secondary: #b366ff;   /* Secondary accent (darker purple) */
--text-primary: #ffffff;       /* Primary text */
--text-secondary: #cccccc;     /* Secondary text */
--text-muted: #999999;         /* Muted text */
```

### Typography
```css
--font-family: 'VT323', monospace, 'Courier New', monospace;
--letter-spacing: 0.05em;
```

### Components
- **Pixel Cards**: Bordered containers with glow effects
- **Buttons**: Primary/secondary with gradient backgrounds
- **Grid Backgrounds**: Animated tech-style overlays
- **Navigation**: Fixed header with smooth transitions

---

## 💻 Development

### Code Structure

#### CSS Architecture
```
assets/css/main.css
├── CSS Variables (Design tokens)
├── Reset & Base Styles
├── Grid Background System
├── Typography Hierarchy
├── Layout Components
├── Navigation Styles
├── Card Components
├── Button Styles
├── Form Elements
├── Animations & Effects
└── Responsive Media Queries
```

#### JavaScript Features
```
assets/js/main.js
├── Mobile Navigation Toggle
├── Form Validation & Submission
├── Smooth Scrolling
├── Animation Triggers
├── Loading Screen Management
└── Interactive Components
```

### Development Guidelines

1. **Follow the Design System**: Use CSS variables defined in `:root`
2. **Mobile-First**: Start with mobile styles, enhance for desktop
3. **Semantic HTML**: Use proper HTML5 elements for accessibility
4. **Performance**: Optimize images and minimize HTTP requests
5. **Browser Support**: Target modern browsers (ES6+)

### Adding New Pages

1. Copy an existing page as a template
2. Update the navigation active state
3. Follow the established CSS class naming
4. Test on multiple screen sizes
5. Validate HTML and check accessibility

---

## 🚀 Deployment

### Static Hosting (Recommended)

**Netlify**:
```bash
# Build command: (none needed for static site)
# Publish directory: ui
```

**Vercel**:
```bash
# Framework Preset: Other
# Root Directory: ui
```

**GitHub Pages**:
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to `ui` folder

### Manual Deployment

1. Upload contents of `ui/` folder to web server
2. Ensure `.html` files are accessible
3. Configure server for clean URLs (optional)

---

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make changes**: Follow coding standards and test thoroughly
4. **Commit changes**: `git commit -m 'Add amazing feature'`
5. **Push to branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Code Standards

- **Indentation**: 4 spaces for HTML/CSS, 2 spaces for JavaScript
- **Naming**: Use kebab-case for CSS classes, camelCase for JavaScript
- **Comments**: Document complex logic and component purposes
- **Testing**: Test on multiple browsers and devices

---

## 📞 Contact

**Createch XR Team**
- 📧 Email: [contact@createch-xr.com](mailto:contact@createch-xr.com)
- 🌐 Website: [www.createch-xr.com](https://www.createch-xr.com)
- 💼 LinkedIn: [Createch XR Solutions](https://linkedin.com/company/createch-xr)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Design Inspiration**: Modern XR interfaces and cyberpunk aesthetics
- **Font**: VT323 by Google Fonts
- **Grid Patterns**: Inspired by sci-fi UI designs
- **Color Palette**: Carefully selected for accessibility and visual impact

---

<div align="center">

**Built with ❤️ for the future of Extended Reality**

⭐ Star this repo if you found it helpful!

</div> 