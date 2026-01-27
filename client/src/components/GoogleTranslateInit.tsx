import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslateInit() {
  useEffect(() => {
    console.log('[GoogleTranslateInit] Initializing...');
    
    // Add Google Translate script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    
    // Initialize function
    window.googleTranslateElementInit = () => {
      console.log('[GoogleTranslateInit] Callback fired');
      console.log('[GoogleTranslateInit] window.google:', window.google);
      
      if (window.google?.translate?.TranslateElement) {
        console.log('[GoogleTranslateInit] Creating TranslateElement');
        
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,bn,hi,ar,fr,es,de,zh-CN,ja,ko,ru,pt',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
        
        console.log('[GoogleTranslateInit] TranslateElement created');
        
        // Check if select element was created
        setTimeout(() => {
          const select = document.querySelector('select.goog-te-combo');
          console.log('[GoogleTranslateInit] Select element found:', select);
        }, 500);
      } else {
        console.error('[GoogleTranslateInit] TranslateElement not available');
      }
    };

    script.onerror = () => {
      console.error('[GoogleTranslateInit] Failed to load Google Translate script');
    };

    script.onload = () => {
      console.log('[GoogleTranslateInit] Script loaded successfully');
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
