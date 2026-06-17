# Divine Events - Luxury Asian Wedding Decor Website

A world-class luxury website for Divine Events, the UK's premier Asian wedding decor and mandap hire service.

## 🎯 Project Overview

This is a Next.js 15 luxury website designed to dominate the South Asian wedding decor market in the UK. The site features:

- **Cinematic Design**: Vogue Weddings-inspired aesthetic with premium animations
- **Conversion Optimized**: Strategic CTAs, lead generation forms, and trust signals
- **SEO Powerhouse**: Complete local SEO strategy targeting Leicester, Birmingham, London, and UK-wide
- **Mobile-First**: Responsive design optimized for all devices
- **Performance**: Server components, static generation, and optimized assets

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom luxury design system
- **Animations**: Framer Motion
- **UI Components**: Shadcn/UI, Radix UI
- **Icons**: Lucide React
- **Fonts**: Playfair Display, Cormorant Garamond

## 🎨 Design System

### Color Palette

```css
Primary Cream: #F7F3EE
Luxury Gold: #D4AF37
Burgundy Accent: #8B1E3F
Charcoal Text: #1A1A1A
```

### Typography

- **Display Font**: Playfair Display (headings)
- **Body Font**: Cormorant Garamond (body text)

### Key Design Principles

- Elegant and sophisticated
- Timeless luxury aesthetic
- Cinematic imagery and animations
- Premium microinteractions
- Generous white space
- Gold accents throughout

## 📁 Project Structure

```
divine-events/
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx                # Homepage with hero section
│   ├── globals.css             # Global styles and design system
│   ├── sitemap.ts              # Dynamic sitemap generation
│   ├── robots.ts               # Robots.txt configuration
│   ├── services/
│   │   └── mandap-hire/
│   │       └── page.tsx        # Mandap hire service page
│   ├── locations/
│   │   └── leicester/
│   │       └── page.tsx        # Leicester location page
│   └── contact/
│       └── page.tsx            # Contact form page
├── components/
│   ├── navigation.tsx          # Sticky navigation with scroll effects
│   ├── footer.tsx              # Footer with links and contact info
│   ├── schema-markup.tsx       # Structured data for SEO
│   └── ui/
│       └── button.tsx          # Reusable button component
├── lib/
│   └── utils.ts                # Utility functions
└── public/                     # Static assets
```

## 🎯 Key Features

### 1. Homepage
- Cinematic hero section with parallax effects
- Services overview with premium cards
- Why choose us section
- Trust signals and social proof
- Strategic CTAs throughout

### 2. Service Pages
- Detailed service descriptions
- Pricing information
- Process breakdown
- Gallery showcases
- Conversion-focused CTAs

### 3. Location Pages
- Local SEO optimization
- Area-specific content
- Venue partnerships
- Coverage areas
- Local trust signals

### 4. Contact Page
- Comprehensive lead generation form
- Multiple contact methods
- WhatsApp integration
- Service selection checkboxes
- Budget and guest count fields

### 5. SEO Implementation
- Complete metadata optimization
- Schema.org structured data
- Dynamic sitemap generation
- Robots.txt configuration
- Local business markup
- Service schema
- FAQ schema

## 🔍 SEO Strategy

### Target Keywords

Primary:
- Mandap Hire Leicester
- Asian Wedding Decor Leicester
- Mandap Hire UK
- Luxury Wedding Decor UK
- Indian Wedding Decor UK

Secondary:
- Hindu Wedding Mandap
- Sikh Wedding Decor
- Muslim Wedding Decor
- Asian Wedding DJ
- Wedding Reception Decor

### Location Pages

Created for:
- Leicester (primary)
- Birmingham
- London
- Nottingham
- Derby
- Coventry
- East Midlands

### Schema Markup

Implemented:
- LocalBusiness
- Service
- FAQPage
- BreadcrumbList
- AggregateRating

## 🎨 Image Prompts

Throughout the site, image prompts are provided for generating luxury wedding imagery:

**Hero Section**:
```
Ultra luxury South Asian wedding mandap, handcrafted ivory pillars with intricate gold detailing, lavish white and gold floral installations cascading down ornate columns, elegant wedding aisle with rose petals, luxury UK wedding venue, cinematic lighting, editorial wedding photography, Vogue Weddings aesthetic, ultra realistic, 8k quality, timeless luxury, premium event production
```

**Mandap Details**:
```
Close-up of luxury mandap pillar detail, intricate gold filigree work, handcrafted ivory column with royal gold detailing, premium craftsmanship, macro photography, editorial style, ultra realistic, 8k quality
```

**Leicester Venue**:
```
Luxury Asian wedding at Leicester venue, elegant mandap setup, beautiful Indian bride and groom, Leicester wedding venue interior, professional photography, editorial style, ultra realistic
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

```bash
# Run development server with turbopack
npm run dev

# Open browser
http://localhost:3000
```

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance Optimizations

- Server Components by default
- Static generation where possible
- Optimized images with Next.js Image
- Code splitting and lazy loading
- Minimal JavaScript bundle
- CSS optimization with TailwindCSS

## 🎯 Conversion Optimization

### CTAs Placement
- Hero section (primary)
- Navigation (sticky)
- Service cards
- Footer
- Floating WhatsApp button

### Trust Signals
- 500+ weddings completed
- 5-star reviews
- Award-winning service
- Venue partnerships
- Coverage areas

### Lead Generation
- Contact form with qualification fields
- WhatsApp integration
- Phone call CTAs
- Email contact
- Service selection

## 📊 Analytics & Tracking

Ready for integration:
- Google Analytics 4
- Google Tag Manager
- Facebook Pixel
- Conversion tracking
- Heat mapping tools

## 🔐 Security

- Environment variables for sensitive data
- Form validation
- HTTPS enforcement
- Security headers

## 📝 Content Strategy

### Tone of Voice
- Luxury and premium
- Emotional storytelling
- Cultural sensitivity
- Professional yet warm
- Aspirational

### Key Messages
- Unforgettable celebrations
- Family traditions honored
- Bespoke design
- Attention to detail
- Luxury experiences

## 🎨 Brand Guidelines

### Do's
- Use luxury editorial imagery
- Maintain generous spacing
- Emphasize gold accents
- Show cultural authenticity
- Highlight craftsmanship

### Don'ts
- Avoid generic stock photos
- No bright flashy colors
- No overcrowded layouts
- No generic templates
- No cheap aesthetics

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://divineevents.co.uk
NEXT_PUBLIC_GOOGLE_ANALYTICS=UA-XXXXXXXXX-X
```

## 📈 Future Enhancements

- [ ] Blog section for SEO content
- [ ] Portfolio gallery with filtering
- [ ] Testimonials page with video reviews
- [ ] Online booking system
- [ ] Live chat integration
- [ ] Multi-language support (Gujarati, Punjabi, Hindi)
- [ ] Virtual mandap preview (3D/AR)
- [ ] Real-time availability calendar

## 🤝 Contributing

This is a client project. For updates or modifications, contact the development team.

## 📄 License

Proprietary - Divine Events © 2024

## 📞 Support

For technical support or questions:
- Email: dev@divineevents.co.uk
- Phone: +44 123 456 7890

---

**Built with ❤️ for Divine Events**

*Creating unforgettable luxury Asian wedding experiences across the UK*
