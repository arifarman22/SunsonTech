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
        const menuValue = gadget.querySelector('.goog-te-menu-value');
        if (menuValue) {
          const spans = menuValue.querySelectorAll('span');
          if (spans[0]) spans[0].style.display = 'none';
          if (spans[1]) {
            const text = spans[1].textContent?.trim() || '';
            if (text && !text.includes('EN')) {
              spans[1].textContent = 'EN';
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
