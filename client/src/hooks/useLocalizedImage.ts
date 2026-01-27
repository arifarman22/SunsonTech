import { useState, useEffect } from 'react';

export const useLocalizedImage = (basePath: string, extension: string = 'jpg') => {
  const [imageSrc, setImageSrc] = useState<string>(`${basePath}.${extension}`);

  useEffect(() => {
    setImageSrc(`${basePath}.${extension}`);
  }, [basePath, extension]);

  return imageSrc;
};
