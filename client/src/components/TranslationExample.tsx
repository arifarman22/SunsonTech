import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedImage } from '@/hooks/useLocalizedImage';

/**
 * Example Component: Translation System Usage
 * 
 * This component demonstrates how to use the translation system
 * in your components throughout the application.
 */
export default function TranslationExample() {
  const { t, language, getLocalizedImage } = useLanguage();
  
  // Example 1: Using the t() function for text translation
  const productTitle = t('products.banking');
  const learnMoreButton = t('common.learnMore');
  
  // Example 2: Using localized images with the hook
  const bannerImage = useLocalizedImage('/images/banner', 'jpg');
  
  // Example 3: Using getLocalizedImage function directly
  const logoImage = getLocalizedImage('/images/logo', 'png');
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        Translation System Example
      </h1>
      
      <div className="space-y-6">
        {/* Current Language Display */}
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="font-semibold">Current Language: {language}</p>
        </div>
        
        {/* Text Translation Example */}
        <div className="p-4 bg-green-50 rounded-lg">
          <h2 className="font-semibold mb-2">Text Translation:</h2>
          <p>Product Title: {productTitle}</p>
          <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded">
            {learnMoreButton}
          </button>
        </div>
        
        {/* Image Localization Example */}
        <div className="p-4 bg-purple-50 rounded-lg">
          <h2 className="font-semibold mb-2">Localized Images:</h2>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-gray-600">Banner (using hook):</p>
              <img 
                src={bannerImage} 
                alt="Localized Banner" 
                className="w-64 h-32 object-cover rounded"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src = '/images/placeholder.jpg';
                }}
              />
            </div>
            <div>
              <p className="text-sm text-gray-600">Logo (using function):</p>
              <img 
                src={logoImage} 
                alt="Localized Logo" 
                className="w-32 h-32 object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholder.jpg';
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Multiple Translations Example */}
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h2 className="font-semibold mb-2">Navigation Items:</h2>
          <ul className="space-y-1">
            <li>• {t('nav.products')}</li>
            <li>• {t('nav.solutions')}</li>
            <li>• {t('nav.about')}</li>
            <li>• {t('nav.contact')}</li>
          </ul>
        </div>
        
        {/* Dynamic Content Example */}
        <div className="p-4 bg-pink-50 rounded-lg">
          <h2 className="font-semibold mb-2">Product Categories:</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 bg-white rounded">{t('products.banking')}</div>
            <div className="p-2 bg-white rounded">{t('products.healthcare')}</div>
            <div className="p-2 bg-white rounded">{t('products.security')}</div>
            <div className="p-2 bg-white rounded">{t('products.payment')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
