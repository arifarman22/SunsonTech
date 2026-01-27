import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    const styleOverride = setInterval(() => {
      const gadget = document.querySelector('.goog-te-gadget-simple');
      if (gadget) {
        gadget.setAttribute('style', 'background-color: transparent !important; border: none !important; padding: 0.75rem 1.5rem !important; border-radius: 1rem !important; font-weight: 600 !important;');
        
        const menuValue = gadget.querySelector('.goog-te-menu-value');
        if (menuValue) {
          menuValue.setAttribute('style', 'color: rgb(55 65 81) !important; font-size: 0.875rem !important; font-weight: 600 !important;');
          
          const spans = menuValue.querySelectorAll('span');
          if (spans[0]) spans[0].style.display = 'none';
          if (spans[1]) {
            spans[1].setAttribute('style', 'display: flex !important; align-items: center !important; gap: 0.375rem !important;');
            const text = spans[1].textContent?.trim() || '';
            if (text && !text.includes('🌐')) {
              spans[1].textContent = 'English ▼';
            }
          }
        }
        clearInterval(styleOverride);
      }
    }, 100);

    setTimeout(() => clearInterval(styleOverride), 5000);
  }, []);

  return null;
}
