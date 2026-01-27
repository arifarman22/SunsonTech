import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
    googleTranslateReady?: boolean;
  }
}

const WIDGET_CONTAINER_ID = 'google_translate_element';

export default function GoogleTranslate() {
  const [location] = useLocation();
  const { language, setLanguage } = useLanguage();

  const retryIntervalRef = useRef<NodeJS.Timeout>();
  const updateIntervalRef = useRef<NodeJS.Timeout>();
  const observerRef = useRef<MutationObserver>();
  const selectCleanupRef = useRef<() => void>();
  const widgetReadyRef = useRef(false);

  useEffect(() => {
    const applyLanguageToWidget = () => {
      const select = document.querySelector('select.goog-te-combo') as HTMLSelectElement | null;
      if (!select) return false;

      if (select.value !== language) {
        select.value = language;
        select.dispatchEvent(new Event('change'));
      }
      return true;
    };

    const watchWidgetLanguageChanges = () => {
      const select = document.querySelector('select.goog-te-combo') as HTMLSelectElement | null;
      if (!select) return;

      const handleChange = () => {
        const value = select.value || 'en';
        setLanguage(value);
      };

      select.addEventListener('change', handleChange);
      selectCleanupRef.current = () => select.removeEventListener('change', handleChange);
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

    const initializeWidget = () => {
      if (!window.google?.translate?.TranslateElement) return false;

      const element = document.getElementById(WIDGET_CONTAINER_ID);
      if (!element) return false;

      element.innerHTML = '';

      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,bn,hi,ar,fr,es,de,zh-CN,ja,ko,ru,pt',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          WIDGET_CONTAINER_ID
        );
        widgetReadyRef.current = true;

        setTimeout(() => {
          applyLanguageToWidget();
          watchWidgetLanguageChanges();
          updateLanguageDisplay();
        }, 200);

        return true;
      } catch (error) {
        console.error('Google Translate init error:', error);
        return false;
      }
    };

    const setupWidget = () => {
      const checkAndInit = () => {
        if (window.googleTranslateReady || window.google?.translate?.TranslateElement) {
          const initialized = initializeWidget();

          if (initialized) {
            const targetNode = document.getElementById(WIDGET_CONTAINER_ID);
            if (targetNode) {
              observerRef.current = new MutationObserver(updateLanguageDisplay);
              observerRef.current.observe(targetNode, { childList: true, subtree: true });
            }

            updateIntervalRef.current = setInterval(updateLanguageDisplay, 500);

            if (retryIntervalRef.current) {
              clearInterval(retryIntervalRef.current);
              retryIntervalRef.current = undefined;
            }
          }
        }
      };

      checkAndInit();

      retryIntervalRef.current = setInterval(checkAndInit, 100);

      setTimeout(() => {
        if (retryIntervalRef.current) {
          clearInterval(retryIntervalRef.current);
          retryIntervalRef.current = undefined;
        }
      }, 10000);

      window.addEventListener('googleTranslateLoaded', checkAndInit);
      return () => window.removeEventListener('googleTranslateLoaded', checkAndInit);
    };

    const teardownListener = setupWidget();

    return () => {
      if (retryIntervalRef.current) clearInterval(retryIntervalRef.current);
      if (updateIntervalRef.current) clearInterval(updateIntervalRef.current);
      if (observerRef.current) observerRef.current.disconnect();
      if (selectCleanupRef.current) selectCleanupRef.current();
      widgetReadyRef.current = false;
      teardownListener();
    };
  }, [location, language, setLanguage]);

  useEffect(() => {
    if (!widgetReadyRef.current) return;
    const select = document.querySelector('select.goog-te-combo') as HTMLSelectElement | null;
    if (select && select.value !== language) {
      select.value = language;
      select.dispatchEvent(new Event('change'));
    }
  }, [language]);

  return (
    <div className="fixed top-4 right-4 z-[1200] pointer-events-auto">
      <div id={WIDGET_CONTAINER_ID} className="shadow-sm" aria-label="Google Translate language selector" />
    </div>
  );
}
