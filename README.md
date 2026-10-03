# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness.

## 🚀 Live Demo
- **Live URL:** [https://tis-homepage-design.vercel.app/](https://tis-homepage-design.vercel.app/)
- **Repository:** [https://github.com/shrikantsul436-svg/tis-homepage-design](https://github.com/shrikantsul436-svg/tis-homepage-design)

## 🛠️ Tech Stack
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## ✨ Standout Features Implemented
1. **Animated Dark/Light Theme Switcher:** A `useTheme` hook saves the chosen theme in `localStorage`, and an inline script in `index.html` applies it before first paint to avoid a flash. Colors are CSS variables switched through a `data-theme` attribute, and the toggle icon animates with Framer Motion's `AnimatePresence`.
2. **Scroll-Triggered Reveals:** A reusable `Reveal` component built on Framer Motion's `whileInView` with `viewport={{ once: true }}`. Entrance durations are 0.5s with staggered delays.
3. **Scroll Progress Bar:** A fixed bar at the top of the viewport driven by `useScroll()` and `useSpring()`, showing how far the user has scrolled.

## 📦 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shrikantsul436-svg/tis-homepage-design.git
   cd tis-homepage-design
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open http://localhost:5173 in your browser.

5. **Build for production (optional):**
   ```bash
   npm run build
   ```

## Component Architecture Overview

- `components/ui/` - Atomic UI components (Button, SectionHeading)
- `components/layout/` - Navbar (with mobile menu) and Footer
- `components/sections/` - Main page sections (Hero, About, Sports, Personalities, Testimonials, Admission)
- `components/animation/` - Animation drivers (ThemeToggle, ScrollProgress, Reveal, AnimatedCounter)
- `hooks/` - Custom hooks (`useTheme`)
- `data/` - Static content, navigation items, school statistics (`siteData.js`)

## Brand Identity Retained

- Primary colors, copy, and official school assets from tis.edu.in
- The enquiry form is front-end only and does not send data to a server.
