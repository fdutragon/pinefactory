# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

PineFactory is a professional landing page for Pine Script automation services. It's a marketing website built with Next.js 16 that showcases custom TradingView automation development services. The site is designed to attract traders looking to automate their manual strategies with Pine Script.

## Common Commands

### Development
```powershell
npm run dev          # Start development server on http://localhost:3000
npm run build        # Create production build
npm start            # Run production server
npm run lint         # Run Next.js linter
```

### Installation
```powershell
npm install          # Install all dependencies
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Library**: Custom components (no shadcn/ui installed despite components.json config)
- **Animation**: Framer Motion for declarative animations
- **Icons**: Lucide React
- **Theme**: Dark/Light mode with system preference support

### Project Structure

```
pinefactory/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page (single-page layout)
│   └── globals.css        # Global styles and CSS variables
├── components/            # React components (all client components)
│   ├── Hero.tsx          # Landing hero section
│   ├── Features.tsx      # 6-card features grid
│   ├── ScriptFeatures.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── DownloadSection.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx        # Fixed navbar with scroll effects
│   ├── Logo.tsx
│   ├── ThemeProvider.tsx # Custom theme context provider
│   ├── ThemeToggle.tsx
│   └── theme-script.tsx  # Prevents FOUC on theme load
├── public/               # Static assets
├── components.json       # shadcn/ui config (not currently used)
└── tailwind.config.ts    # Tailwind configuration
```

### Key Architecture Patterns

#### Single-Page Application
The site is a single-page layout with all sections rendered on the home page (`app/page.tsx`). Sections are imported as individual components and stacked vertically.

#### Theme System
- Uses a custom `ThemeProvider` context (not next-themes)
- Theme stored in localStorage with key `"pinefactory-theme"`
- Supports 3 modes: `'dark' | 'light' | 'system'`
- CSS variables defined in `globals.css` under `:root` and `.dark` selectors
- `theme-script.tsx` inline script prevents flash of unstyled content (FOUC)
- Theme toggle available in navbar

#### Styling Approach
- All colors use CSS variables via HSL format: `hsl(var(--primary))`
- Custom utility classes: `.btn-gradient`, `.card-hover`, `.glass`
- Color palette inspired by Supabase theme (green/teal primary colors)
- Custom Tailwind animations: `float`, `glow`, `gradient`
- All components use `'use client'` directive (client-side rendered)

#### Component Patterns
- Heavy use of Framer Motion for animations
- Most components use `whileInView` for scroll-triggered animations
- Gradient backgrounds and animated blobs for visual interest
- All external links include `target="_blank" rel="noopener noreferrer"`
- Contact CTA links point to Twitter: `https://x.com/felipedutragon`

### Path Aliases
TypeScript paths configured with `@/*` pointing to root directory:
- `@/components/*` → `components/*`
- `@/app/*` → `app/*`
- `@/lib/*` → `lib/*` (though lib directory doesn't exist yet)

## Development Guidelines

### Adding New Components
- Place in `/components` directory
- Add `'use client'` directive if using React hooks or browser APIs
- Use Framer Motion's `motion` components for animations
- Follow existing color variable patterns from `globals.css`
- Use Lucide React for icons

### Styling Guidelines
- Use Tailwind utility classes, not inline styles
- Reference colors via CSS variables: `bg-primary`, `text-foreground`, etc.
- For gradients, use: `from-primary to-chart-1` pattern
- Add hover states with `transition-all duration-300`
- Maintain dark mode support by using semantic color variables

### Animation Guidelines
- Use Framer Motion's declarative API
- Standard pattern: `initial`, `animate`, `transition` props
- Use `whileInView` with `viewport={{ once: true }}` for scroll animations
- Add stagger effects with index-based delays: `delay: index * 0.1`

### TypeScript Configuration
- Strict mode enabled
- All components should be typed with React.FC or explicit prop interfaces
- Use `type` for single-purpose definitions, `interface` for extendable objects

## Business Context
The site promotes custom Pine Script development services for TradingView automation. Key value propositions:
- Complete strategy automation (manual → automated)
- Advanced risk management (stops, targets, trailing)
- Exchange integration (Binance, Bybit via webhooks)
- 24/7 monitoring capabilities
- Personalized support

Target audience: Traders who want to automate their manual strategies without coding knowledge.
