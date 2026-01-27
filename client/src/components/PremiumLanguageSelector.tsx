import React, { useState, useEffect } from 'react';
import { Globe, ChevronDown, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸', label: 'English' },
    { code: 'bn', name: 'Bengali', flag: '🇧🇩', label: 'বাংলা' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳', label: 'हिन्दी' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦', label: 'العربية' },
    { code: 'fr', name: 'French', flag: '🇫🇷', label: 'Français' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸', label: 'Español' },
    { code: 'de', name: 'German', flag: '🇩🇪', label: 'Deutsch' },
    { code: 'zh-CN', name: 'Chinese', flag: '🇨🇳', label: '中文' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵', label: '日本語' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷', label: '한국어' },
    { code: 'ru', name: 'Russian', flag: '🇷🇺', label: 'Русский' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹', label: 'Português' },
];

declare global {
    interface Window {
        google: any;
    }
}

export default function PremiumLanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage } = useLanguage();

    const triggerGoogleTranslate = (langCode: string) => {
        // Set cookies for Google Translate
        const cookieValue = langCode === 'en' ? '' : `/en/${langCode}`;
        document.cookie = `googtrans=${cookieValue}; path=/; SameSite=None; Secure`;
        
        // Trigger translation immediately
        try {
            const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
            if (selectElement) {
                selectElement.value = langCode;
                
                // Dispatch change event
                const event = new Event('change', { bubbles: true });
                selectElement.dispatchEvent(event);
                
                // Also try the Google Translate trigger
                if (window.google && window.google.translate && window.google.translate.TranslateElement) {
                    window.google.translate.TranslateElement.getInstance().execute(langCode);
                }
            }
        } catch (error) {
            console.warn('Translation trigger error:', error);
        }
    };

    const handleLanguageChange = (langCode: string) => {
        setLanguage(langCode);
        triggerGoogleTranslate(langCode);
        setIsOpen(false);
    };

    const currentLang = languages.find((l) => l.code === language) || languages[0];

    return (
        <div className="relative">
            {/* Trigger Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 border",
                    isOpen
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                        : "bg-white/80 backdrop-blur-sm text-slate-700 border-slate-200 hover:border-primary/30 hover:bg-white shadow-sm"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-slate-100 text-lg shadow-inner">
                    {currentLang.flag}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline-block">
                    {currentLang.code.split('-')[0]}
                </span>
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isOpen && "rotate-180")} />
            </motion.button>

            {/* Premium Dropdown Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-[2px] lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            className="absolute right-0 mt-4 z-[70] w-[320px] sm:w-[380px] overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-200 border border-slate-100 p-6"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h4 className="text-lg font-extrabold text-slate-900">Select Language</h4>
                                    <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-1">Global Experience</p>
                                </div>
                                <motion.button
                                    onClick={() => setIsOpen(false)}
                                    whileHover={{ rotate: 90 }}
                                    className="p-2 rounded-full hover:bg-slate-100 text-slate-400"
                                >
                                    <X className="w-5 h-5" />
                                </motion.button>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {languages.map((lang) => (
                                    <motion.button
                                        key={lang.code}
                                        onClick={() => handleLanguageChange(lang.code)}
                                        className={cn(
                                            "flex items-center gap-3 p-3 rounded-2xl border transition-all duration-300 text-left group",
                                            language === lang.code
                                                ? "bg-primary/5 border-primary shadow-sm"
                                                : "bg-slate-50 border-transparent hover:bg-white hover:border-slate-200 hover:shadow-md"
                                        )}
                                        whileHover={{ y: -2 }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                                            {lang.flag}
                                        </div>
                                        <div className="flex flex-col flex-1 overflow-hidden">
                                            <span className={cn(
                                                "text-sm font-bold truncate",
                                                language === lang.code ? "text-primary" : "text-slate-800"
                                            )}>
                                                {lang.label}
                                            </span>
                                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter truncate">
                                                {lang.name}
                                            </span>
                                        </div>
                                        {language === lang.code && (
                                            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                                                <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                            </div>
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-center gap-2">
                                <Globe className="w-4 h-4 text-slate-300" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Sunson Global Terminal Solutions</span>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
