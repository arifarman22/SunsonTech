# Quick Start - Enterprise Minimalist Design

## What Changed?
The website has been completely redesigned with a clean, minimalistic, enterprise aesthetic:
- Simple white/blue color scheme
- Clean typography (Inter font)
- Minimal animations
- Professional appearance
- Easy to navigate

## How to Run

### 1. Start the Development Server
```bash
npm run dev
```

The server will start on **port 3002** (configured to avoid conflicts).

### 2. Open in Browser
Navigate to: `http://localhost:3002`

### 3. If Port 3002 is Busy
Edit `server/index.ts` line 64 and change the port:
```typescript
const port = parseInt(process.env.PORT || '3003', 10);
```

## What You'll See

### Homepage
- **Header**: Clean navigation bar with logo and menu
- **Hero**: Large banner with product images and descriptions
- **Products**: 6 category cards in a grid
- **About**: Company information with statistics
- **Footer**: Contact information and links

### Design Features
- White background with blue accents
- Simple card designs with subtle shadows
- Clean typography
- Responsive layout
- Language selector in header

## Adding Images

### Where to Put Images
Place images in: `public/images/`

### Required Images
1. **Hero Images** (1200x600px):
   - `banking-hero.jpg`
   - `healthcare-hero.jpg`
   - `enterprise-hero.jpg`

2. **Category Images** (800x600px):
   - `banking-category.jpg`
   - `healthcare-category.jpg`
   - `security-category.jpg`
   - `transportation-category.jpg`
   - `information-category.jpg`
   - `payment-category.jpg`

### Fallback
If images are missing, the app shows SVG placeholders automatically.

## Troubleshooting

### Can't See Changes?
1. **Hard refresh**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Clear cache**: Open DevTools (F12) → Network tab → Check "Disable cache"
3. **Restart server**: Stop (Ctrl+C) and run `npm run dev` again

### Port Already in Use?
```bash
# Kill all Node processes
taskkill /f /im node.exe

# Then restart
npm run dev
```

### CSS Not Loading?
1. Check if `client/src/index.css` exists
2. Verify `client/src/main.tsx` imports the CSS
3. Clear browser cache

## Key Files

### Components
- `client/src/components/Header.tsx` - Navigation
- `client/src/components/HeroCarousel.tsx` - Hero section
- `client/src/components/ProductCategories.tsx` - Product grid
- `client/src/components/AboutSection.tsx` - About section
- `client/src/components/Footer.tsx` - Footer

### Styles
- `client/src/index.css` - Main stylesheet
- `tailwind.config.ts` - Tailwind configuration

### Pages
- `client/src/pages/Home.tsx` - Homepage
- `client/src/pages/About.tsx` - About page
- `client/src/pages/Contact.tsx` - Contact page

## Customization

### Change Colors
Edit `client/src/index.css`:
```css
:root {
  --primary: 30 58 138; /* Blue */
  --foreground: 15 23 42; /* Dark text */
  --background: 255 255 255; /* White */
}
```

### Change Font
Edit `client/src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}
```

### Adjust Spacing
Edit section padding in `client/src/index.css`:
```css
.section-enterprise {
  @apply py-16 md:py-20 lg:py-24; /* Adjust these values */
}
```

## Support
- Check `ENTERPRISE_REDESIGN.md` for detailed design documentation
- Review `public/images/README.md` for image requirements
- See original `REDESIGN_SUMMARY.md` for previous design reference
