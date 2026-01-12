import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.products': 'Products',
    'nav.solutions': 'Solutions',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.language': 'Language',
    
    // Product Categories
    'products.banking.title': 'Bank and Identity',
    'products.banking.desc': 'Secure banking solutions for modern financial institutions',
    'products.healthcare.title': 'Retail and Healthcare',
    'products.healthcare.desc': 'Advanced healthcare kiosks for patient self-service',
    'products.security.title': 'Encrypting PIN PAD',
    'products.security.desc': 'PCI certified security modules for secure transactions',
    'products.transportation.title': 'Public & Transportation',
    'products.transportation.desc': 'Smart ticketing and transportation solutions',
    'products.information.title': 'Information & AR',
    'products.information.desc': 'Interactive information and wayfinding solutions',
    'products.payment.title': 'Payment Terminals',
    'products.payment.desc': 'Modern payment processing for all transactions',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.viewSpecs': 'View Specs',
    'common.explore': 'Explore',
    'common.solutions': 'Solutions',
    'common.ourProducts': 'OUR PRODUCTS',
    'common.comprehensive': 'Comprehensive self-service solutions for banking, healthcare, security, and payment industries',
    
    // Hero Carousel
    'hero.innovation': 'INNOVATION FOR A BETTER FUTURE',
    'hero.innovationDesc': 'With secure and customized self-service solutions',
    'hero.watchFilm': 'Watch Short Film',
    'hero.vrView': '360° VR View',
  },
  es: {
    // Navigation
    'nav.products': 'Productos',
    'nav.solutions': 'Soluciones',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'nav.language': 'Idioma',
    
    // Product Categories
    'products.banking.title': 'Banca e Identidad',
    'products.banking.desc': 'Soluciones bancarias seguras para instituciones financieras modernas',
    'products.healthcare.title': 'Retail y Salud',
    'products.healthcare.desc': 'Quioscos de salud avanzados para autoservicio de pacientes',
    'products.security.title': 'PIN PAD Encriptado',
    'products.security.desc': 'Módulos de seguridad certificados PCI para transacciones seguras',
    'products.transportation.title': 'Público y Transporte',
    'products.transportation.desc': 'Soluciones inteligentes de ticketing y transporte',
    'products.information.title': 'Información y AR',
    'products.information.desc': 'Soluciones interactivas de información y orientación',
    'products.payment.title': 'Terminales de Pago',
    'products.payment.desc': 'Procesamiento de pagos moderno para todas las transacciones',
    
    // Common
    'common.learnMore': 'Saber Más',
    'common.viewSpecs': 'Ver Especificaciones',
    'common.explore': 'Explorar',
    'common.solutions': 'Soluciones',
    'common.ourProducts': 'NUESTROS PRODUCTOS',
    'common.comprehensive': 'Soluciones integrales de autoservicio para industrias bancarias, de salud, seguridad y pagos',
    
    // Hero Carousel
    'hero.innovation': 'INNOVACIÓN PARA UN FUTURO MEJOR',
    'hero.innovationDesc': 'Con soluciones de autoservicio seguras y personalizadas',
    'hero.watchFilm': 'Ver Película Corta',
    'hero.vrView': 'Vista VR 360°',
  },
  fr: {
    // Navigation
    'nav.products': 'Produits',
    'nav.solutions': 'Solutions',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.language': 'Langue',
    
    // Product Categories
    'products.banking.title': 'Banque et Identité',
    'products.banking.desc': 'Solutions bancaires sécurisées pour les institutions financières modernes',
    'products.healthcare.title': 'Commerce et Santé',
    'products.healthcare.desc': 'Kiosques de santé avancés pour le libre-service des patients',
    'products.security.title': 'PIN PAD Crypté',
    'products.security.desc': 'Modules de sécurité certifiés PCI pour des transactions sécurisées',
    'products.transportation.title': 'Public et Transport',
    'products.transportation.desc': 'Solutions intelligentes de billetterie et de transport',
    'products.information.title': 'Information et AR',
    'products.information.desc': 'Solutions interactives d\'information et d\'orientation',
    'products.payment.title': 'Terminaux de Paiement',
    'products.payment.desc': 'Traitement de paiement moderne pour toutes les transactions',
    
    // Common
    'common.learnMore': 'En Savoir Plus',
    'common.viewSpecs': 'Voir les Spécifications',
    'common.explore': 'Explorer',
    'common.solutions': 'Solutions',
    'common.ourProducts': 'NOS PRODUITS',
    'common.comprehensive': 'Solutions complètes en libre-service pour les industries bancaires, de santé, de sécurité et de paiement',
    
    // Hero Carousel
    'hero.innovation': 'INNOVATION POUR UN AVENIR MEILLEUR',
    'hero.innovationDesc': 'Avec des solutions de libre-service sécurisées et personnalisées',
    'hero.watchFilm': 'Regarder le Court Métrage',
    'hero.vrView': 'Vue VR 360°',
  },
  de: {
    // Navigation
    'nav.products': 'Produkte',
    'nav.solutions': 'Lösungen',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.language': 'Sprache',
    
    // Product Categories
    'products.banking.title': 'Bank und Identität',
    'products.banking.desc': 'Sichere Banklösungen für moderne Finanzinstitute',
    'products.healthcare.title': 'Einzelhandel und Gesundheit',
    'products.healthcare.desc': 'Fortschrittliche Gesundheitskioske für Patienten-Selbstbedienung',
    'products.security.title': 'Verschlüsseltes PIN PAD',
    'products.security.desc': 'PCI-zertifizierte Sicherheitsmodule für sichere Transaktionen',
    'products.transportation.title': 'Öffentlich und Transport',
    'products.transportation.desc': 'Intelligente Ticketing- und Transportlösungen',
    'products.information.title': 'Information und AR',
    'products.information.desc': 'Interaktive Informations- und Wegfindungslösungen',
    'products.payment.title': 'Zahlungsterminals',
    'products.payment.desc': 'Moderne Zahlungsabwicklung für alle Transaktionen',
    
    // Common
    'common.learnMore': 'Mehr Erfahren',
    'common.viewSpecs': 'Spezifikationen Anzeigen',
    'common.explore': 'Erkunden',
    'common.solutions': 'Lösungen',
    'common.ourProducts': 'UNSERE PRODUKTE',
    'common.comprehensive': 'Umfassende Selbstbedienungslösungen für Bank-, Gesundheits-, Sicherheits- und Zahlungsindustrien',
    
    // Hero Carousel
    'hero.innovation': 'INNOVATION FÜR EINE BESSERE ZUKUNFT',
    'hero.innovationDesc': 'Mit sicheren und maßgeschneiderten Selbstbedienungslösungen',
    'hero.watchFilm': 'Kurzfilm Ansehen',
    'hero.vrView': '360° VR-Ansicht',
  },
  zh: {
    // Navigation
    'nav.products': '产品',
    'nav.solutions': '解决方案',
    'nav.about': '关于我们',
    'nav.contact': '联系我们',
    'nav.language': '语言',
    
    // Product Categories
    'products.banking.title': '银行与身份识别',
    'products.banking.desc': '为现代金融机构提供安全的银行解决方案',
    'products.healthcare.title': '零售与医疗',
    'products.healthcare.desc': '为患者自助服务提供先进的医疗自助终端',
    'products.security.title': '加密PIN键盘',
    'products.security.desc': 'PCI认证的安全模块，确保交易安全',
    'products.transportation.title': '公共交通',
    'products.transportation.desc': '智能票务和交通解决方案',
    'products.information.title': '信息与AR',
    'products.information.desc': '交互式信息和导航解决方案',
    'products.payment.title': '支付终端',
    'products.payment.desc': '适用于所有交易的现代支付处理',
    
    // Common
    'common.learnMore': '了解更多',
    'common.viewSpecs': '查看规格',
    'common.explore': '探索',
    'common.solutions': '解决方案',
    'common.ourProducts': '我们的产品',
    'common.comprehensive': '为银行、医疗、安全和支付行业提供全面的自助服务解决方案',
    
    // Hero Carousel
    'hero.innovation': '创新成就美好未来',
    'hero.innovationDesc': '通过安全和定制的自助服务解决方案',
    'hero.watchFilm': '观看短片',
    'hero.vrView': '360° VR视图',
  },
  ja: {
    // Navigation
    'nav.products': '製品',
    'nav.solutions': 'ソリューション',
    'nav.about': '会社概要',
    'nav.contact': 'お問い合わせ',
    'nav.language': '言語',
    
    // Product Categories
    'products.banking.title': '銀行・本人確認',
    'products.banking.desc': '現代の金融機関向けセキュアバンキングソリューション',
    'products.healthcare.title': '小売・ヘルスケア',
    'products.healthcare.desc': '患者セルフサービス向け先進ヘルスケアキオスク',
    'products.security.title': '暗号化PINパッド',
    'products.security.desc': 'セキュア取引のためのPCI認証セキュリティモジュール',
    'products.transportation.title': '公共交通',
    'products.transportation.desc': 'スマートチケッティング・交通ソリューション',
    'products.information.title': '情報・AR',
    'products.information.desc': 'インタラクティブ情報・案内ソリューション',
    'products.payment.title': '決済端末',
    'products.payment.desc': 'あらゆる取引に対応する最新決済処理',
    
    // Common
    'common.learnMore': '詳細を見る',
    'common.viewSpecs': '仕様を見る',
    'common.explore': '探索',
    'common.solutions': 'ソリューション',
    'common.ourProducts': '私たちの製品',
    'common.comprehensive': '銀行、ヘルスケア、セキュリティ、決済業界向けの包括的セルフサービスソリューション',
    
    // Hero Carousel
    'hero.innovation': 'より良い未来のためのイノベーション',
    'hero.innovationDesc': 'セキュアでカスタマイズされたセルフサービスソリューションで',
    'hero.watchFilm': 'ショートフィルムを見る',
    'hero.vrView': '360° VRビュー',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};