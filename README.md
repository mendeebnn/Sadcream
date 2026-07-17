# SADCREAM // Mongolia Lookbook

An ultra-premium, agency-grade digital fashion presentation and archival campaign index. Purpose-built for high-end editorial experiences utilizing a brutalist, minimalist layout, elegant micro-interactions, custom-rendered typography, and high-performance crossfade galleries.

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│                    S A D C R E A M                     │
│                                                        │
│                 [ MONGOLIA CAMPAIGN ]                  │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

## 1. Project Overview

**SADCREAM** is a responsive digital lookbook presentation built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. It is designed with extreme visual discipline to serve as an agency portfolio asset. It implements cinematic Ken Burns hero transitions, interactive perspective viewers, high-fidelity skeletal loaders, and a single source of truth for brand configurations to ensure code maintainability.

---

## 2. Design System & Vibe

- **Editorial Grid Layout**: Incorporates background alignment markers, subtle grid overlays, and crisp geometric guidelines.
- **Strict Color Palette**: Heavy dark canvas (`#080808`) paired with bright milk-white (`#f4f4f4`) details and light slate-grey typography to guarantee contrast and visual integrity.
- **Cinematic Transitions**: Custom crossfades,Ken Burns sliders, and layout animations powered by GPU-accelerated CSS and Framer Motion.
- **Atmospheric Film Grain Overlay**: An ultra-subtle SVG-based noise background layer is applied globally to add a physical, tangible texture.

---

## 3. Production & Performance Engineering

- **Landing Hero Preloading**: The primary campaign slide image is preloaded dynamically via document injection on mount to maximize Largest Contentful Paint (LCP) performance.
- **Secondary Asset Lazy-Loading**: All lower-index gallery images are deferred with `loading="lazy"` and native browser performance flags to reduce unnecessary initial payload sizes.
- **Editorial Loading Skeletons**: Tailored, high-fidelity skeleton elements matching the exact visual grid of the detail views are utilized during product transition frames to avoid Cumulative Layout Shift (CLS) and keep navigation feeling fluid.
- **Subtle Page Transitions**: Inter-page routing is guided by subtle, custom fade curves that respect `prefers-reduced-motion` to guarantee accessibility.

---

## 4. Folder Structure

```
.
├── src/
│   ├── assets/              # Premium optimized original campaign photography
│   │   └── images/
│   ├── components/          # Reusable component layouts
│   │   ├── Contact.tsx      # Interactive contact, location, and timezone panel
│   │   ├── FeaturedCollection.tsx # Grid of campaign looks
│   │   ├── Footer.tsx       # Standardized layout footer with legalities
│   │   ├── Hero.tsx         # Ken Burns slider with preloading logic
│   │   └── ScrollToTop.tsx  # Dynamic route reset behavior
│   ├── hooks/
│   │   └── useSEO.ts        # Custom hook for meta, OpenGraph, and Twitter injection
│   ├── pages/               # Top-level screen components
│   │   ├── Home.tsx         # Primary index campaign view
│   │   ├── NotFound.tsx     # Custom 404 page
│   │   └── ProductDetail.tsx # Detailed look spec sheets & gallery
│   ├── brand.ts             # Central Brand Configuration (Source of Truth)
│   ├── data.ts              # Registered products & campaign asset schema
│   ├── main.tsx             # Application mount point
│   ├── index.css            # Custom fonts, @theme overrides, and Tailwind core
│   └── types.ts             # TypeScript interface and type declarations
├── .env.example             # Documented template for externalized URLs
├── vite.config.ts           # Bundler config
├── tsconfig.json            # Strict TypeScript configuration
└── package.json             # Build script orchestrator
```

---

## 5. Technology Stack

- **Framework**: React 18+ (Functional Components & Hooks)
- **Build Tool**: Vite (Ultra-fast Hot Module Replacement)
- **Language**: TypeScript (Strict Typings & Interfaces)
- **Styling**: Tailwind CSS
- **Interactions**: Framer Motion (`motion/react`)
- **Icons**: Lucide React
- **Router**: React Router DOM (v6)

---

## 6. Installation & Local Development

### Prerequisites
Ensure you have Node.js (v18.x or newer) and npm installed.

### Steps

1. **Clone the project & install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   Duplicate the example file and populate the URLs:
   ```bash
   cp .env.example .env
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 7. License

Licensed under the **Apache-2.0 License**. See code header declarations for metadata details.
