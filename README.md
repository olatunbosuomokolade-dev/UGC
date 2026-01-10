# UGC Portfolio Website

A production-ready portfolio website for a skincare content creator and video editor, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for subtle, professional animations
- **SEO Optimized**: Comprehensive metadata, OpenGraph, and Twitter cards
- **Performance**: Optimized images with next/image, lazy loading, clean bundle
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Content-Driven**: Easy-to-edit content in TypeScript data files

## 📁 Project Structure

```
ugc-portfolio/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── layout.tsx        # Root layout with Navbar & Footer
│   │   ├── page.tsx          # Home page
│   │   ├── about/            # About page
│   │   ├── work/             # Portfolio page
│   │   ├── services/         # Services page
│   │   ├── pricing/          # Pricing page
│   │   ├── testimonials/     # Testimonials page
│   │   └── contact/          # Contact page
│   ├── components/           # React components
│   │   ├── Navbar.tsx        # Sticky navigation with mobile menu
│   │   ├── Footer.tsx        # Footer with links and socials
│   │   ├── Hero.tsx          # Hero section
│   │   ├── StatsStrip.tsx    # Stats section
│   │   ├── PortfolioGrid.tsx # Portfolio grid with filters & lightbox
│   │   ├── ServicesPreview.tsx
│   │   ├── TestimonialsPreview.tsx
│   │   ├── CTASection.tsx
│   │   └── FAQAccordion.tsx  # FAQ accordion component
│   └── data/                 # Content data files (easily editable)
│       ├── projects.ts       # Portfolio projects
│       ├── testimonials.ts   # Client testimonials
│       ├── services.ts       # Services offered
│       ├── pricing.ts        # Pricing tiers
│       ├── faqs.ts           # Frequently asked questions
│       └── stats.ts          # Statistics/numbers
├── public/
│   └── images/               # Image assets
│       ├── work/             # Portfolio images
│       ├── testimonials/     # Testimonial profile images
│       ├── hero-image.jpg    # Hero section image
│       └── about-image.jpg   # About page image
└── [config files]            # Next.js, TypeScript, Tailwind configs
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Basic knowledge of React and TypeScript

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Editing Content

All content is stored in TypeScript files under `src/data/` for easy editing without touching component code.

### Projects (`src/data/projects.ts`)

Add, edit, or remove portfolio projects:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  client: 'Client Name', // Optional
  description: 'Project description...',
  image: '/images/work/project-image.jpg',
  videoUrl: 'https://...', // Optional
  tags: ['tag1', 'tag2'],
  category: 'ugc' | 'editing' | 'both',
  featured: true, // Featured projects show on homepage
}
```

**Image naming convention**: Use descriptive kebab-case names:
- `skincare-routine-ugc.jpg`
- `product-launch-video.jpg`
- `serum-review.jpg`

Place images in `public/images/work/`

### Testimonials (`src/data/testimonials.ts`)

Add client testimonials:

```typescript
{
  id: 'unique-id',
  name: 'Client Name',
  role: 'Their Role',
  company: 'Company Name',
  image: '/images/testimonials/client-name.jpg', // Optional
  content: 'Testimonial text...',
  rating: 5, // 1-5 stars
  featured: true, // Featured testimonials show on homepage
}
```

**Image naming convention**: Use client name in kebab-case:
- `sarah-chen.jpg`
- `michael-rodriguez.jpg`

Place images in `public/images/testimonials/`

### Services (`src/data/services.ts`)

Update services and features offered.

### Pricing (`src/data/pricing.ts`)

Update pricing tiers, features, and pricing.

### FAQs (`src/data/faqs.ts`)

Add or edit frequently asked questions.

### Stats (`src/data/stats.ts`)

Update statistics shown on the homepage stats strip.

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    // Your primary brand colors
  },
  neutral: {
    // Neutral/gray colors
  },
}
```

### Brand Name

Replace "Your Name" throughout the codebase:
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/app/layout.tsx` (metadata)

### Contact Information

Update contact details in:
- `src/components/Footer.tsx` (email, WhatsApp, social links)
- `src/app/contact/page.tsx` (contact form and info)

### SEO Metadata

Update SEO information in:
- `src/app/layout.tsx` (site-wide metadata)
- Each page's metadata export (page-specific metadata)

## 🖼️ Image Requirements

### Recommended Image Sizes

- **Hero Image**: 1200x1500px (4:5 aspect ratio)
- **About Image**: 800x1000px (4:5 aspect ratio)
- **Portfolio Images**: 800x1000px (4:5 aspect ratio) or 1200x675px (16:9 for videos)
- **Testimonial Images**: 200x200px (square, will be displayed as circle)
- **OG Image**: 1200x630px (for social media sharing)

### Image Formats

Use modern formats when possible:
- WebP or AVIF for better compression
- JPG as fallback
- next/image will automatically optimize images

## 📧 Contact Form Setup

The contact form currently simulates submission. To make it functional:

1. **Option 1: Use a service like Formspree or FormSubmit**
   - Add the action URL to the form element

2. **Option 2: Use Next.js API Routes**
   - Create `src/app/api/contact/route.ts`
   - Handle form submission
   - Send emails using a service like Resend, SendGrid, or Nodemailer

3. **Option 3: Use a third-party service**
   - Integrate with services like Typeform, Calendly, etc.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

## 📱 Pages Overview

- **/** - Home page with hero, stats, services preview, portfolio preview, testimonials
- **/about** - About page with story, values, and expertise
- **/work** - Full portfolio grid with filtering and lightbox modal
- **/services** - Detailed services page with process
- **/pricing** - Pricing tiers and packages
- **/testimonials** - All client testimonials
- **/contact** - Contact form and information

## 🎯 Key Components

- **Navbar**: Sticky navigation with mobile menu and active route highlighting
- **PortfolioGrid**: Filterable grid with lightbox modal for project details
- **FAQAccordion**: Accordion component for FAQs with category filtering
- **Hero**: Eye-catching hero section with CTAs
- **StatsStrip**: Statistics showcase
- All components use Framer Motion for smooth animations

## 📚 Tech Stack Details

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **next/image**: Optimized image component

## 🔧 Development Tips

1. **Hot Reload**: Changes to data files require a page refresh
2. **Image Optimization**: Use `next/image` for all images
3. **Responsive Design**: Test on multiple screen sizes
4. **SEO**: Update metadata for each page before deploying
5. **Performance**: Run `npm run build` to check bundle size and performance

## 📄 License

This project is private and proprietary.

## 🤝 Support

For questions or issues, please contact the development team.

---

Built with ❤️ for premium skincare content creators.


