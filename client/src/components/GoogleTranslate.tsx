import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  return null;
}
