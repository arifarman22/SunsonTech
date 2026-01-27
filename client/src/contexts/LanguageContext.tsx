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
    const saved = localStorage.getItem('selectedLanguage');
    return saved && saved !== 'ar' ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
    document.documentElement.lang = language;
    
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
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