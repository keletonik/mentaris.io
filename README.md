# Mentaris Website

AI implementation for compliance-heavy industries. Sydney, Australia.

## Overview

This is the complete Mentaris website codebase, built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Framer Motion. The site follows a "Mechanical Intelligence" design philosophy with precise, engineered animations and a dark theme with cyan accents.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + tailwindcss-animate
- **Animations:** Framer Motion
- **Database:** PostgreSQL via Prisma
- **Email:** Resend
- **Components:** shadcn/ui primitives + Lucide React icons

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- PostgreSQL database
- Resend API key (for email notifications)

### Installation

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Copy the environment file and fill in your values:
   ```bash
   cp .env.example .env.local
   ```

3. Set up the database:
   ```bash
   npx prisma db push
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── page.tsx                    # Homepage (assembles section components)
├── layout.tsx                  # Root layout with Navigation + Footer
├── globals.css                 # Global styles and design tokens
├── about/page.tsx              # About page with founder story
├── contact/page.tsx            # Contact form
├── privacy/page.tsx            # Privacy policy
├── terms/page.tsx              # Terms of service
├── blog/
│   ├── page.tsx                # Blog listing
│   ├── ai-capabilities-2026/   # Blog post
│   ├── ai-readiness-signs/     # Blog post
│   └── ai-implementation-success/  # Blog post
├── resources/
│   ├── page.tsx                # Resources hub with whitepaper
│   └── knowledge/              # Knowledge base articles
├── services/
│   ├── page.tsx                # Services overview (4 core services)
│   ├── ai-tools/               # Operational AI Integration
│   ├── custom-software/        # Custom AI Development
│   ├── ai-consulting/          # AI Readiness Assessment
│   └── cybersecurity/          # Security & Compliance
└── api/
    ├── contact/route.ts        # Contact form handler
    └── whitepaper-download/route.ts  # Email capture for whitepaper

components/
├── navigation.tsx              # Header with mobile menu
├── footer.tsx                  # Site footer
├── hero.tsx                    # Homepage hero with industry tags
├── services.tsx                # Homepage services grid
├── how-it-works.tsx            # Process steps
├── why-choose-us.tsx           # Differentiation section
├── who-this-is-for.tsx         # Ideal client checklist
├── latest-blog.tsx             # Blog preview cards
├── final-cta.tsx               # Bottom CTA
├── service-page-template.tsx   # Reusable service page layout
├── blog-post-template.tsx      # Reusable blog post layout
└── motion/
    ├── index.tsx               # Core animation components
    └── orbital.tsx             # OrbitalRings, DataFlow, NodeCluster

lib/
├── utils.ts                    # cn(), formatDate, slugify, etc.
├── db.ts                       # Prisma client singleton
├── security.ts                 # Input validation, rate limiting
└── email.ts                    # Resend email helpers
```

## Key Features

### Motion System

Three signature animation elements:
- **OrbitalRings:** Rotating concentric rings with orbiting dots
- **DataFlow:** Horizontal lines with traveling data packets
- **NodeCluster:** Connected nodes with pulsing animation

All animations respect `prefers-reduced-motion`.

### Services (4 Core)

1. Operational AI Integration - Finding and implementing existing AI tools
2. Custom AI Development - Building custom solutions when off-the-shelf doesn't fit
3. AI Readiness Assessment - Understanding where AI can help
4. Security & Compliance - Implementing AI securely in regulated industries

### Contact Form

- Rate limiting (5 submissions/hour per IP)
- Input validation and XSS/SQLi detection
- Email notification via Resend
- Database storage for leads

### Whitepaper Download

- Email capture modal before download
- Optional newsletter subscription
- Sends welcome email + admin notification

## Design System

### Colors
- Background: #111113
- Primary accent: cyan-400 (#22d3ee)
- Secondary accents: amber-400, emerald-400
- Borders: zinc-800, zinc-700
- Text: white, zinc-200, zinc-400, zinc-500

### Key CSS Classes
- `.container-narrow` - Max-width container
- `.section-padding` - Vertical section spacing
- `.precision-panel` - Card with hover state
- `.btn-primary` - Cyan filled button
- `.btn-secondary` - Outlined button
- `.tech-badge` - Small monospace label
- `.blueprint-grid` - Background grid pattern

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:push      # Push schema to database
npm run db:migrate   # Run database migrations
npm run db:studio    # Open Prisma Studio
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `RESEND_API_KEY` | Resend API key for email |
| `NEXT_PUBLIC_APP_URL` | Base URL for the site |

## Deployment

The site is designed for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy

For other platforms, ensure you have:
- Node.js 18+ runtime
- PostgreSQL database accessible
- Environment variables configured

## Content Guidelines

- Author name: **Casper Tavitian** (not Caspar)
- Dates should use: **January 2025** format
- Tagline: "AI implementation for compliance-heavy industries. Sydney, Australia."
- Industries served: Construction, Fire Safety, Healthcare, Engineering, Legal, Finance

## License

Proprietary - All rights reserved.

---

Built by Mentaris · admin@mentaris.io · Sydney, Australia
