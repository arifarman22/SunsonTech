// Google Cloud Translation API service
const API_KEY = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY;
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

const CACHE_KEY = 'translation_cache';

interface TranslationCache {
  [key: string]: {
    [targetLang: string]: string;
  };
}

const getCache = (): TranslationCache => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : {};
  } catch {
    return {};
  }
};

const saveToCache = (text: string, targetLang: string, translation: string) => {
  try {
    const cache = getCache();
    if (!cache[text]) cache[text] = {};
    cache[text][targetLang] = translation;
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch (e) {
    console.error('Failed to cache translation:', e);
  }
};

const getCachedTranslation = (text: string, targetLang: string): string | null => {
  const cache = getCache();
  return cache[text]?.[targetLang] || null;
};

export const translateText = async (
  text: string,
  targetLang: string,
  sourceLang: string = 'en'
): Promise<string> => {
  if (sourceLang === targetLang) return text;
  
  const cached = getCachedTranslation(text, targetLang);
  if (cached) return cached;

  if (!API_KEY) {
    console.warn('Google Translate API key not configured');
    return text;
  }

  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        source: sourceLang,
        target: targetLang,
        format: 'text'
      })
    });

    const data = await response.json();
    
    if (data.data?.translations?.[0]?.translatedText) {
      const translation = data.data.translations[0].translatedText;
      saveToCache(text, targetLang, translation);
      return translation;
    }
    
    return text;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
};

export const translateElement = async (
  element: HTMLElement,
  targetLang: string,
  sourceLang: string = 'en'
) => {
  if (targetLang === 'en') return;

  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        if (!node.textContent?.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (parent?.tagName === 'SCRIPT' || parent?.tagName === 'STYLE') {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const textNodes: Node[] = [];
  let node;
  while ((node = walker.nextNode())) {
    textNodes.push(node);
  }

  for (const textNode of textNodes) {
    const originalText = textNode.textContent?.trim();
    if (originalText && originalText.length > 1) {
      try {
        const translated = await translateText(originalText, targetLang, sourceLang);
        if (textNode.textContent) {
          textNode.textContent = translated;
        }
      } catch (e) {
        console.error('Failed to translate node:', e);
      }
    }
  }
};
