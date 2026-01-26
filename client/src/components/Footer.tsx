import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowRight, Sparkles, Globe } from "lucide-react";
import sunsonLogo from "@assets/sunson-logo.svg";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-mesh opacity-5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      
      <div className="container-modern pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <img
                  src={sunsonLogo}
                  alt="Sunson Technology Logo"
                  className="h-12 w-auto brightness-0 invert group-hover:scale-105 transition-transform duration-300"
                />
                <span className="text-2xl font-bold text-gradient">SunsonTech</span>
              </div>
            </Link>
            
            <p className="text-gray-300 leading-relaxed text-lg max-w-md">
              Pioneering the future of automated terminal solutions. We transform industries through innovative technology, delivering unparalleled efficiency and security across the globe.
            </p>
            
            <div className="flex items-center gap-2 text-emerald-400">
              <Globe className="h-5 w-5" />
              <span className="font-semibold">{t('footer.serving')}</span>
            </div>
            
            <div className="flex gap-4">
              {[
                { icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-600" },
                { icon: Twitter, label: "Twitter", color: "hover:bg-sky-500" },
                { icon: Youtube, label: "YouTube", color: "hover:bg-red-600" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className={`w-12 h-12 rounded-2xl glass-modern border border-white/10 flex items-center justify-center text-white ${social.color} transition-all duration-300 group`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-bold uppercase tracking-[0.3em] text-sm mb-8 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-emerald-500" />
              {t('footer.solutions')}
            </h4>
            <ul className="space-y-4">
              {[
                { name: "AI Banking Systems", href: "/products/banking" },
                { name: "Smart Healthcare", href: "/products/healthcare" },
                { name: "Security Modules", href: "/products/security" },
                { name: "Payment Innovation", href: "/products/payment" }
              ].map((item, i) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link href={item.href} className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center group text-base">
                    <ArrowRight className="h-4 w-4 mr-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-emerald-500" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold uppercase tracking-[0.3em] text-sm mb-8">{t('footer.company')}</h4>
            <ul className="space-y-4">
              {[
                { name: "About Innovation", href: "/about" },
                { name: "Our Technology", href: "/about" },
                { name: "Global Impact", href: "/about" },
                { name: "Future Vision", href: "/about" }
              ].map((item, i) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link href={item.href} className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center group text-base">
                    <ArrowRight className="h-4 w-4 mr-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-indigo-500" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-bold uppercase tracking-[0.3em] text-sm mb-8">Global Headquarters</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Innovation District</div>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    Sunson Tech Park, Future Avenue<br />
                    Shenzhen, Guangdong 518000, China
                  </div>
                </div>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">+86 755 2024 8888</div>
                  <div className="text-gray-400 text-sm">24/7 Global Support</div>
                </div>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">hello@sunsontech.com</div>
                  <div className="text-gray-400 text-sm">Business Inquiries</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 font-medium">
            &copy; {currentYear} Sunson Technology Co., Ltd. Innovating the Future.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Sitemap</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
