# 🚀 Quick Start Guide - Sunson Technology Website

## Overview
This is a **production-ready** corporate website for Sunson Technology, featuring:
- ✅ Modern corporate design
- ✅ 12-language support with Google Translate
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Professional animations and interactions
- ✅ SEO optimized
- ✅ Accessible (WCAG AA compliant)

## Tech Stack
- **Vite + React 18** - Fast development and builds
- **Wouter** - Lightweight routing
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Radix UI** - Accessible components
- **Google Translate** - Global translation

---

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit: http://localhost:5000

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm start
```

---

## Key Features

### 🌍 Multi-Language Support
- **12 Languages**: English, Bengali, Hindi, Arabic, French, Spanish, German, Chinese, Japanese, Korean, Russian, Portuguese
- **Language Selector**: Top-right corner of navigation
- **Persistent**: Selection saved in localStorage and cookies
- **Automatic**: Google Translate handles all content

### 🎨 Corporate Design
- **Professional Color Palette**: Navy, Blue, Gray tones
- **Consistent Typography**: Inter font family
- **Smooth Animations**: Framer Motion throughout
- **Glass Morphism**: Modern translucent effects
- **Hover States**: Professional interactions

### 📱 Fully Responsive
- **Mobile First**: Optimized for all devices
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### ♿ Accessible
- **WCAG AA Compliant**: Color contrast, keyboard navigation
- **Screen Reader Friendly**: Semantic HTML, ARIA labels
- **Focus Indicators**: Clear visual feedback

---

## Project Structure

```
client/src/
├── components/         # Reusable components
│   ├── Header.tsx     # Main navigation
│   ├── Footer.tsx     # Footer with links
│   ├── HeroCarousel.tsx
│   ├── ProductCategories.tsx
│   ├── GoogleTranslate.tsx
│   ├── PremiumLanguageSelector.tsx
│   └── ui/            # UI primitives
├── pages/             # Route pages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── products/
│   └── solutions/
├── contexts/          # React contexts
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
├── App.tsx           # Root component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

---

## Customization Guide

### Change Colors
**File**: `tailwind.config.ts`
```typescript
colors: {
  corporate: {
    50: '#f8fafc',
    // ... add your colors
  }
}
```

### Add Languages
**File**: `client/src/components/PremiumLanguageSelector.tsx`
```typescript
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸', label: 'English' },
  // Add more here
];
```

### Update Navigation
**File**: `client/src/components/Header.tsx`
- Modify links in the JSX structure
- Update dropdown menus

### Add Products
**File**: `client/src/pages/products/ProductDetail.tsx`
```typescript
const productData = {
  banking: [
    {
      id: "new-product",
      name: "Product Name",
      // ... add details
    }
  ]
};
```

---

## Common Tasks

### Add a New Page
1. Create file: `client/src/pages/NewPage.tsx`
2. Add route: `client/src/App.tsx`
```tsx
<Route path="/new-page" component={NewPage} />
```

### Update SEO
**Each page has meta tags**. Example:
```tsx
useEffect(() => {
  document.title = "Your Title";
  // Update meta description
}, []);
```

### Modify Hero Carousel
**File**: `client/src/components/HeroCarousel.tsx`
```typescript
const slides = [
  {
    id: 1,
    title: "Your Title",
    description: "Your description",
    image: "your-image-url",
    // ...
  }
];
```

---

## Testing

### Run All Tests
```bash
npm run check
```

### Check TypeScript
```bash
tsc --noEmit
```

### Test Language Switching
1. Click language selector (top-right)
2. Select any language
3. Page content should translate
4. Refresh page - language persists

### Test Responsive Design
1. Open DevTools (F12)
2. Toggle device toolbar
3. Test mobile, tablet, desktop views

---

## Deployment

### Build Process
```bash
npm run build
```
Output: `dist/` folder

### Deploy to Vercel
```bash
vercel deploy
```

### Deploy to Netlify
1. Connect GitHub repo
2. Set build command: `npm run build`
3. Set publish directory: `dist/public`

### Deploy to Custom Server
1. Build: `npm run build`
2. Copy `dist/` to server
3. Configure web server (nginx, apache)
4. Point domain to server

---

## Troubleshooting

### Language Not Persisting
- Check browser localStorage is enabled
- Clear cookies and try again
- Verify PremiumLanguageSelector is mounted

### Styles Not Loading
```bash
# Rebuild Tailwind
npm run build
```

### Google Translate Not Working
- Check internet connection
- Verify script loads (check Network tab)
- Clear browser cache

### Build Errors
```bash
# Clean install
rm -rf node_modules
npm install
npm run build
```

---

## Performance Tips

### Image Optimization
- Use WebP format
- Lazy load images
- Use CDN (Unsplash in examples)

### Code Splitting
- Already implemented per route
- Heavy components lazy loaded

### Bundle Size
- Run: `npm run build` to see bundle analysis
- Keep dependencies minimal

---

## Support & Resources

### Documentation
- **Full Documentation**: See `REDESIGN_SUMMARY.md`
- **Component Docs**: Comments in component files
- **API Docs**: See `server/routes.ts`

### External Resources
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## What's Next?

### Recommended Improvements
1. **Analytics**: Add Google Analytics or similar
2. **SEO**: Generate sitemap.xml
3. **Blog**: Add content management
4. **Testing**: Add unit and E2E tests
5. **CI/CD**: Automate deployments

### Advanced Features
1. **User Authentication**: Customer portal
2. **Live Chat**: Real-time support
3. **A/B Testing**: Optimize conversions
4. **CMS Integration**: Easy content updates
5. **Product Configurator**: Interactive product selection

---

## Need Help?

### Quick Fixes
- **Problem**: Page not loading → Check console for errors
- **Problem**: Styles broken → Run `npm run build`
- **Problem**: Translation issues → Clear cache and reload

### Contact
- **Technical**: Check `REDESIGN_SUMMARY.md`
- **Business**: See Contact page on website

---

## ✅ Final Checklist

Before going live:
- [ ] Test all pages
- [ ] Verify all links work
- [ ] Test language switching
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit (score > 90)
- [ ] Verify SEO meta tags
- [ ] Test contact form
- [ ] Check browser compatibility
- [ ] Review accessibility
- [ ] Optimize images
- [ ] Set up analytics
- [ ] Configure domain
- [ ] Enable HTTPS
- [ ] Create backups

---

**🎉 You're Ready to Launch!**

This website is production-ready and meets all requirements for a modern, professional corporate website with global reach.

---

**Version**: 2.0.0
**Last Updated**: January 23, 2026
