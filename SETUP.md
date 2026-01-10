# Quick Setup Checklist

Follow these steps to get your portfolio website up and running.

## ✅ Initial Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to http://localhost:3000

## 🔧 Customization Checklist

Before deploying, customize these items:

### Essential Updates

- [ ] Replace "Your Name" with your actual name/brand
  - `src/components/Navbar.tsx`
  - `src/components/Footer.tsx`
  - `src/app/layout.tsx` (metadata)

- [ ] Update contact information
  - Email: `src/components/Footer.tsx` and `src/app/contact/page.tsx`
  - WhatsApp number: `src/components/Footer.tsx` and `src/app/contact/page.tsx`
  - Social media links: `src/components/Footer.tsx`

- [ ] Update website URL
  - `src/app/layout.tsx` (OpenGraph URL)
  - All metadata files if you have a custom domain

### Content Updates

- [ ] Add your portfolio projects
  - Edit `src/data/projects.ts`
  - Add images to `public/images/work/`

- [ ] Add client testimonials
  - Edit `src/data/testimonials.ts`
  - Add profile images to `public/images/testimonials/` (optional)

- [ ] Update services and pricing
  - Edit `src/data/services.ts`
  - Edit `src/data/pricing.ts`

- [ ] Add/update FAQs
  - Edit `src/data/faqs.ts`

- [ ] Update stats/numbers
  - Edit `src/data/stats.ts`

- [ ] Add hero image
  - Place at `public/images/hero-image.jpg`
  - Recommended: 1200x1500px

- [ ] Add about page image
  - Place at `public/images/about-image.jpg`
  - Recommended: 800x1000px

- [ ] Add OG image for social sharing
  - Place at `public/images/og-image.jpg`
  - Recommended: 1200x630px

### SEO Updates

- [ ] Update site metadata
  - `src/app/layout.tsx` (site-wide SEO)
  - Each page file has its own metadata export

- [ ] Update keywords in metadata
  - Relevant to your niche and services

### Optional Customizations

- [ ] Adjust brand colors
  - Edit `tailwind.config.ts`
  - Update primary and neutral color palettes

- [ ] Set up contact form backend
  - See README.md for options
  - Currently simulates submission

- [ ] Customize fonts
  - Currently using Inter from Google Fonts
  - Can be changed in `src/app/layout.tsx`

## 🚀 Deployment Checklist

- [ ] Test all pages on mobile and desktop
- [ ] Verify all links work correctly
- [ ] Check image loading and optimization
- [ ] Test contact form (if backend is set up)
- [ ] Verify SEO metadata
- [ ] Check loading performance
- [ ] Test on different browsers

## 📝 Next Steps After Setup

1. **Content**: Add your actual portfolio work, testimonials, etc.
2. **Images**: Replace placeholder image paths with actual images
3. **Backend**: Set up contact form submission (optional)
4. **Analytics**: Add Google Analytics or similar (optional)
5. **Domain**: Connect your custom domain
6. **SSL**: Ensure HTTPS is enabled

## 🆘 Troubleshooting

- **Images not showing?** Check file paths match exactly (case-sensitive)
- **Build errors?** Run `npm run build` to see detailed errors
- **Styles not working?** Ensure Tailwind CSS is properly configured
- **Type errors?** Check TypeScript configuration in `tsconfig.json`

## 📚 Documentation

- **README.md** - Full documentation
- **CONTENT_GUIDE.md** - Detailed content editing guide
- **This file** - Quick setup checklist

---

Ready to launch! 🎉









