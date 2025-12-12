# Lumen — Smart Ambient Light Landing Page

A fully responsive, production-ready landing page for Lumen — Smart Ambient Light, built with React, TypeScript, Vite, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
Framer/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── Features.tsx
│   │   ├── Demo.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   ├── PricingGrid.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── Footer.tsx
│   │   └── StructuredData.tsx
│   ├── styles/              # Component styles
│   │   ├── theme.css        # Theme tokens & global styles
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── Button.css
│   │   ├── FeatureCard.css
│   │   ├── Features.css
│   │   ├── Demo.css
│   │   ├── TestimonialCarousel.css
│   │   ├── PricingGrid.css
│   │   ├── FAQAccordion.css
│   │   └── Footer.css
│   ├── data/                # CMS data
│   │   └── cms.ts           # Placeholder CMS content
│   ├── types/               # TypeScript types
│   │   └── cms.ts           # CMS type definitions
│   ├── pages/               # Page components
│   │   └── TestPage.tsx     # Component test page
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Component Map

### Header Component
- **Location**: `src/components/Header.tsx`
- **Props**: `onDemoClick: () => void`
- **Features**:
  - Left-aligned Lumen logo
  - Navigation links (Features, Pricing, Demo, FAQ, Contact)
  - Primary CTA: "Buy Lumen"
  - Secondary CTA: "See demo" (smooth scroll)
  - Sticky header with backdrop blur
  - Responsive mobile menu

### Hero Component
- **Location**: `src/components/Hero.tsx`
- **Props**: 
  - `heading: string`
  - `subheading: string`
  - `heroImage: string`
  - `onBuyClick: () => void`
  - `onDemoClick: () => void`
- **Features**:
  - H1 heading
  - Subheading text
  - Primary and secondary CTAs
  - Parallax scroll effect on hero image
  - Full viewport height

### FeatureCard Component
- **Location**: `src/components/FeatureCard.tsx`
- **Props**: `feature: Feature`, `index: number`
- **Features**:
  - Icon (SVG)
  - Title
  - Description
  - Supporting image
  - Hover animations
  - Semantic `<article>` element

### Features Component
- **Location**: `src/components/Features.tsx`
- **Props**: `features: Feature[]`
- **Features**:
  - Grid layout (responsive)
  - Renders multiple FeatureCard components
  - Section heading

