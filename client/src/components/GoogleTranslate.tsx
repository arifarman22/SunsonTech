import { useEffect } from 'react';
import { useLocation } from 'wouter';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
    googleTranslateReady?: boolean;
  }
}

export default function GoogleTranslate() {
  const [location] = useLocation();

  useEffect(() => {
    let initAttempts = 0;
    let checkInterval: NodeJS.Timeout;
    let updateInterval: NodeJS.Timeout;

    const initializeWidget = () => {
      if (!window.google?.translate?.TranslateElement) return false;
      
      const element = document.getElementById('google_translate_element');
      if (!element) return false;

      // Only initialize if not already initialized
      if (element.querySelector('.goog-te-gadget')) return true;

      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,bn,hi,ar,fr,es,de,zh-CN,ja,ko,ru,pt',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          },
          'google_translate_element'
        );
        return true;
      } catch (error) {
        console.error('Google Translate init error:', error);
        return false;
      }
    };

    const updateLanguageDisplay = () => {
      const gadget = document.querySelector('.goog-te-gadget-simple');
      if (gadget) {
        const menuValue = gadget.querySelector('.goog-te-menu-value');
        if (menuValue) {
          const spans = menuValue.querySelectorAll('span');
          if (spans[0]) spans[0].style.display = 'none';
          if (spans[1]) {
            const text = spans[1].textContent?.trim() || '';
            if (!text.includes('English')) {
              spans[1].textContent = 'English';
            }
          }
        }
      }
    };

    // Check and initialize
    checkInterval = setInterval(() => {
      initAttempts++;
      if (initializeWidget()) {
        clearInterval(checkInterval);
        updateInterval = setInterval(updateLanguageDisplay, 300);
      }
      if (initAttempts > 100) clearInterval(checkInterval); // Stop after 10 seconds
    }, 100);

    return () => {
      clearInterval(checkInterval);
      clearInterval(updateInterval);
    };
  }, [location]);

  return null;
}
