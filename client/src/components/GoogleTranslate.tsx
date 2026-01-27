import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
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

    const observer = new MutationObserver(updateLanguageDisplay);
    const targetNode = document.getElementById('google_translate_element');
    
    if (targetNode) {
      observer.observe(targetNode, { childList: true, subtree: true });
    }

    const interval = setInterval(updateLanguageDisplay, 500);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return null;
}
