import { useEffect } from 'react';
import { useLocation } from 'wouter';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  const [location] = useLocation();

  useEffect(() => {
    // Reinitialize Google Translate widget on route change
    const initWidget = () => {
      if (window.google?.translate?.TranslateElement) {
        const element = document.getElementById('google_translate_element');
        if (element && !element.querySelector('.goog-te-gadget')) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,bn,hi,ar,fr,es,de,zh-CN,ja,ko,ru,pt',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            },
            'google_translate_element'
          );
        }
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

    // Wait for element to be available then initialize
    const checkAndInit = setInterval(() => {
      const element = document.getElementById('google_translate_element');
      if (element) {
        clearInterval(checkAndInit);
        initWidget();
      }
    }, 100);

    setTimeout(() => clearInterval(checkAndInit), 3000);

    const observer = new MutationObserver(updateLanguageDisplay);
    const targetNode = document.getElementById('google_translate_element');
    
    if (targetNode) {
      observer.observe(targetNode, { childList: true, subtree: true });
    }

    const interval = setInterval(updateLanguageDisplay, 500);

    return () => {
      observer.disconnect();
      clearInterval(interval);
      clearInterval(checkAndInit);
    };
  }, [location]);

  return null;
}
