# Images Directory

## Current Status
All images are now loaded from **Unsplash** (free stock photos) via CDN URLs. No local images are required.

## Images Used

### Hero Carousel
- **Banking**: Modern office/banking technology
- **Healthcare**: Hospital/medical facility
- **Enterprise**: Technology/data center

### Product Categories
- **Banking & Finance**: ATM/banking terminal
- **Healthcare**: Medical equipment/hospital
- **Security**: Cybersecurity/lock systems
- **Transportation**: Public transit/ticketing
- **Information**: Digital displays/screens
- **Payment**: Credit card/payment terminal

### About Page
- Team collaboration photos
- Business area images (banking, healthcare, security, payment)

## Benefits of Unsplash
- ✅ High-quality professional images
- ✅ Free to use (no attribution required)
- ✅ Fast CDN delivery
- ✅ No local storage needed
- ✅ Always available

## If You Want Custom Images
To replace Unsplash images with your own:

1. Place images in this directory
2. Update component files to use local paths:
   - `client/src/components/HeroCarousel.tsx`
   - `client/src/components/ProductCategories.tsx`
   - `client/src/pages/About.tsx`

Example:
```tsx
// Change from:
image: "https://images.unsplash.com/photo-..."

// To:
image: "/images/your-image.jpg"
```
