import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PremiumLanguageSelector from "@/components/PremiumLanguageSelector";
import GoogleTranslate from "@/components/GoogleTranslate";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <GoogleTranslate />
      <header className="header-enterprise sticky top-0 z-50">
        <div className="container-enterprise">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <div className="text-2xl font-bold text-blue-900">Sunson</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/products/banking" className="text-sm font-medium text-slate-700 hover:text-blue-900 transition-colors">
                {t('nav.products')}
              </Link>
              <Link href="/solutions/cdm" className="text-sm font-medium text-slate-700 hover:text-blue-900 transition-colors">
                {t('nav.solutions')}
              </Link>
              <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-blue-900 transition-colors">
                {t('nav.about')}
              </Link>
              <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-blue-900 transition-colors">
                {t('nav.contact')}
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <PremiumLanguageSelector />
              <Button className="btn-enterprise hidden md:inline-flex">
                {t('nav.getStarted')}
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 py-4">
              <nav className="flex flex-col space-y-4">
                <Link href="/products/banking" className="text-sm font-medium text-slate-700 hover:text-blue-900">
                  {t('nav.products')}
                </Link>
                <Link href="/solutions/cdm" className="text-sm font-medium text-slate-700 hover:text-blue-900">
                  {t('nav.solutions')}
                </Link>
                <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-blue-900">
                  {t('nav.about')}
                </Link>
                <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-blue-900">
                  {t('nav.contact')}
                </Link>
                <Button className="btn-enterprise w-full">
                  {t('nav.getStarted')}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
