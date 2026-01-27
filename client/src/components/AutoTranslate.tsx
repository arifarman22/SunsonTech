import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translateElement } from '@/lib/translationService';

export default function AutoTranslate() {
  const { language } = useLanguage();

  useEffect(() => {
    if (language === 'en') return;

    const translatePage = async () => {
      // Wait for page to fully load
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Get main content (skip header/footer to avoid re-translating navigation)
      const main = document.querySelector('main') || document.body;
      
      if (main) {
        await translateElement(main as HTMLElement, language, 'en');
      }
    };

    translatePage();
  }, [language]);

  return null;
}
