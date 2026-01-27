// Client-side Google Translate widget
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

export function initGoogleTranslate() {
  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'en,bn,hi,ar,fr,es,de,zh-CN,ja,ko,ru,pt',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      },
      'google_translate_element'
    );
  };

  const script = document.createElement('script');
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.head.appendChild(script);
}

export function changeLanguage(langCode: string) {
  const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event('change'));
  }
}
