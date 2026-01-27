import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  const { language } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    const triggerTranslation = () => {
      if (!window.google?.translate) return;

      // Method 1: Click the language in the iframe menu
      const frame = document.querySelector('iframe.goog-te-menu-frame') as HTMLIFrameElement;
      if (frame?.contentWindow) {
        try {
          const doc = frame.contentDocument || frame.contentWindow.document;
          const items = doc?.querySelectorAll('.goog-te-menu2-item span.text');
          if (items) {
            for (let i = 0; i < items.length; i++) {
              const el = items[i] as HTMLElement;
              if (el.parentElement?.getAttribute('value') === language) {
                el.click();
                return;
              }
            }
          }
        } catch (e) {}
      }

      // Method 2: Use the select dropdown
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select && select.value !== language) {
        select.value = language;
        select.dispatchEvent(new Event('change', { bubbles: true }));
      }
    };

    const timer = setTimeout(triggerTranslation, 500);
    return () => clearTimeout(timer);
  }, [language, location]);

  return <div id="google_translate_element" className="hidden" />;
}
