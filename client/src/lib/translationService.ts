declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

let isInitialized = false;

export function initGoogleTranslate() {
  if (isInitialized) return;
  
  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'en,bn,hi,ar,fr,es,de,zh-CN,ja,ko,ru,pt',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      },
      'google_translate_element'
    );
  };

  const script = document.createElement('script');
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.head.appendChild(script);
  isInitialized = true;
}

export function changeLanguage(langCode: string) {
  const waitForSelect = setInterval(() => {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      clearInterval(waitForSelect);
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    }
  }, 100);
  
  setTimeout(() => clearInterval(waitForSelect), 5000);
}
