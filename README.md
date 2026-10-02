Tulas International School (TIS) — Homepage Redesign

An animated, responsive, high-converting redesign of the TIS homepage.

Live Demo React Tailwind CSS Framer Motion

Live Demo · Repository

</div> <!-- Add a screenshot after deploying: 1. Save it as docs/screenshot.png 2. Uncomment the line below ![TIS homepage preview](docs/screenshot.png) -->
📖 About the Project

This project transforms the existing TIS homepage into a modern, animated single-page experience while retaining the school's core brand identity and copy. It focuses on a clear call-to-action hierarchy, fluid micro-interactions, and a mobile-first layout.

It was built as a front-end assessment: a modular React codebase, smooth 60 FPS animations, accessible markup, and a working live deployment.

✨ Standout Features
Feature	How it works
🌗 Animated Dark / Light Theme Switcher	A useTheme hook stores the choice in localStorage. A small inline script in index.html applies it before first paint, so there is no flash of the wrong theme. All colors are CSS variables switched by data-theme.
🎞️ Scroll-Triggered Reveals	A reusable Reveal component built on Framer Motion's whileInView with once: true, using 0.5s entrance durations and staggered delays.
📊 Scroll Progress Bar	useScroll + useSpring drive a fixed bar at the top of the viewport that shows scroll depth.

Also included

Animated stat counters that update the DOM directly, which avoids re-rendering on every frame
Responsive navbar with an animated mobile menu
Reduced-motion support (prefers-reduced-motion)
Semantic HTML (header, nav, main, section, footer), visible focus states, and touch-friendly targets
🛠️ Tech Stack
Framework: React with Vite
Styling: Tailwind CSS v4 with CSS-variable theme tokens
Animations: Framer Motion
Icons: Lucide React
Linting: ESLint
Deployment: Vercel
📦 Getting Started
Prerequisites
Node.js 18 or later
npm
Installation
Clone the repository
bash
   git clone https://github.com/YOUR-USERNAME/tis-homepage-redesign.git
   cd tis-homepage-redesign
Install dependencies
bash
   npm install
Start the development server
bash
   npm run dev
Open http://localhost:5173 in your browser.
Available Scripts
Command	Description
npm run dev	Start the development server
npm run build	Create a production build in dist/
npm run preview	Preview the production build locally
npm run lint	Run ESLint
🗂️ Project Structure
src/
├── components/
│   ├── ui/            # Reusable primitives (Button, SectionHeading)
│   ├── layout/        # Navbar, Footer
│   ├── sections/      # Hero, About, Sports, Personalities, Testimonials, Admission
│   └── animation/     # ThemeToggle, ScrollProgress, Reveal, AnimatedCounter
├── hooks/             # useTheme
├── data/              # siteData.js: all copy, stats, navigation and contact details
├── App.jsx            # Page composition
├── main.jsx           # Entry point
└── index.css          # Tailwind import, theme tokens, base styles

Design decisions

Content lives in data/. Sections only render data, so copy can be edited in one place without touching components.
Theme tokens, not hard-coded colors. Components use semantic classes (bg-surface, text-fg), so dark mode needs no per-component overrides.
Animate only transform and opacity. This keeps animations on the compositor for smooth 60 FPS performance.

♿ Accessibility & Performance
Semantic landmarks and a single h1
Visible keyboard focus styles and labelled controls (aria-label, aria-expanded)
Touch targets of at least 44px
Motion is reduced for users who prefer it
Lightweight bundle with no unnecessary dependencies
🏫 Brand Identity Retained

Copy, rankings, sports list, contact details, and the school logo come from tis.edu.in. All rights to the school's name, logo, and content belong to Tulas International School.

Note: The enquiry form is front-end only. It shows a confirmation message but does not send data to a server.

🚧 Possible Improvements
Connect the enquiry form to a backend or form service
Add the optional custom cursor for pointer devices
Replace placeholder initials with official photographs of notable personalities
Add automated accessibility and visual regression tests
👤 Author

Shrikant Sul
