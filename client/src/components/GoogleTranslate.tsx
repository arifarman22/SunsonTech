import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
    googleTranslateConfig: any;
  }
}

export default function GoogleTranslate() {
  const { language } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    const applyTranslation = () => {
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectElement && selectElement.value !== language) {
        selectElement.value = language;
        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
      }
    };

    const waitAndTranslate = () => {
      if (window.google?.translate) {
        setTimeout(applyTranslation, 300);
      } else {
        setTimeout(waitAndTranslate, 100);
      }
    };

    waitAndTranslate();
  }, [location, language]);

  return <div id="google_translate_element" className="hidden" />;
}
