import { useEffect } from 'react';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NavTranslateButton() {
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,bn,hi,ar,fr,es,de,zh-CN,ja,ko,ru,pt',
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
    <Button
      variant="ghost"
      size="icon"
      className="rounded-2xl hover:bg-gray-100 transition-all duration-300 h-10 w-10 relative"
    >
      <Languages className="h-5 w-5 text-gray-700" />
      <div id="google_translate_nav" className="absolute opacity-0 inset-0 cursor-pointer" />
    </Button>
  );
}
