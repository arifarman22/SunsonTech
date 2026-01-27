import { useEffect } from 'react';
import { Languages } from 'lucide-react';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

export default function NavTranslateButton() {
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,bn,hi,ar,fr,es,de,zh-CN,ja,ko,ru,pt,it,nl,pl,tr,vi,th,id,ms',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          },
          'google_translate_nav'
        );
      };

      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Languages className="h-5 w-5 text-gray-700" />
      <div id="google_translate_nav" />
    </div>
  );
}
