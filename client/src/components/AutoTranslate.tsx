import { useEffect } from 'react';
import { initGoogleTranslate } from '@/lib/translationService';

export default function AutoTranslate() {
  useEffect(() => {
    initGoogleTranslate();
  }, []);

  return null;
}
