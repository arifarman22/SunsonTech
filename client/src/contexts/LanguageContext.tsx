import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'ko' | 'ar' | 'pt' | 'ru' | 'it' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'nav.products': 'Products', 'nav.solutions': 'Solutions', 'nav.about': 'About', 'nav.contact': 'Contact', 'nav.language': 'Language',
    'products.banking.title': 'Bank and Identity', 'products.healthcare.title': 'Retail and Healthcare', 'products.security.title': 'Encrypting PIN PAD',
    'products.transportation.title': 'Public & Transportation', 'products.information.title': 'Information & AR', 'products.payment.title': 'Payment Terminals',
    'common.learnMore': 'Learn More', 'common.viewSpecs': 'View Specs', 'common.explore': 'Explore', 'common.ourProducts': 'OUR PRODUCTS',
    'common.company': 'Company', 'common.team': 'Team', 'common.careers': 'Careers', 'common.news': 'News',
    'hero.innovation': 'INNOVATION FOR A BETTER FUTURE', 'hero.innovationDesc': 'With secure and customized self-service solutions',
    'products.cdm': 'Cash Deposit Machine CDM', 'products.atm': 'Cash Dispenser ATM', 'products.stm': 'Smart Teller Machine STM',
    'products.exchange': 'Currency Exchange Kiosk', 'products.checkin': 'Hospital Check-in Kiosk', 'products.healthcare': 'Healthcare Kiosk',
    'products.charging': 'Mobile Charging Station', 'products.hotel': 'Hotel Check-in Kiosk', 'products.epp': 'PCI Approved EPP',
    'products.keyboard': 'Full Metal Keyboard', 'products.pinpad': 'NON PCI Pinpad', 'products.bitcoin': 'Bitcoin Payment Kiosk',
    'products.cash': 'Cash Payment Kiosk', 'products.wall': 'Wall Mount Payment', 'solutions.cdm': 'CDM Solution',
    'solutions.healthcare': 'Healthcare Kiosk Solution', 'solutions.epp': 'EPP V4 V5 V6 Solution', 'solutions.payment': 'Payment Kiosk Solution',
    'category.banking': 'BANKING', 'category.healthcare': 'HEALTHCARE', 'category.security': 'SECURITY', 'category.payment': 'PAYMENT',
  },
  es: {
    'nav.products': 'Productos', 'nav.solutions': 'Soluciones', 'nav.about': 'Acerca de', 'nav.contact': 'Contacto', 'nav.language': 'Idioma',
    'products.banking.title': 'Banca e Identidad', 'products.healthcare.title': 'Retail y Salud', 'products.security.title': 'PIN PAD Encriptado',
    'products.transportation.title': 'Público y Transporte', 'products.information.title': 'Información y AR', 'products.payment.title': 'Terminales de Pago',
    'common.learnMore': 'Saber Más', 'common.viewSpecs': 'Ver Especificaciones', 'common.explore': 'Explorar', 'common.ourProducts': 'NUESTROS PRODUCTOS',
    'common.company': 'Empresa', 'common.team': 'Equipo', 'common.careers': 'Carreras', 'common.news': 'Noticias',
    'hero.innovation': 'INNOVACIÓN PARA UN FUTURO MEJOR', 'hero.innovationDesc': 'Con soluciones de autoservicio seguras y personalizadas',
    'products.cdm': 'Máquina de Depósito de Efectivo CDM', 'products.atm': 'Cajero Automático ATM', 'products.stm': 'Máquina Inteligente STM',
    'products.exchange': 'Quiosco de Cambio de Moneda', 'products.checkin': 'Quiosco de Registro Hospitalario', 'products.healthcare': 'Quiosco de Salud',
    'products.charging': 'Estación de Carga Móvil', 'products.hotel': 'Quiosco de Registro de Hotel', 'products.epp': 'EPP Aprobado por PCI',
    'products.keyboard': 'Teclado de Metal Completo', 'products.pinpad': 'Pinpad NO PCI', 'products.bitcoin': 'Quiosco de Pago Bitcoin',
    'products.cash': 'Quiosco de Pago en Efectivo', 'products.wall': 'Pago de Montaje en Pared', 'solutions.cdm': 'Solución CDM',
    'solutions.healthcare': 'Solución de Quiosco de Salud', 'solutions.epp': 'Solución EPP V4 V5 V6', 'solutions.payment': 'Solución de Quiosco de Pago',
    'category.banking': 'BANCARIO', 'category.healthcare': 'SALUD', 'category.security': 'SEGURIDAD', 'category.payment': 'PAGO',
  },
  fr: {
    'nav.products': 'Produits', 'nav.solutions': 'Solutions', 'nav.about': 'À propos', 'nav.contact': 'Contact', 'nav.language': 'Langue',
    'products.banking.title': 'Banque et Identité', 'products.healthcare.title': 'Commerce et Santé', 'products.security.title': 'PIN PAD Crypté',
    'products.transportation.title': 'Public et Transport', 'products.information.title': 'Information et AR', 'products.payment.title': 'Terminaux de Paiement',
    'common.learnMore': 'En Savoir Plus', 'common.viewSpecs': 'Voir les Spécifications', 'common.explore': 'Explorer', 'common.ourProducts': 'NOS PRODUITS',
    'common.company': 'Entreprise', 'common.team': 'Équipe', 'common.careers': 'Carrières', 'common.news': 'Actualités',
    'hero.innovation': 'INNOVATION POUR UN AVENIR MEILLEUR', 'hero.innovationDesc': 'Avec des solutions de libre-service sécurisées et personnalisées',
    'products.cdm': 'Machine de Dépôt d\'Espèces CDM', 'products.atm': 'Distributeur Automatique ATM', 'products.stm': 'Machine Intelligente STM',
    'products.exchange': 'Kiosque de Change', 'products.checkin': 'Kiosque d\'Enregistrement Hospitalier', 'products.healthcare': 'Kiosque de Santé',
    'products.charging': 'Station de Charge Mobile', 'products.hotel': 'Kiosque d\'Enregistrement d\'Hôtel', 'products.epp': 'EPP Approuvé PCI',
    'products.keyboard': 'Clavier Métallique Complet', 'products.pinpad': 'Pinpad NON PCI', 'products.bitcoin': 'Kiosque de Paiement Bitcoin',
    'products.cash': 'Kiosque de Paiement en Espèces', 'products.wall': 'Paiement Mural', 'solutions.cdm': 'Solution CDM',
    'solutions.healthcare': 'Solution Kiosque de Santé', 'solutions.epp': 'Solution EPP V4 V5 V6', 'solutions.payment': 'Solution Kiosque de Paiement',
    'category.banking': 'BANCAIRE', 'category.healthcare': 'SANTÉ', 'category.security': 'SÉCURITÉ', 'category.payment': 'PAIEMENT',
  },
  de: {
    'nav.products': 'Produkte', 'nav.solutions': 'Lösungen', 'nav.about': 'Über uns', 'nav.contact': 'Kontakt', 'nav.language': 'Sprache',
    'products.banking.title': 'Bank und Identität', 'products.healthcare.title': 'Einzelhandel und Gesundheit', 'products.security.title': 'Verschlüsseltes PIN PAD',
    'products.transportation.title': 'Öffentlich und Transport', 'products.information.title': 'Information und AR', 'products.payment.title': 'Zahlungsterminals',
    'common.learnMore': 'Mehr Erfahren', 'common.viewSpecs': 'Spezifikationen Anzeigen', 'common.explore': 'Erkunden', 'common.ourProducts': 'UNSERE PRODUKTE',
    'common.company': 'Unternehmen', 'common.team': 'Team', 'common.careers': 'Karrieren', 'common.news': 'Nachrichten',
    'hero.innovation': 'INNOVATION FÜR EINE BESSERE ZUKUNFT', 'hero.innovationDesc': 'Mit sicheren und maßgeschneiderten Selbstbedienungslösungen',
    'products.cdm': 'Bargeldeinzahlungsautomat CDM', 'products.atm': 'Geldautomat ATM', 'products.stm': 'Intelligenter Automat STM',
    'products.exchange': 'Währungswechsel-Kiosk', 'products.checkin': 'Krankenhaus-Check-in-Kiosk', 'products.healthcare': 'Gesundheitskiosk',
    'products.charging': 'Mobile Ladestation', 'products.hotel': 'Hotel-Check-in-Kiosk', 'products.epp': 'PCI-zugelassenes EPP',
    'products.keyboard': 'Vollmetall-Tastatur', 'products.pinpad': 'NICHT-PCI-Pinpad', 'products.bitcoin': 'Bitcoin-Zahlungskiosk',
    'products.cash': 'Bargeld-Zahlungskiosk', 'products.wall': 'Wandmontage-Zahlung', 'solutions.cdm': 'CDM-Lösung',
    'solutions.healthcare': 'Gesundheitskiosk-Lösung', 'solutions.epp': 'EPP V4 V5 V6 Lösung', 'solutions.payment': 'Zahlungskiosk-Lösung',
    'category.banking': 'BANKING', 'category.healthcare': 'GESUNDHEIT', 'category.security': 'SICHERHEIT', 'category.payment': 'ZAHLUNG',
  },
  zh: {
    'nav.products': '产品', 'nav.solutions': '解决方案', 'nav.about': '关于我们', 'nav.contact': '联系我们', 'nav.language': '语言',
    'products.banking.title': '银行与身份识别', 'products.healthcare.title': '零售与医疗', 'products.security.title': '加密PIN键盘',
    'products.transportation.title': '公共交通', 'products.information.title': '信息与AR', 'products.payment.title': '支付终端',
    'common.learnMore': '了解更多', 'common.viewSpecs': '查看规格', 'common.explore': '探索', 'common.ourProducts': '我们的产品',
    'common.company': '公司', 'common.team': '团队', 'common.careers': '职业', 'common.news': '新闻',
    'hero.innovation': '创新成就美好未来', 'hero.innovationDesc': '通过安全和定制的自助服务解决方案',
    'products.cdm': '现金存款机CDM', 'products.atm': '现金取款机ATM', 'products.stm': '智能柜员机STM',
    'products.exchange': '货币兑换亭', 'products.checkin': '医院登记亭', 'products.healthcare': '医疗亭',
    'products.charging': '移动充电站', 'products.hotel': '酒店登记亭', 'products.epp': 'PCI认证EPP',
    'products.keyboard': '全金属键盘', 'products.pinpad': '非PCI密码键盘', 'products.bitcoin': '比特币支付亭',
    'products.cash': '现金支付亭', 'products.wall': '壁挂式支付', 'solutions.cdm': 'CDM解决方案',
    'solutions.healthcare': '医疗亭解决方案', 'solutions.epp': 'EPP V4 V5 V6解决方案', 'solutions.payment': '支付亭解决方案',
    'category.banking': '银行业务', 'category.healthcare': '医疗保健', 'category.security': '安全', 'category.payment': '支付',
  },
  ja: {
    'nav.products': '製品', 'nav.solutions': 'ソリューション', 'nav.about': '会社概要', 'nav.contact': 'お問い合わせ', 'nav.language': '言語',
    'products.banking.title': '銀行・本人確認', 'products.healthcare.title': '小売・ヘルスケア', 'products.security.title': '暗号化PINパッド',
    'products.transportation.title': '公共交通', 'products.information.title': '情報・AR', 'products.payment.title': '決済端末',
    'common.learnMore': '詳細を見る', 'common.viewSpecs': '仕様を見る', 'common.explore': '探索', 'common.ourProducts': '私たちの製品',
    'common.company': '会社', 'common.team': 'チーム', 'common.careers': 'キャリア', 'common.news': 'ニュース',
    'hero.innovation': 'より良い未来のためのイノベーション', 'hero.innovationDesc': '安全でカスタマイズされたセルフサービスソリューションで',
    'products.cdm': '現金預入機CDM', 'products.atm': '現金自動支払機ATM', 'products.stm': 'スマートテラーマシンSTM',
    'products.exchange': '通貨両替キオスク', 'products.checkin': '病院チェックインキオスク', 'products.healthcare': 'ヘルスケアキオスク',
    'products.charging': 'モバイル充電ステーション', 'products.hotel': 'ホテルチェックインキオスク', 'products.epp': 'PCI承認EPP',
    'products.keyboard': 'フルメタルキーボード', 'products.pinpad': '非PCIピンパッド', 'products.bitcoin': 'ビットコイン決済キオスク',
    'products.cash': '現金決済キオスク', 'products.wall': '壁掛け決済', 'solutions.cdm': 'CDMソリューション',
    'solutions.healthcare': 'ヘルスケアキオスクソリューション', 'solutions.epp': 'EPP V4 V5 V6ソリューション', 'solutions.payment': '決済キオスクソリューション',
    'category.banking': '銀行業務', 'category.healthcare': 'ヘルスケア', 'category.security': 'セキュリティ', 'category.payment': '決済',
  },
  ko: {
    'nav.products': '제품', 'nav.solutions': '솔루션', 'nav.about': '회사소개', 'nav.contact': '연락처', 'nav.language': '언어',
    'products.banking.title': '은행 및 신원확인', 'products.healthcare.title': '소매 및 헬스케어', 'products.security.title': '암호화 PIN PAD',
    'products.transportation.title': '대중교통', 'products.information.title': '정보 및 AR', 'products.payment.title': '결제 단말기',
    'common.learnMore': '더 알아보기', 'common.viewSpecs': '사양 보기', 'common.explore': '탐색', 'common.ourProducts': '우리의 제품',
    'common.company': '회사', 'common.team': '팀', 'common.careers': '채용', 'common.news': '뉴스',
    'hero.innovation': '더 나은 미래를 위한 혁신', 'hero.innovationDesc': '안전하고 맞춤형 셀프서비스 솔루션으로',
    'products.cdm': '현금입금기 CDM', 'products.atm': '현금자동지급기 ATM', 'products.stm': '스마트 텔러 머신 STM',
    'products.exchange': '환전 키오스크', 'products.checkin': '병원 체크인 키오스크', 'products.healthcare': '헬스케어 키오스크',
    'products.charging': '모바일 충전소', 'products.hotel': '호텔 체크인 키오스크', 'products.epp': 'PCI 승인 EPP',
    'products.keyboard': '풀메탈 키보드', 'products.pinpad': '비PCI 핀패드', 'products.bitcoin': '비트코인 결제 키오스크',
    'products.cash': '현금 결제 키오스크', 'products.wall': '벽걸이 결제', 'solutions.cdm': 'CDM 솔루션',
    'solutions.healthcare': '헬스케어 키오스크 솔루션', 'solutions.epp': 'EPP V4 V5 V6 솔루션', 'solutions.payment': '결제 키오스크 솔루션',
    'category.banking': '은행업무', 'category.healthcare': '헬스케어', 'category.security': '보안', 'category.payment': '결제',
  },
  ar: {
    'nav.products': 'المنتجات', 'nav.solutions': 'الحلول', 'nav.about': 'حولنا', 'nav.contact': 'اتصل بنا', 'nav.language': 'اللغة',
    'products.banking.title': 'البنوك والهوية', 'products.healthcare.title': 'التجزئة والرعاية الصحية', 'products.security.title': 'لوحة PIN مشفرة',
    'products.transportation.title': 'النقل العام', 'products.information.title': 'المعلومات والواقع المعزز', 'products.payment.title': 'أجهزة الدفع',
    'common.learnMore': 'اعرف المزيد', 'common.viewSpecs': 'عرض المواصفات', 'common.explore': 'استكشف', 'common.ourProducts': 'منتجاتنا',
    'common.company': 'الشركة', 'common.team': 'الفريق', 'common.careers': 'الوظائف', 'common.news': 'الأخبار',
    'hero.innovation': 'الابتكار من أجل مستقبل أفضل', 'hero.innovationDesc': 'مع حلول الخدمة الذاتية الآمنة والمخصصة',
    'products.cdm': 'آلة إيداع النقد CDM', 'products.atm': 'آلة الصراف الآلي ATM', 'products.stm': 'آلة الصراف الذكي STM',
    'products.exchange': 'كشك صرف العملات', 'products.checkin': 'كشك تسجيل المستشفى', 'products.healthcare': 'كشك الرعاية الصحية',
    'products.charging': 'محطة شحن الهاتف المحمول', 'products.hotel': 'كشك تسجيل الفندق', 'products.epp': 'EPP معتمد من PCI',
    'products.keyboard': 'لوحة مفاتيح معدنية كاملة', 'products.pinpad': 'لوحة PIN غير PCI', 'products.bitcoin': 'كشك دفع البيتكوين',
    'products.cash': 'كشك الدفع النقدي', 'products.wall': 'دفع مثبت على الحائط', 'solutions.cdm': 'حل CDM',
    'solutions.healthcare': 'حل كشك الرعاية الصحية', 'solutions.epp': 'حل EPP V4 V5 V6', 'solutions.payment': 'حل كشك الدفع',
    'category.banking': 'المصرفية', 'category.healthcare': 'الرعاية الصحية', 'category.security': 'الأمان', 'category.payment': 'الدفع',
  },
  pt: {
    'nav.products': 'Produtos', 'nav.solutions': 'Soluções', 'nav.about': 'Sobre', 'nav.contact': 'Contato', 'nav.language': 'Idioma',
    'products.banking.title': 'Banco e Identidade', 'products.healthcare.title': 'Varejo e Saúde', 'products.security.title': 'PIN PAD Criptografado',
    'products.transportation.title': 'Transporte Público', 'products.information.title': 'Informação e AR', 'products.payment.title': 'Terminais de Pagamento',
    'common.learnMore': 'Saiba Mais', 'common.viewSpecs': 'Ver Especificações', 'common.explore': 'Explorar', 'common.ourProducts': 'NOSSOS PRODUTOS',
    'common.company': 'Empresa', 'common.team': 'Equipe', 'common.careers': 'Carreiras', 'common.news': 'Notícias',
    'hero.innovation': 'INOVAÇÃO PARA UM FUTURO MELHOR', 'hero.innovationDesc': 'Com soluções de autoatendimento seguras e personalizadas',
    'products.cdm': 'Máquina de Depósito de Dinheiro CDM', 'products.atm': 'Caixa Eletrônico ATM', 'products.stm': 'Máquina Inteligente STM',
    'products.exchange': 'Quiosque de Câmbio', 'products.checkin': 'Quiosque de Check-in Hospitalar', 'products.healthcare': 'Quiosque de Saúde',
    'products.charging': 'Estação de Carregamento Móvel', 'products.hotel': 'Quiosque de Check-in de Hotel', 'products.epp': 'EPP Aprovado PCI',
    'products.keyboard': 'Teclado de Metal Completo', 'products.pinpad': 'Pinpad NÃO PCI', 'products.bitcoin': 'Quiosque de Pagamento Bitcoin',
    'products.cash': 'Quiosque de Pagamento em Dinheiro', 'products.wall': 'Pagamento de Parede', 'solutions.cdm': 'Solução CDM',
    'solutions.healthcare': 'Solução de Quiosque de Saúde', 'solutions.epp': 'Solução EPP V4 V5 V6', 'solutions.payment': 'Solução de Quiosque de Pagamento',
    'category.banking': 'BANCÁRIO', 'category.healthcare': 'SAÚDE', 'category.security': 'SEGURANÇA', 'category.payment': 'PAGAMENTO',
  },
  ru: {
    'nav.products': 'Продукты', 'nav.solutions': 'Решения', 'nav.about': 'О нас', 'nav.contact': 'Контакты', 'nav.language': 'Язык',
    'products.banking.title': 'Банки и Идентификация', 'products.healthcare.title': 'Розничная торговля и Здравоохранение', 'products.security.title': 'Зашифрованная PIN-панель',
    'products.transportation.title': 'Общественный транспорт', 'products.information.title': 'Информация и AR', 'products.payment.title': 'Платежные терминалы',
    'common.learnMore': 'Узнать больше', 'common.viewSpecs': 'Посмотреть характеристики', 'common.explore': 'Исследовать', 'common.ourProducts': 'НАШИ ПРОДУКТЫ',
    'common.company': 'Компания', 'common.team': 'Команда', 'common.careers': 'Карьера', 'common.news': 'Новости',
    'hero.innovation': 'ИННОВАЦИИ ДЛЯ ЛУЧШЕГО БУДУЩЕГО', 'hero.innovationDesc': 'С безопасными и настраиваемыми решениями самообслуживания',
    'products.cdm': 'Машина для внесения наличных CDM', 'products.atm': 'Банкомат ATM', 'products.stm': 'Умная машина STM',
    'products.exchange': 'Киоск обмена валют', 'products.checkin': 'Киоск регистрации в больнице', 'products.healthcare': 'Киоск здравоохранения',
    'products.charging': 'Мобильная зарядная станция', 'products.hotel': 'Киоск регистрации в отеле', 'products.epp': 'EPP одобренный PCI',
    'products.keyboard': 'Полнометаллическая клавиатура', 'products.pinpad': 'НЕ-PCI пинпад', 'products.bitcoin': 'Киоск оплаты биткоинами',
    'products.cash': 'Киоск наличной оплаты', 'products.wall': 'Настенная оплата', 'solutions.cdm': 'Решение CDM',
    'solutions.healthcare': 'Решение киоска здравоохранения', 'solutions.epp': 'Решение EPP V4 V5 V6', 'solutions.payment': 'Решение платежного киоска',
    'category.banking': 'БАНКОВСКОЕ ДЕЛО', 'category.healthcare': 'ЗДРАВООХРАНЕНИЕ', 'category.security': 'БЕЗОПАСНОСТЬ', 'category.payment': 'ПЛАТЕЖИ',
  },
  it: {
    'nav.products': 'Prodotti', 'nav.solutions': 'Soluzioni', 'nav.about': 'Chi siamo', 'nav.contact': 'Contatti', 'nav.language': 'Lingua',
    'products.banking.title': 'Banche e Identità', 'products.healthcare.title': 'Retail e Sanità', 'products.security.title': 'PIN PAD Crittografato',
    'products.transportation.title': 'Trasporti Pubblici', 'products.information.title': 'Informazioni e AR', 'products.payment.title': 'Terminali di Pagamento',
    'common.learnMore': 'Scopri di più', 'common.viewSpecs': 'Vedi Specifiche', 'common.explore': 'Esplora', 'common.ourProducts': 'I NOSTRI PRODOTTI',
    'common.company': 'Azienda', 'common.team': 'Team', 'common.careers': 'Carriere', 'common.news': 'Notizie',
    'hero.innovation': 'INNOVAZIONE PER UN FUTURO MIGLIORE', 'hero.innovationDesc': 'Con soluzioni self-service sicure e personalizzate',
    'products.cdm': 'Macchina per Deposito Contanti CDM', 'products.atm': 'Bancomat ATM', 'products.stm': 'Macchina Intelligente STM',
    'products.exchange': 'Chiosco Cambio Valuta', 'products.checkin': 'Chiosco Check-in Ospedaliero', 'products.healthcare': 'Chiosco Sanitario',
    'products.charging': 'Stazione di Ricarica Mobile', 'products.hotel': 'Chiosco Check-in Hotel', 'products.epp': 'EPP Approvato PCI',
    'products.keyboard': 'Tastiera Metallica Completa', 'products.pinpad': 'Pinpad NON PCI', 'products.bitcoin': 'Chiosco Pagamento Bitcoin',
    'products.cash': 'Chiosco Pagamento Contanti', 'products.wall': 'Pagamento a Parete', 'solutions.cdm': 'Soluzione CDM',
    'solutions.healthcare': 'Soluzione Chiosco Sanitario', 'solutions.epp': 'Soluzione EPP V4 V5 V6', 'solutions.payment': 'Soluzione Chiosco Pagamento',
    'category.banking': 'BANCARIO', 'category.healthcare': 'SANITÀ', 'category.security': 'SICUREZZA', 'category.payment': 'PAGAMENTO',
  },
  hi: {
    'nav.products': 'उत्पाद', 'nav.solutions': 'समाधान', 'nav.about': 'हमारे बारे में', 'nav.contact': 'संपर्क', 'nav.language': 'भाषा',
    'products.banking.title': 'बैंक और पहचान', 'products.healthcare.title': 'खुदरा और स्वास्थ्य सेवा', 'products.security.title': 'एन्क्रिप्टेड PIN PAD',
    'products.transportation.title': 'सार्वजनिक परिवहन', 'products.information.title': 'सूचना और AR', 'products.payment.title': 'भुगतान टर्मिनल',
    'common.learnMore': 'और जानें', 'common.viewSpecs': 'विनिर्देश देखें', 'common.explore': 'अन्वेषण करें', 'common.ourProducts': 'हमारे उत्पाद',
    'common.company': 'कंपनी', 'common.team': 'टीम', 'common.careers': 'करियर', 'common.news': 'समाचार',
    'hero.innovation': 'बेहतर भविष्य के लिए नवाचार', 'hero.innovationDesc': 'सुरक्षित और अनुकूलित स्व-सेवा समाधानों के साथ',
    'products.cdm': 'नकद जमा मशीन CDM', 'products.atm': 'नकद वितरक ATM', 'products.stm': 'स्मार्ट टेलर मशीन STM',
    'products.exchange': 'मुद्रा विनिमय कियोस्क', 'products.checkin': 'अस्पताल चेक-इन कियोस्क', 'products.healthcare': 'स्वास्थ्य सेवा कियोस्क',
    'products.charging': 'मोबाइल चार्जिंग स्टेशन', 'products.hotel': 'होटल चेक-इन कियोस्क', 'products.epp': 'PCI अनुमोदित EPP',
    'products.keyboard': 'पूर्ण धातु कीबोर्ड', 'products.pinpad': 'गैर-PCI पिनपैड', 'products.bitcoin': 'बिटकॉइन भुगतान कियोस्क',
    'products.cash': 'नकद भुगतान कियोस्क', 'products.wall': 'दीवार माउंट भुगतान', 'solutions.cdm': 'CDM समाधान',
    'solutions.healthcare': 'स्वास्थ्य सेवा कियोस्क समाधान', 'solutions.epp': 'EPP V4 V5 V6 समाधान', 'solutions.payment': 'भुगतान कियोस्क समाधान',
    'category.banking': 'बैंकिंग', 'category.healthcare': 'स्वास्थ्य सेवा', 'category.security': 'सुरक्षा', 'category.payment': 'भुगतान',
  },
};

const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
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

export { LanguageProvider };