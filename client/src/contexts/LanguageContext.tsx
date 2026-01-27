import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/lib/translations';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  getLocalizedImage: (basePath: string, extension?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
    document.documentElement.lang = language;
    
    // Set RTL for Arabic
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }

    // Trigger Google Translate
    const triggerTranslation = () => {
      const cookieValue = language === 'en' ? '' : `/en/${language}`;
      document.cookie = `googtrans=${cookieValue}; path=/`;
      
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = language;
        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
      }
    };

    // Wait for Google Translate to load
    const checkAndTranslate = setInterval(() => {
      const selectElement = document.querySelector('.goog-te-combo');
      if (selectElement) {
        clearInterval(checkAndTranslate);
        triggerTranslation();
      }
    }, 100);

    setTimeout(() => clearInterval(checkAndTranslate), 5000);
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  const getLocalizedImage = (basePath: string, extension: string = 'jpg'): string => {
    // Try to get localized image, fallback to English
    const localizedPath = `${basePath}_${language}.${extension}`;
    const defaultPath = `${basePath}_en.${extension}`;
    const fallbackPath = `${basePath}.${extension}`;
    
    // Return localized path (component should handle fallback)
    return localizedPath;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLocalizedImage }}>
      {children}
    </LanguageContext.Provider>
  );
};