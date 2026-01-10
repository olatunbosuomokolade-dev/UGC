# Content Editing Guide

Quick reference guide for editing website content without touching component code.

## 📍 File Locations

All content is stored in TypeScript files under `src/data/`:

- **Projects**: `src/data/projects.ts`
- **Testimonials**: `src/data/testimonials.ts`
- **Services**: `src/data/services.ts`
- **Pricing**: `src/data/pricing.ts`
- **FAQs**: `src/data/faqs.ts`
- **Stats**: `src/data/stats.ts`

## 📝 Quick Edits

### Add a New Project

1. Open `src/data/projects.ts`
2. Add a new object to the `projects` array:

```typescript
{
  id: 'new-project-id',
  title: 'Project Title',
  client: 'Client Name', // Optional
  description: 'Describe the project...',
  image: '/images/work/your-image.jpg',
  videoUrl: 'https://...', // Optional
  tags: ['skincare', 'ugc', 'routine'],
  category: 'ugc', // 'ugc' | 'editing' | 'both'
  featured: true, // Shows on homepage if true
}
```

3. Add the image to `public/images/work/`
4. Save and refresh the browser

### Add a Testimonial

1. Open `src/data/testimonials.ts`
2. Add a new object to the `testimonials` array:

```typescript
{
  id: 'testimonial-id',
  name: 'Client Name',
  role: 'Their Role',
  company: 'Company Name',
  image: '/images/testimonials/client-name.jpg', // Optional
  content: 'Their testimonial text here...',
  rating: 5, // 1-5 stars
  featured: true, // Shows on homepage if true
}
```

3. Add profile image to `public/images/testimonials/` (optional)
4. Save and refresh

### Update Pricing

1. Open `src/data/pricing.ts`
2. Edit the `pricingTiers` array
3. Modify price, features, or add new tiers
4. Save and refresh

### Update Services

1. Open `src/data/services.ts`
2. Edit service descriptions, features, or add new services
3. Save and refresh

### Update FAQs

1. Open `src/data/faqs.ts`
2. Add/edit FAQ objects in the `faqs` array:

```typescript
{
  id: 'faq-id',
  question: 'Your question?',
  answer: 'Your answer...',
  category: 'general', // 'general' | 'ugc' | 'editing' | 'pricing'
}
```

3. Save and refresh

### Update Stats (Homepage Numbers)

1. Open `src/data/stats.ts`
2. Edit the `stats` array:

```typescript
{
  id: 'stat-id',
  value: '500',
  suffix: 'K+', // Optional
  label: 'Total Views',
}
```

3. Save and refresh

## 🖼️ Image Guidelines

### Portfolio Images

- **Location**: `public/images/work/`
- **Recommended size**: 800x1000px (4:5 ratio) or 1200x675px (16:9 for videos)
- **Naming**: Use descriptive kebab-case (e.g., `skincare-routine-ugc.jpg`)
- **Format**: JPG, PNG, WebP, or AVIF

### Testimonial Images

- **Location**: `public/images/testimonials/`
- **Recommended size**: 200x200px (square, displayed as circle)
- **Naming**: Client name in kebab-case (e.g., `sarah-chen.jpg`)
- **Format**: JPG or PNG

### Other Images

- **Hero image**: `public/images/hero-image.jpg` (1200x1500px recommended)
- **About image**: `public/images/about-image.jpg` (800x1000px recommended)
- **OG image**: `public/images/og-image.jpg` (1200x630px for social sharing)

## ⚡ Quick Tips

1. **Always refresh the browser** after editing data files
2. **Use unique IDs** for each item (projects, testimonials, FAQs, etc.)
3. **Keep descriptions concise** but informative
4. **Use featured flag** to control what appears on the homepage
5. **Check image paths** match the actual file names in the public folder

## 🔍 Finding Content to Edit

- **Homepage hero text**: Edit `src/components/Hero.tsx` (direct component edit)
- **Navigation links**: Edit `src/components/Navbar.tsx`
- **Footer content**: Edit `src/components/Footer.tsx`
- **Contact info**: Edit `src/app/contact/page.tsx` and `src/components/Footer.tsx`
- **Page titles/descriptions**: Edit metadata in each page file (e.g., `src/app/about/page.tsx`)

## 📧 Contact Form

The contact form needs backend integration. Options:
1. Use Formspree, FormSubmit, or similar service
2. Create a Next.js API route
3. Use a third-party service integration

See README.md for more details.

## ✨ Styling Changes

For major design changes, you'll need to edit component files in `src/components/`. The styling uses Tailwind CSS classes, so changes are straightforward if you're familiar with Tailwind.

---

Need help? Check the main README.md for more detailed information.