### Demo Component
- **Location**: `src/components/Demo.tsx`
- **Features**:
  - Scrollable anchor (#demo)
  - Video/image placeholder
  - Description text
  - Responsive layout

### TestimonialCarousel Component
- **Location**: `src/components/TestimonialCarousel.tsx`
- **Props**: `testimonials: Testimonial[]`
- **Features**:
  - Keyboard navigation (Arrow Left/Right)
  - Previous/Next buttons
  - Carousel indicators
  - Smooth animations
  - ARIA labels for accessibility
  - Rating display

### PricingGrid Component
- **Location**: `src/components/PricingGrid.tsx`
- **Props**: `plans: Plan[]`
- **Features**:
  - Three pricing plans (Starter, Pro, Studio)
  - Highlighted Pro plan
  - Feature lists
  - "Buy Now" CTAs
  - Responsive grid layout

### FAQAccordion Component
- **Location**: `src/components/FAQAccordion.tsx`
- **Props**: `faqs: FAQ[]`
- **Features**:
  - Accordion semantics (`aria-expanded`)
  - Smooth open/close animations
  - Keyboard accessible
  - 5 FAQ items

### Footer Component
- **Location**: `src/components/Footer.tsx`
- **Features**:
  - Sitemap links
  - Social media icons (accessible)
  - Contact information (`<address>`)
  - Copyright notice
  - Responsive grid layout

### StructuredData Component
- **Location**: `src/components/StructuredData.tsx`
- **Features**:
  - JSON-LD Organization schema
  - JSON-LD Product schema
  - Aggregate ratings
  - Offer/pricing information

## 📊 CMS Schema

### Pages Collection
```typescript
interface Page {
  title: string;
  slug: string;
  hero_heading: string;
  hero_subheading: string;
  hero_image: string;          // CMS image URL
  meta_title: string;
  meta_description: string;
  hide_from_nav: boolean;
}
```

### Features Collection
```typescript
interface Feature {
  title: string;
  short_description: string;
  icon_svg: string;             // SVG markup
  image: string;                // CMS image URL
  order: number;                // Display order
}
```

### Testimonials Collection
```typescript
interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar_image: string;         // CMS image URL
  rating: number;               // 1-5
  order: number;                // Display order
}
```

### Plans Collection
```typescript
interface Plan {
  name: string;
  price_monthly: number;
  features_list: string;        // Multi-line text
  cta_text: string;
  cta_link: string;
  highlight: boolean;            // Highlight this plan
  order: number;                // Display order
}
```

### FAQ Collection
```typescript
interface FAQ {
  question: string;
  answer: string;
  order: number;                // Display order
}
```

## 🎨 Theme Tokens

CSS custom properties defined in `src/styles/theme.css`:

```css
--brand-500: #675CFF    /* Primary brand color */
--brand-700: #4538E0    /* Darker brand variant */
--muted: #6B7280        /* Muted text color */
--bg: #FFFFFF           /* Background color */
--surface: #F7F7F7      /* Surface/card background */
```

## 📱 Responsive Breakpoints

- **Mobile**: ≤480px (single column stacking)
- **Tablet**: 481–900px (8-column grid)
- **Desktop**: 901–1400px (12-column grid)
- **Ultrawide**: >1400px (12-column wide layout with max-width container)

## 🔍 SEO & Metadata

### Meta Tags
- Page title: "Lumen — Smart Ambient Light That Adapts to You"
- Meta description: "Lumen learns your mood and syncs with music to create perfect ambient lighting."
- Canonical URL
- Viewport tag
- Robots meta

### Open Graph Tags
- `og:title`
- `og:description`
- `og:image` (≥1200×630 recommended)
- `og:url`

### Twitter Card Tags
- `twitter:card` (summary_large_image)
- `twitter:title`
- `twitter:description`
- `twitter:image`

### JSON-LD Structured Data
- Organization schema (name, logo, contact info, social links)
- Product schema (name, description, SKU, pricing, ratings)

## ♿ Accessibility Checklist

- ✅ Semantic HTML structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ✅ Single H1 in hero section
- ✅ All buttons and links keyboard focusable
- ✅ Visible focus states (`:focus-visible`)
- ✅ ARIA labels on icon-only buttons
- ✅ `lang="en"` on HTML element
- ✅ Alt text on all images
- ✅ Proper heading hierarchy
- ✅ Keyboard navigation for carousel (Arrow Left/Right)
- ✅ Accordion with `aria-expanded` attributes
- ✅ Screen reader friendly navigation

## 🧪 Responsive Testing Checklist

Test at these viewport widths:
- ✅ 375px (iPhone SE)
- ✅ 480px (Mobile breakpoint)
- ✅ 768px (Tablet)
- ✅ 1024px (Desktop)
- ✅ 1280px (Desktop)
- ✅ 1600px (Ultrawide)
- ✅ 1920px (Full HD)

### Testing Points
- ✅ No horizontal scroll at any width
- ✅ Hero image scales fluidly
- ✅ Headlines scale appropriately
- ✅ CTAs remain accessible
- ✅ Feature cards stack/grid correctly
- ✅ Navigation adapts to mobile
- ✅ Footer layout adjusts
- ✅ All interactive elements remain usable

## 🎯 Features Implemented

### Layout & Breakpoints
- ✅ Four responsive breakpoints
- ✅ No horizontal scroll
- ✅ Fluid scaling of all elements

### Semantic Structure
- ✅ Correct HTML5 semantic elements
- ✅ Single H1
- ✅ Keyboard focusable elements
- ✅ Visible focus states
- ✅ ARIA labels
- ✅ `lang="en"`

### UI Design & Interactions
- ✅ Header with logo and navigation
- ✅ Hero section with parallax
- ✅ Feature cards (3-4 items)
- ✅ Demo section with scroll anchor
- ✅ Testimonials carousel with keyboard nav
- ✅ Pricing section (3 plans)
- ✅ FAQ accordion (5 items)
- ✅ Footer with sitemap and social icons
- ✅ Hover states on CTAs
- ✅ Smooth scroll behavior
- ✅ System font stack (Inter/system-ui/sans-serif)

### SEO & Metadata
- ✅ Page title and meta description
- ✅ Canonical URL
- ✅ Viewport tag
- ✅ Robots meta
- ✅ Open Graph tags
- ✅ Twitter card tags
- ✅ JSON-LD structured data

### Images & Alt Text
- ✅ CMS images for all visuals
- ✅ Descriptive alt text

### CMS Setup
- ✅ Pages collection
- ✅ Features collection
- ✅ Testimonials collection
- ✅ Plans collection
- ✅ FAQ collection
- ✅ Placeholder content

### Component Architecture
- ✅ Components in `components/` folder
- ✅ Props-based components
- ✅ Variant support
- ✅ Consistent naming
- ✅ Theme tokens exported

## 🛠️ Development

### Adding New Components
1. Create component file in `src/components/`
2. Create corresponding CSS file in `src/styles/`
3. Import and use in `App.tsx` or appropriate page
4. Add to component map in README

### Updating CMS Data
Edit `src/data/cms.ts` with your CMS content. In production, this would connect to your CMS API.

### Customizing Theme
Modify CSS custom properties in `src/styles/theme.css`.

## 📝 Notes

- All images use placeholder URLs from Unsplash. Replace with actual CMS-hosted images in production.
- The demo section uses a placeholder. Replace with actual video embed in production.
- Social media links are placeholder `#` links. Update with actual URLs.
- CTA buttons link to `#`. Update with actual purchase/demo URLs.

## 🚀 Deployment

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting provider
3. Update canonical URLs and OG image URLs to match your domain
4. Connect CMS data source (replace `src/data/cms.ts` with API calls)

## 📄 License

This project is created for the Lumen landing page demonstration.

