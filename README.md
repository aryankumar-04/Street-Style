# ✦✦ STREET STYLE — Minimal Luxury Streetwear Landing Page

A modern, high-end, editorial-style fashion landing page built with **React**, **Tailwind CSS**, and **Framer Motion**. Designed with a minimal luxury streetwear aesthetic featuring bold oversized typography, sleek monochrome palette, smooth micro-animations, interactive custom studio shirt designer, slide-over shopping bag drawer, and fully responsive layout.

---

## ✨ Features

- 👕 **Minimal Luxury Streetwear Design**: Ultra-sleek dark mode (`rgb(22,22,22)` / `#161616`) contrasting with pure white editorial partnership section.
- 🎨 **Interactive Live Graphic Studio**: Drag-and-drop graphic customizer allowing users to preview prints directly on shirt mockups.
- 🛒 **Slide-over Shopping Bag Drawer**: Real-time quantity management, size selection, item removal, and checkout simulation.
- 📱 **Fully Responsive**: Flawless experience across desktop, tablet, and mobile devices.
- ⚡ **Lightning Fast**: Powered by Vite 6 with optimized chunk sizes and instant Hot Module Replacement (HMR).
- ✏️ **100% Editable Data Store**: Centralized content architecture (`src/data/contentData.js`) for effortless customization of copy, products, prices, and images.

---

## 🛠️ Tech Stack

- **Core Framework**: React 18
- **Build Tool & Server**: Vite 6
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Fonts**: Google Fonts (*Arimo* Display & *Public Sans*)

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/your-username/street-style-landing.git
cd street-style-landing
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser to view the application.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the built production site locally:

```bash
npm run preview
```

---

## 📂 Project Structure

```text
Street Style/
├── asset/images/           # Raw high-resolution image assets
├── public/                 # Static assets served directly (logo, favicon, product mockups)
├── src/
│   ├── components/         # Modular React UI Components
│   │   ├── Header.jsx              # Navigation header & logo
│   │   ├── HeroSection.jsx         # Oversized hero typography &orbit card
│   │   ├── RootsSection.jsx        # Full-bleed editorial story section
│   │   ├── ValuesSection.jsx       # Brand values & custom icons
│   │   ├── NewArrivalsSection.jsx  # Interactive product grid
│   │   ├── PressSection.jsx        # Thin-lined quote list
│   │   ├── ContactSection.jsx      # Clean partnership contact grid
│   │   ├── ProductModal.jsx        # Quick-view product modal
│   │   ├── CustomizerModal.jsx     # Live graphic print editor
│   │   ├── CartDrawer.jsx          # Shopping bag slide-over drawer
│   │   ├── InquiryModal.jsx        # Partnership inquiry modal
│   │   └── Footer.jsx              # Minimalist footer bar
│   ├── data/
│   │   └── contentData.js  # Centralized editable website copy & products
│   ├── App.jsx             # Main application container & state management
│   ├── index.css           # Tailwind base directives & global styles
│   └── main.jsx            # Application entry point
├── index.html              # HTML entry point with meta tags & Google Fonts
├── package.json            # Project dependencies & scripts
├── tailwind.config.js      # Custom font families & layout clamps
└── vite.config.js          # Vite configuration
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
