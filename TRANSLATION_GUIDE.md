# Multi-Language Translation System

## Overview
This project now supports 12 languages with automatic translation when users select a language from the language selector.

## Supported Languages
1. English (en) 🇺🇸
2. Bengali (bn) 🇧🇩
3. Hindi (hi) 🇮🇳
4. Arabic (ar) 🇸🇦
5. French (fr) 🇫🇷
6. Spanish (es) 🇪🇸
7. German (de) 🇩🇪
8. Chinese (zh-CN) 🇨🇳
9. Japanese (ja) 🇯🇵
10. Korean (ko) 🇰🇷
11. Russian (ru) 🇷🇺
12. Portuguese (pt) 🇵🇹

## How It Works

### 1. Language Context
The `LanguageContext` provides:
- `language`: Current selected language code
- `setLanguage(lang)`: Function to change language
- `t(key)`: Translation function to get translated text
- `getLocalizedImage(path, ext)`: Function to get localized images

### 2. Using Translations in Components

```tsx
import { useLanguage } from '@/contexts/LanguageContext';

function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t('nav.products')}</h1>
      <button>{t('common.learnMore')}</button>
    </div>
  );
}
```

### 3. Adding New Translations

Edit `client/src/lib/translations.ts` and add your key-value pairs:

```typescript
export const translations = {
  en: {
    'mykey': 'My English Text',
  },
  es: {
    'mykey': 'Mi Texto en Español',
  },
  // ... add for all languages
};
```

### 4. Localized Images

For images that need to change based on language:

#### Option A: Using the Hook
```tsx
import { useLocalizedImage } from '@/hooks/useLocalizedImage';

function MyComponent() {
  const imageSrc = useLocalizedImage('/images/banner', 'jpg');
  
  return <img src={imageSrc} alt="Banner" />;
}
```

#### Option B: Using the Context Function
```tsx
import { useLanguage } from '@/contexts/LanguageContext';

function MyComponent() {
  const { getLocalizedImage } = useLanguage();
  const imageSrc = getLocalizedImage('/images/banner', 'jpg');
  
  return <img src={imageSrc} alt="Banner" />;
}
```

#### Image Naming Convention
- Base: `/images/banner.jpg`
- English: `/images/banner_en.jpg`
- Spanish: `/images/banner_es.jpg`
- French: `/images/banner_fr.jpg`
- etc.

The system will automatically try:
1. Localized version (`banner_es.jpg`)
2. English fallback (`banner_en.jpg`)
3. Base version (`banner.jpg`)

### 5. Language Selection

Users can change language by clicking the language selector in the header. The selection:
- Updates immediately across all components
- Persists in localStorage
- Sets document direction (RTL for Arabic)
- Updates the HTML lang attribute

### 6. RTL Support

Arabic language automatically enables RTL (Right-to-Left) layout:
```typescript
if (language === 'ar') {
  document.documentElement.dir = 'rtl';
} else {
  document.documentElement.dir = 'ltr';
}
```

## Translation Keys Reference

### Navigation
- `nav.products` - Products menu
- `nav.solutions` - Solutions menu
- `nav.about` - About page
- `nav.contact` - Contact page
- `nav.getStarted` - Get Started button

### Products
- `products.banking` - Banking & Finance
- `products.healthcare` - Healthcare Innovation
- `products.security` - Security & Encryption
- `products.transportation` - Smart Transportation
- `products.information` - Digital Experience
- `products.payment` - Future Payments

### Common Actions
- `common.learnMore` - Learn More button
- `common.getQuote` - Get Quote button
- `common.contactUs` - Contact Us button
- `common.viewDetails` - View Details button
- `common.exploreAll` - View All Solutions button

### Hero Section
- `hero.title` - Main hero title
- `hero.subtitle` - Hero subtitle/description

### Footer
- `footer.serving` - Serving countries text
- `footer.company` - Company section title
- `footer.solutions` - Solutions section title

## Best Practices

1. **Always use translation keys** instead of hardcoded text
2. **Keep keys organized** by section (nav., products., common., etc.)
3. **Provide translations for all 12 languages** when adding new keys
4. **Use descriptive key names** that indicate where they're used
5. **Test with different languages** especially RTL (Arabic)
6. **Optimize images** for each language variant
7. **Use fallbacks** for missing translations

## Example: Adding a New Page with Translations

```typescript
// 1. Add translations to lib/translations.ts
export const translations = {
  en: {
    'pricing.title': 'Our Pricing Plans',
    'pricing.monthly': 'Monthly',
    'pricing.yearly': 'Yearly',
  },
  es: {
    'pricing.title': 'Nuestros Planes de Precios',
    'pricing.monthly': 'Mensual',
    'pricing.yearly': 'Anual',
  },
  // ... add for all 12 languages
};

// 2. Use in your component
import { useLanguage } from '@/contexts/LanguageContext';

function PricingPage() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t('pricing.title')}</h1>
      <button>{t('pricing.monthly')}</button>
      <button>{t('pricing.yearly')}</button>
    </div>
  );
}
```

## Troubleshooting

### Translation not showing
- Check if the key exists in `translations.ts`
- Verify the key is spelled correctly
- Ensure all 12 languages have the translation

### Image not loading
- Check file naming convention matches pattern
- Verify image files exist in public directory
- Check browser console for 404 errors

### RTL layout issues
- Test specifically with Arabic language
- Use logical CSS properties (margin-inline-start instead of margin-left)
- Avoid absolute positioning that assumes LTR

## Future Enhancements

- Add more languages as needed
- Implement lazy loading for translations
- Add translation management UI
- Support for pluralization rules
- Date/time localization
- Number formatting per locale
