import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const useLocalizedImage = (basePath: string, extension: string = 'jpg') => {
  const { language } = useLanguage();
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const checkImage = async () => {
      // Try localized image first
      const localizedPath = `${basePath}_${language}.${extension}`;
      
      try {
        const response = await fetch(localizedPath, { method: 'HEAD' });
        if (response.ok) {
          setImageSrc(localizedPath);
          return;
        }
      } catch (error) {
        // Image doesn't exist, try fallback
      }

      // Try English fallback
      const englishPath = `${basePath}_en.${extension}`;
      try {
        const response = await fetch(englishPath, { method: 'HEAD' });
        if (response.ok) {
          setImageSrc(englishPath);
          return;
        }
      } catch (error) {
        // English fallback doesn't exist
      }

      // Use base path without language suffix
      setImageSrc(`${basePath}.${extension}`);
    };

    checkImage();
  }, [basePath, extension, language]);

  return imageSrc;
};
