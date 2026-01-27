const cache: Record<string, Record<string, string>> = {};

export async function translateText(text: string, targetLang: string): Promise<string> {
  if (targetLang === 'en' || !text) return text;

  if (cache[text]?.[targetLang]) {
    return cache[text][targetLang];
  }

  try {
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, targetLang, sourceLang: 'en' })
    });

    const data = await response.json();
    
    if (data.translatedText) {
      if (!cache[text]) cache[text] = {};
      cache[text][targetLang] = data.translatedText;
      return data.translatedText;
    }
    
    return text;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
}

export async function translateElement(element: HTMLElement, targetLang: string) {
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
      const translated = await translateText(originalText, targetLang);
      if (textNode.textContent) {
        textNode.textContent = translated;
      }
    }
  }
}
