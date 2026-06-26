# Armory - Enterprise AI Automation

This is the official submission for the FrontEnd Battle Round 1: Next-Gen AI Platform Speed Run.

## Overview
A highly cohesive, premium SaaS landing page built for a Next-Gen AI automation platform. The architecture is engineered for maximum performance, featuring strict state isolation, native CSS motion choreography, and semantic HTML structure.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (Custom Design System)
- **State Management:** React Hooks (Optimized to prevent global reflows)
- **Animations:** Native CSS Transitions & WAAPI (0 external animation libraries used)

## Core Features Implemented
1. **Matrix-Driven Pricing Engine:** A multi-dimensional currency switcher (USD, EUR, INR) and billing cycle toggle that recalculates DOM nodes strictly without triggering global layout reflows.
2. **Bento-to-Accordion Wrapper:** A responsive 4-column Bento grid that seamlessly refactors into a touch-optimized accordion list on mobile viewports, implementing strict active index context-locking.
3. **Motion Choreography:** Structural layout reflows timed identically to the reference demo using native browser acceleration (150ms-200ms ease-out micro-interactions, 500ms orchestration caps).

## Setup & Installation
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.
