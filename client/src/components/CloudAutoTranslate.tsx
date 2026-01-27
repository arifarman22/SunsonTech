import { useEffect } from 'react';
import { useLanguage } from '@/contexts/CloudLanguageContext';
import { translateElement } from '@/lib/cloudTranslate';

export default function CloudAutoTranslate() {
  const { language } = useLanguage();

  useEffect(() => {
    if (language === 'en') return;

    const translatePage = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      const main = document.querySelector('main') || document.body;
      if (main) {
        await translateElement(main as HTMLElement, language);
      }
    };

    translatePage();
  }, [language]);

  return null;
}
