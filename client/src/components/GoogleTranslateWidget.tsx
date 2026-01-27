import { Globe } from 'lucide-react';

export default function GoogleTranslateWidget() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:border-emerald-300 transition-all duration-200 shadow-sm hover:shadow-md">
        <Globe className="h-4 w-4 text-emerald-600" />
        <div id="google_translate_element" className="translate-widget" />
      </div>
    </div>
  );
}
