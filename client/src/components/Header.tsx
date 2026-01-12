import { Link } from "wouter";
import { ChevronDown, Menu, Globe, Search, Bell } from "lucide-react";
import { useState } from "react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import sunsonLogo from "@assets/sunson-logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveSearch from "@/components/InteractiveSearch";
import NotificationCenter from "@/components/NotificationCenter";

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh' as Language, name: '中文', flag: '🇨🇳' },
  { code: 'ja' as Language, name: '日本語', flag: '🇯🇵' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  const unreadNotifications = 3; // Mock unread count

  return (
    <motion.header 
      className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <motion.div 
              className="flex items-center cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img 
                src={sunsonLogo} 
                alt="Sunson Technology Logo" 
                className="h-12 w-auto transition-all duration-300"
              />
            </motion.div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="dropdown relative group">
              <button className="flex items-center text-foreground hover:text-primary transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50" data-testid="button-products-dropdown">
                {t('nav.products')} <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="dropdown-menu absolute top-full left-0 mt-2 w-80 bg-white shadow-2xl rounded-xl border border-gray-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-3 uppercase tracking-wide">BANKING</h4>
                    <ul className="space-y-2">
                      <li><Link href="/products/banking" className="text-sm hover:text-primary transition-colors block py-1 rounded px-2 hover:bg-gray-50" data-testid="link-banking-products">Cash Deposit Machine CDM</Link></li>
                      <li><Link href="/products/banking" className="text-sm hover:text-primary transition-colors block py-1 rounded px-2 hover:bg-gray-50">Cash Dispenser ATM</Link></li>
                      <li><Link href="/products/banking" className="text-sm hover:text-primary transition-colors block py-1 rounded px-2 hover:bg-gray-50">Smart Teller Machine STM</Link></li>
                      <li><Link href="/products/banking" className="text-sm hover:text-primary transition-colors block py-1 rounded px-2 hover:bg-gray-50">Currency Exchange Kiosk</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-3 uppercase tracking-wide">HEALTHCARE</h4>
                    <ul className="space-y-2">
                      <li><Link href="/products/healthcare" className="text-sm hover:text-primary transition-colors block py-1 rounded px-2 hover:bg-gray-50" data-testid="link-healthcare-products">Hospital Check-in Kiosk</Link></li>
                      <li><Link href="/products/healthcare" className="text-sm hover:text-primary transition-colors block py-1 rounded px-2 hover:bg-gray-50">Healthcare Kiosk</Link></li>
                      <li><Link href="/products/healthcare" className="text-sm hover:text-primary transition-colors block py-1 rounded px-2 hover:bg-gray-50">Mobile Charging Station</Link></li>
                      <li><Link href="/products/healthcare" className="text-sm hover:text-primary transition-colors block py-1 rounded px-2 hover:bg-gray-50">Hotel Check-in Kiosk</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-3 uppercase tracking-wide">SECURITY</h4>
                    <ul className="space-y-2">
                      <li><Link href="/products/security" className="text-sm hover:text-primary transition-colors block py-1 rounded px-2 hover:bg-gray-50" data-testid="link-security-products">PCI Approved EPP</Link></li>
                      <li><Link href="/products/security" className="text-sm hover:text-primary transition-colors block py-1 rounded px-2 hover:bg-gray-50">Full Metal Keyboard</Link></li>
                      <li><Link href="/products/security" className="text-sm hover:text-primary transition-colors block py-1 rounded px-2 hover:bg-gray-50">NON PCI Pinpad</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-3 uppercase tracking-wide">PAYMENT</h4>
                    <ul className="space-y-2">
                      <li><Link href="/products/payment" className="text-sm hover:text-primary transition-colors block py-1 rounded px-2 hover:bg-gray-50" data-testid="link-payment-products">Bitcoin Payment Kiosk</Link></li>
                      <li><Link href="/products/payment" className="text-sm hover:text-primary transition-colors block py-1 rounded px-2 hover:bg-gray-50">Cash Payment Kiosk</Link></li>
                      <li><Link href="/products/payment" className="text-sm hover:text-primary transition-colors block py-1 rounded px-2 hover:bg-gray-50">Wall Mount Payment</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown relative group">
              <button className="flex items-center text-foreground hover:text-primary transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50" data-testid="button-solutions-dropdown">
                {t('nav.solutions')} <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="dropdown-menu absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl rounded-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <ul className="space-y-3">
                  <li><Link href="/solutions/cdm" className="flex items-center text-sm hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50" data-testid="link-cdm-solution">CDM Solution</Link></li>
                  <li><Link href="/solutions/healthcare" className="flex items-center text-sm hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50" data-testid="link-healthcare-solution">Healthcare Kiosk Solution</Link></li>
                  <li><Link href="/solutions/epp" className="flex items-center text-sm hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50" data-testid="link-epp-solution">EPP V4 V5 V6 Solution</Link></li>
                  <li><Link href="/solutions/payment" className="flex items-center text-sm hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50" data-testid="link-payment-solution">Payment Kiosk Solution</Link></li>
                </ul>
              </div>
            </div>

            <div className="dropdown relative group">
              <button className="flex items-center text-foreground hover:text-primary transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50" data-testid="button-about-dropdown">
                {t('nav.about')} <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="dropdown-menu absolute top-full left-0 mt-2 w-48 bg-white shadow-2xl rounded-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <ul className="space-y-3">
                  <li><Link href="/about" className="text-sm hover:text-primary transition-colors block py-2 px-3 rounded-lg hover:bg-gray-50" data-testid="link-about">Company</Link></li>
                  <li><Link href="/about" className="text-sm hover:text-primary transition-colors block py-2 px-3 rounded-lg hover:bg-gray-50">Team</Link></li>
                  <li><Link href="/about" className="text-sm hover:text-primary transition-colors block py-2 px-3 rounded-lg hover:bg-gray-50">Careers</Link></li>
                  <li><Link href="/about" className="text-sm hover:text-primary transition-colors block py-2 px-3 rounded-lg hover:bg-gray-50">News</Link></li>
                </ul>
              </div>
            </div>

            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-50" data-testid="link-contact">
              {t('nav.contact')}
            </Link>

            {/* Interactive Features */}
            <div className="flex items-center space-x-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                  className="relative"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsNotificationOpen(true)}
                  className="relative"
                >
                  <Bell className="h-4 w-4" />
                  {unreadNotifications > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
                    >
                      {unreadNotifications}
                    </motion.div>
                  )}
                </Button>
              </motion.div>
            </div>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center space-x-2 border-gray-200 hover:border-primary bg-white">
                  <Globe className="h-4 w-4" />
                  <span className="text-lg">{currentLang.flag}</span>
                  <span className="hidden sm:inline">{currentLang.name}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white border-gray-100">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center space-x-3 cursor-pointer hover:bg-gray-50 ${
                      language === lang.code ? 'bg-gray-100' : ''
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="lg:hidden py-4 border-t border-gray-200 bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="space-y-4">
              <Link href="/products/banking" className="block text-foreground hover:text-primary py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors" data-testid="link-mobile-banking">Banking Products</Link>
              <Link href="/products/healthcare" className="block text-foreground hover:text-primary py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors" data-testid="link-mobile-healthcare">Healthcare Products</Link>
              <Link href="/products/security" className="block text-foreground hover:text-primary py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors" data-testid="link-mobile-security">Security Products</Link>
              <Link href="/solutions/cdm" className="block text-foreground hover:text-primary py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors" data-testid="link-mobile-cdm">CDM Solution</Link>
              <Link href="/about" className="block text-foreground hover:text-primary py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors" data-testid="link-mobile-about">{t('nav.about')}</Link>
              <Link href="/contact" className="block text-foreground hover:text-primary py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors" data-testid="link-mobile-contact">{t('nav.contact')}</Link>
              
              {/* Mobile Language */}
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">{t('nav.language')}</div>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <Button
                        key={lang.code}
                        variant={language === lang.code ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setLanguage(lang.code)}
                        className="justify-start"
                      >
                        <span className="mr-2">{lang.flag}</span>
                        <span className="text-xs">{lang.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
      
      {/* Interactive Overlays */}
      <AnimatePresence>
        {isSearchOpen && (
          <InteractiveSearch
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
        )}
        {isNotificationOpen && (
          <NotificationCenter
            isOpen={isNotificationOpen}
            onClose={() => setIsNotificationOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}
