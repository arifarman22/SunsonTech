import { Link } from "wouter";
import { ChevronDown, Menu, Search, Bell, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import sunsonLogo from "@assets/sunson-logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveSearch from "@/components/InteractiveSearch";
import NotificationCenter from "@/components/NotificationCenter";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const unreadNotifications = 3;

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "glass-modern shadow-modern h-16"
            : "bg-transparent h-20"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container-modern h-full">
          <div className="flex items-center justify-between h-full">
            <Link href="/" data-testid="link-home">
              <motion.div
                className="flex items-center cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <img
                    src={sunsonLogo}
                    alt="Sunson Technology Logo"
                    className={cn(
                      "transition-all duration-500",
                      scrolled ? "h-8" : "h-12"
                    )}
                  />
                  <div className="absolute -inset-2 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 ml-8">
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-emerald-500 transition-all font-semibold text-sm py-3 px-6 rounded-2xl hover:bg-emerald-50 group">
                  <Sparkles className="mr-2 h-4 w-4 text-emerald-500" />
                  {t('nav.products')}
                  <ChevronDown className="ml-2 h-4 w-4 text-gray-400 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 mt-4 w-[520px] glass-modern rounded-modern-lg border border-white/20 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 transform origin-top-left -translate-y-4 group-hover:translate-y-0 shadow-modern-xl">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-sm text-emerald-600 mb-6 uppercase tracking-wider flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2" />
                        Banking Solutions
                      </h4>
                      <ul className="space-y-2">
                        <li><Link href="/products/banking" className="text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all block py-3 px-4 rounded-xl border border-transparent hover:border-emerald-100">Cash Deposit Machine CDM</Link></li>
                        <li><Link href="/products/banking" className="text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all block py-3 px-4 rounded-xl border border-transparent hover:border-emerald-100">ATM Machine</Link></li>
                        <li><Link href="/products/banking" className="text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all block py-3 px-4 rounded-xl border border-transparent hover:border-emerald-100">Smart Teller Machine STM</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-indigo-600 mb-6 uppercase tracking-wider flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2" />
                        Healthcare Kiosk
                      </h4>
                      <ul className="space-y-2">
                        <li><Link href="/products/healthcare" className="text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all block py-3 px-4 rounded-xl border border-transparent hover:border-indigo-100">Hospital Check-in Kiosk</Link></li>
                        <li><Link href="/products/healthcare" className="text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all block py-3 px-4 rounded-xl border border-transparent hover:border-indigo-100">Healthcare Kiosk</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link href="/products/banking" className="text-sm font-bold text-gradient hover:underline flex items-center justify-center group">
                      Explore All Products
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-indigo-500 transition-all font-semibold text-sm py-3 px-6 rounded-2xl hover:bg-indigo-50 group">
                  {t('nav.solutions')}
                  <ChevronDown className="ml-2 h-4 w-4 text-gray-400 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 mt-4 w-72 glass-modern rounded-modern-lg border border-white/20 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 transform origin-top-left -translate-y-4 group-hover:translate-y-0 shadow-modern-xl">
                  <Link href="/solutions/cdm" className="flex items-center gap-4 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all py-4 px-4 rounded-xl mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-sm shadow-modern">
                      CD
                    </div>
                    <div>
                      <div className="font-semibold">CDM Solution</div>
                      <div className="text-xs text-gray-500">Banking automation</div>
                    </div>
                  </Link>
                  <Link href="/solutions/healthcare" className="flex items-center gap-4 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all py-4 px-4 rounded-xl">
                    <div className="w-10 h-10 rounded-xl bg-gradient-secondary flex items-center justify-center text-white font-bold text-sm shadow-modern">
                      HC
                    </div>
                    <div>
                      <div className="font-semibold">Healthcare Solution</div>
                      <div className="text-xs text-gray-500">Patient management</div>
                    </div>
                  </Link>
                </div>
              </div>

              <Link href="/about" className="text-gray-700 hover:text-purple-500 transition-all font-semibold text-sm py-3 px-6 rounded-2xl hover:bg-purple-50">
                {t('nav.about')}
              </Link>

              <Link href="/contact" className="text-gray-700 hover:text-pink-500 transition-all font-semibold text-sm py-3 px-6 rounded-2xl hover:bg-pink-50">
                {t('nav.contact')}
              </Link>

              <div className="h-8 w-px bg-gray-200 mx-4"></div>

              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="rounded-2xl hover:bg-gray-100 hover:text-emerald-600 transition-all duration-300 h-10 w-10"
                >
                  <Search className="h-5 w-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsNotificationOpen(true)}
                  className="relative rounded-2xl hover:bg-gray-100 hover:text-indigo-600 transition-all duration-300 h-10 w-10"
                >
                  <Bell className="h-5 w-5" />
                  {unreadNotifications > 0 && (
                    <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white pulse-glow-modern" />
                  )}
                </Button>

                <Button className="btn-modern hidden xl:flex text-white font-semibold">
                  {t('nav.getStarted')}
                </Button>
              </div>
            </nav>

            <div className="flex lg:hidden items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-2xl h-10 w-10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="lg:hidden absolute top-full left-0 w-full glass-modern border-t border-white/20 p-8 overflow-y-auto max-h-[calc(100vh-80px)] shadow-modern-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <nav className="flex flex-col space-y-4 font-semibold">
                  <Link href="/products/banking" className="text-gray-900 hover:text-emerald-600 py-3 px-4 rounded-xl hover:bg-emerald-50 transition-all">{t('nav.products')}</Link>
                  <Link href="/solutions/cdm" className="text-gray-900 hover:text-indigo-600 py-3 px-4 rounded-xl hover:bg-indigo-50 transition-all">{t('nav.solutions')}</Link>
                  <Link href="/about" className="text-gray-900 hover:text-purple-600 py-3 px-4 rounded-xl hover:bg-purple-50 transition-all">{t('nav.about')}</Link>
                  <Link href="/contact" className="text-gray-900 hover:text-pink-600 py-3 px-4 rounded-xl hover:bg-pink-50 transition-all">{t('nav.contact')}</Link>
                  <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
                    <Button className="btn-modern w-full text-white font-semibold">
                      {t('nav.getStarted')}
                    </Button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

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
    </>
  );
}

// Helper for class names
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}