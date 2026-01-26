import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
    googleTranslateConfig: any;
  }
}

export default function GoogleTranslate() {
  const { language } = useLanguage();

  useEffect(() => {
    // Apply translation when language changes
    const applyTranslation = () => {
      // Get the select element
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      
      if (selectElement) {
        // Set the value
        selectElement.value = language;
        
        // Dispatch change event to trigger Google Translate
        const event = new Event('change', { bubbles: true });
        selectElement.dispatchEvent(event);
        
        // Also try native property setter
        Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value')?.set?.call(selectElement, language);
        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
      }
    };

    // Wait for Google Translate to be available
    if (window.google && window.google.translate) {
      applyTranslation();
    } else {
      // If not ready, wait a bit
      const checkInterval = setInterval(() => {
        if (window.google && window.google.translate) {
          clearInterval(checkInterval);
          applyTranslation();
        }
      }, 100);

      // Clear after 3 seconds
      setTimeout(() => clearInterval(checkInterval), 3000);
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
