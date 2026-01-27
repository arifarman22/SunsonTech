// Free translation service using MyMemory API
// No API key required, 1000 words/day limit

const CACHE_KEY = 'translation_cache';
const API_URL = 'https://api.mymemory.translated.net/get';

interface TranslationCache {
  [key: string]: {
    [targetLang: string]: string;
  };
}

// Get cached translations
const getCache = (): TranslationCache => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : {};
  } catch {
    return {};
  }
};

// Save to cache
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

// Check cache first
const getCachedTranslation = (text: string, targetLang: string): string | null => {
  const cache = getCache();
  return cache[text]?.[targetLang] || null;
};

export const translateText = async (
  text: string,
  targetLang: string,
  sourceLang: string = 'en'
): Promise<string> => {
  // Return original if same language
  if (sourceLang === targetLang) return text;
  
  // Check cache first
  const cached = getCachedTranslation(text, targetLang);
  if (cached) return cached;

  try {
    const url = `${API_URL}?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.responseStatus === 200 && data.responseData?.translatedText) {
      const translation = data.responseData.translatedText;
      saveToCache(text, targetLang, translation);
      return translation;
    }
    
    return text; // Return original on error
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
};

// Translate all text nodes in an element
export const translateElement = async (
  element: HTMLElement,
  targetLang: string,
  sourceLang: string = 'en'
) => {
  if (targetLang === 'en') return; // Skip if English

  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        // Skip empty nodes and script/style tags
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

  // Translate each text node
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
