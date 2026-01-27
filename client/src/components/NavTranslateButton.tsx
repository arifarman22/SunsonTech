import { useEffect } from 'react';
import { Languages } from 'lucide-react';

export default function NavTranslateButton() {
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,bn,hi,ar,fr,es,de,zh-CN,ja,ko,ru,pt',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
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
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:border-emerald-300 transition-all duration-200 shadow-sm hover:shadow-md">
      <Languages className="h-4 w-4 text-emerald-600" />
      <div id="google_translate_nav" />
    </div>
  );
}
