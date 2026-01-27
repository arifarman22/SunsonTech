import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { initGoogleTranslate, changeLanguage } from '@/lib/translationService';

export default function AutoTranslate() {
  const { language } = useLanguage();

  useEffect(() => {
    initGoogleTranslate();
  }, []);

  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  return <div id="google_translate_element" style={{ display: 'none' }} />;
}
