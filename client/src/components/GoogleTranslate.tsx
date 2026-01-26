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
    // Re-translate when page changes
    const retranslate = () => {
      if (window.google && window.google.translate) {
        const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (selectElement && language !== 'en') {
          // Small delay to ensure DOM is ready
          setTimeout(() => {
            selectElement.value = language;
            selectElement.dispatchEvent(new Event('change', { bubbles: true }));
          }, 100);
        }
      }
    };

    retranslate();
  }, [location, language]);

  useEffect(() => {
    // Apply translation when language changes
    const applyTranslation = () => {
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      
      if (selectElement) {
        selectElement.value = language;
        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
      }
    };

    // Wait for Google Translate to be available
    if (window.google && window.google.translate) {
      applyTranslation();
    } else {
      const checkInterval = setInterval(() => {
        if (window.google && window.google.translate) {
          clearInterval(checkInterval);
          applyTranslation();
        }
      }, 100);

      setTimeout(() => clearInterval(checkInterval), 5000);
    }
  }, [language]);

  return (
    <div
      id="google_translate_element"
      style={{ display: 'none' }}
      className="hidden"
    ></div>
  );
}
