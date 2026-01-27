import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    const initTranslate = () => {
      if (window.google?.translate) {
        const desktop = document.getElementById('google_translate_element');
        const mobile = document.getElementById('google_translate_element_mobile');
        
        if (desktop && !desktop.querySelector('.goog-te-gadget')) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,bn,hi,ar,fr,es,de,zh-CN,ja,ko,ru,pt',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
            },
            'google_translate_element'
          );
        }
        
        if (mobile && !mobile.querySelector('.goog-te-gadget')) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,bn,hi,ar,fr,es,de,zh-CN,ja,ko,ru,pt',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
            },
            'google_translate_element_mobile'
          );
        }
      } else {
        setTimeout(initTranslate, 100);
      }
    };

    initTranslate();
  }, []);

  return null;
}
