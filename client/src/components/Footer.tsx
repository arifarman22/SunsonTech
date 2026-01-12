import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, Globe, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import sunsonLogo from "@assets/sunson-logo.svg";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%)] bg-[length:60px_60px]" />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-gray-700/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Stay Updated with Latest Innovations
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Get the latest news about our self-service technology solutions and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2 space-y-6">
                <Link href="/">
                  <div className="flex items-center cursor-pointer group">
                    <img 
                      src={sunsonLogo} 
                      alt="Sunson Technology Logo" 
                      className="h-14 w-auto group-hover:scale-105 transition-transform duration-300 brightness-0 invert"
                    />
                  </div>
                </Link>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Leading manufacturer of innovative self-service technology solutions for banking, healthcare, security, and payment industries worldwide. Trusted by over 500+ organizations globally.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/20 cursor-pointer transition-all duration-300">
                    <Twitter className="h-5 w-5" />
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/20 cursor-pointer transition-all duration-300">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/20 cursor-pointer transition-all duration-300">
                    <Youtube className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Products */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">{t('nav.products')}</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/products/banking" className="text-gray-300 hover:text-primary transition-colors flex items-center group" data-testid="link-footer-banking">
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Banking Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/healthcare" className="text-gray-300 hover:text-primary transition-colors flex items-center group" data-testid="link-footer-healthcare">
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Healthcare Kiosks
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/security" className="text-gray-300 hover:text-primary transition-colors flex items-center group" data-testid="link-footer-security">
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Security Modules
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/payment" className="text-gray-300 hover:text-primary transition-colors flex items-center group" data-testid="link-footer-payment">
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Payment Terminals
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/information" className="text-gray-300 hover:text-primary transition-colors flex items-center group" data-testid="link-footer-information">
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Information Systems
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">{t('nav.solutions')}</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/solutions/cdm" className="text-gray-300 hover:text-primary transition-colors flex items-center group" data-testid="link-footer-cdm">
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      CDM Solution
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/healthcare" className="text-gray-300 hover:text-primary transition-colors flex items-center group" data-testid="link-footer-healthcare-solution">
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Healthcare Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/epp" className="text-gray-300 hover:text-primary transition-colors flex items-center group" data-testid="link-footer-epp">
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      EPP Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/payment" className="text-gray-300 hover:text-primary transition-colors flex items-center group" data-testid="link-footer-payment-solution">
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Payment Solutions
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">{t('nav.contact')}</h4>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">
                      Technology Park<br />
                      Innovation District<br />
                      Suite 100, Building A
                    </span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">info@sunson-tech.com</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Globe className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">www.sunson-tech.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400">
                <p>&copy; 2024 Sunson Technology. All rights reserved.</p>
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
