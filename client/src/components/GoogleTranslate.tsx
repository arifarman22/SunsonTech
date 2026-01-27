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
    let cleanupInterval: NodeJS.Timeout;
    let updateInterval: NodeJS.Timeout;
    let observer: MutationObserver;

    const initializeWidget = () => {
      // Check if Google Translate API is available
      if (!window.google?.translate?.TranslateElement) {
        return false;
      }

      const element = document.getElementById('google_translate_element');
      if (!element) {
        return false;
      }

      // Clear any existing widget content
      element.innerHTML = '';

      try {
        // Initialize the widget
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
        console.error('Failed to initialize Google Translate:', error);
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

    const setupWidget = () => {
      // Wait for Google Translate script to be ready
      const checkAndInit = () => {
        if (window.googleTranslateReady || window.google?.translate?.TranslateElement) {
          const initialized = initializeWidget();
          
          if (initialized) {
            // Set up mutation observer to watch for widget changes
            const targetNode = document.getElementById('google_translate_element');
            if (targetNode) {
              observer = new MutationObserver(updateLanguageDisplay);
              observer.observe(targetNode, { childList: true, subtree: true });
            }

            // Periodically update language display
            updateInterval = setInterval(updateLanguageDisplay, 500);
            
            if (cleanupInterval) {
              clearInterval(cleanupInterval);
            }
          }
        }
      };

      // Try immediately
      checkAndInit();

      // If not ready, keep trying
      cleanupInterval = setInterval(checkAndInit, 100);

      // Stop trying after 10 seconds
      setTimeout(() => {
        if (cleanupInterval) {
          clearInterval(cleanupInterval);
        }
      }, 10000);

      // Listen for script load event
      window.addEventListener('googleTranslateLoaded', checkAndInit);
    };

    setupWidget();

    // Cleanup function
    return () => {
      if (cleanupInterval) clearInterval(cleanupInterval);
      if (updateInterval) clearInterval(updateInterval);
      if (observer) observer.disconnect();
      window.removeEventListener('googleTranslateLoaded', setupWidget);
    };
  }, [location]); // Re-run when location changes

  return null;
}
