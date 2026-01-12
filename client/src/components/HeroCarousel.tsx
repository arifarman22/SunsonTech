import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Eye } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingElements } from "@/components/ui/floating-elements";

const slides = [
  {
    id: 1,
    title: ["BANKNOTE", "AND COIN", "DISPENSER", "ATM"],
    highlight: "DISPENSER",
    description: "Banknote and Coin Dispenser ATM System SKT-D1059A is specially designed for indoor or lobby scenarios where banknote and metal coin withdrawals are necessary.",
    model: "SKT-D1059A",
    background: "bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900",
    textColor: "text-blue-100",
    highlightColor: "text-blue-300",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Banking Solutions"
  },
  {
    id: 2,
    title: ["HEALTH", "SCREENING", "KIOSK"],
    highlight: "SCREENING",
    description: "Health Screening Kiosk SKT-D1007 is one of our patent products in the Medical industry. We design and development from hardware to software.",
    model: "SKT-D1007",
    background: "bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900",
    textColor: "text-emerald-100",
    highlightColor: "text-emerald-300",
    buttonColor: "bg-emerald-500 hover:bg-emerald-600",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Healthcare Solutions"
  },
  {
    id: 3,
    titleKey: "hero.innovation",
    descriptionKey: "hero.innovationDesc",
    background: "bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900",
    textColor: "text-purple-100",
    highlightColor: "text-purple-300",
    isInnovation: true,
    category: "Innovation"
  }
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { t } = useLanguage();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    // Auto-advance slides every 6 seconds
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => {
      clearInterval(interval);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Floating 3D Elements */}
      <FloatingElements count={12} className="opacity-20" />
      
      {/* Enhanced Background Pattern with 3D effect */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:20px_20px]"
          animate={{
            backgroundPosition: ["0px 0px", "20px 20px", "0px 0px"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="embla relative z-10" ref={emblaRef}>
        <div className="embla__container flex h-screen">
          <AnimatePresence mode="wait">
            {slides.map((slide, index) => (
              <motion.div 
                key={slide.id} 
                className={`embla__slide flex-none w-full ${slide.background} flex items-center relative overflow-hidden`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ 
                  opacity: index === selectedIndex ? 1 : 0,
                  scale: index === selectedIndex ? 1 : 1.1,
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {/* Enhanced animated background elements */}
                <div className="absolute inset-0">
                  <motion.div 
                    className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.5, 1],
                      x: [0, 50, 0],
                      y: [0, -30, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-20 right-20 w-48 h-48 bg-white/3 rounded-full blur-2xl"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      x: [0, -40, 0],
                      y: [0, 20, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                  <motion.div 
                    className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/4 rounded-full blur-lg"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.5,
                    }}
                  />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                  {slide.isInnovation ? (
                    <motion.div 
                      className="text-center"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      <div className="max-w-5xl mx-auto space-y-8">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.6 }}
                        >
                          <Badge variant="outline" className="mb-6 text-white border-white/30 bg-white/10 backdrop-blur-sm">
                            {slide.category}
                          </Badge>
                        </motion.div>
                        <motion.h1 
                          className="text-6xl lg:text-8xl font-bold text-white leading-tight"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.8 }}
                        >
                          <motion.span
                            animate={{
                              textShadow: [
                                "0 0 20px rgba(255,255,255,0.5)",
                                "0 0 40px rgba(255,255,255,0.8)",
                                "0 0 20px rgba(255,255,255,0.5)",
                              ],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            {t(slide.titleKey!)}
                          </motion.span>
                        </motion.h1>
                        <motion.p 
                          className={`text-2xl ${slide.textColor} max-w-3xl mx-auto leading-relaxed`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6, duration: 0.8 }}
                        >
                          {t(slide.descriptionKey!)}
                        </motion.p>
                        <motion.div 
                          className="flex justify-center space-x-6 pt-8"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8, duration: 0.8 }}
                        >
                          <motion.div 
                            className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/40" 
                            data-testid="button-watch-film"
                            whileHover={{ 
                              scale: 1.05, 
                              y: -5,
                              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                              <Play className="h-10 w-10 text-white mb-4 mx-auto" />
                            </motion.div>
                            <div className="text-white font-semibold text-lg">{t('hero.watchFilm')}</div>
                            <div className="text-white/70 text-sm mt-1">2 min overview</div>
                          </motion.div>
                          <motion.div 
                            className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/40" 
                            data-testid="button-vr-view"
                            whileHover={{ 
                              scale: 1.05, 
                              y: -5,
                              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.div
                              animate={{ 
                                scale: [1, 1.1, 1],
                                rotateY: [0, 180, 360],
                              }}
                              transition={{ 
                                duration: 4, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                              }}
                            >
                              <Eye className="h-10 w-10 text-white mb-4 mx-auto" />
                            </motion.div>
                            <div className="text-white font-semibold text-lg">{t('hero.vrView')}</div>
                            <div className="text-white/70 text-sm mt-1">Interactive tour</div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                      <motion.div 
                        className="text-white space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                      >
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.6 }}
                        >
                          <Badge variant="outline" className="mb-4 text-white border-white/30 bg-white/10 backdrop-blur-sm">
                            {slide.category}
                          </Badge>
                        </motion.div>
                        <motion.h1 
                          className="text-5xl lg:text-7xl font-bold leading-tight"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.8 }}
                        >
                          {slide.title!.map((line, lineIndex) => (
                            <motion.span 
                              key={lineIndex}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 + lineIndex * 0.1, duration: 0.6 }}
                            >
                              {line === slide.highlight ? (
                                <motion.span 
                                  className={slide.highlightColor}
                                  animate={{
                                    textShadow: [
                                      "0 0 20px currentColor",
                                      "0 0 40px currentColor",
                                      "0 0 20px currentColor",
                                    ],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                >
                                  {line}
                                </motion.span>
                              ) : (
                                line
                              )}
                              {lineIndex < slide.title!.length - 1 && <br />}
                            </motion.span>
                          ))}
                        </motion.h1>
                        <motion.p 
                          className={`text-xl ${slide.textColor} max-w-lg leading-relaxed`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6, duration: 0.8 }}
                        >
                          {slide.description}
                        </motion.p>
                        <motion.div 
                          className="flex flex-col sm:flex-row gap-4 pt-4"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8, duration: 0.8 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button size="lg" className={`${slide.buttonColor} text-white shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`} data-testid="button-learn-more">
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.6 }}
                              />
                              <span className="relative z-10">{t('common.learnMore')}</span>
                            </Button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group" data-testid="button-view-specs">
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.6 }}
                              />
                              <span className="relative z-10">{t('common.viewSpecs')}</span>
                            </Button>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                      {slide.image && (
                        <motion.div 
                          className="relative group"
                          initial={{ opacity: 0, x: 50, rotateY: -15 }}
                          animate={{ opacity: 1, x: 0, rotateY: 0 }}
                          transition={{ delay: 0.4, duration: 0.8 }}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-3xl blur-xl"
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.img 
                            src={slide.image} 
                            alt={slide.title!.join(" ")} 
                            className="relative rounded-3xl shadow-2xl border border-white/20"
                            whileHover={{ 
                              scale: 1.05,
                              rotateY: 5,
                              rotateX: 5,
                              boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                            }}
                            transition={{ duration: 0.3 }}
                            style={{ transformStyle: "preserve-3d" }}
                          />
                          {slide.model && (
                            <motion.div 
                              className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20"
                              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                              transition={{ delay: 0.8, duration: 0.6 }}
                              whileHover={{ 
                                scale: 1.1,
                                rotateY: 10,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                              }}
                              style={{ transformStyle: "preserve-3d" }}
                            >
                              <div className="text-center">
                                <motion.div 
                                  className="text-3xl font-bold text-primary mb-1"
                                  animate={{
                                    color: ["hsl(221, 83%, 53%)", "hsl(221, 83%, 63%)", "hsl(221, 83%, 53%)"],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                >
                                  {slide.model}
                                </motion.div>
                                <div className="text-sm text-muted-foreground font-medium">Model Number</div>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Enhanced Navigation Dots with 3D effects */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`relative transition-all duration-300 ${
              index === selectedIndex 
                ? 'w-12 h-4 bg-white rounded-full' 
                : 'w-4 h-4 bg-white/50 hover:bg-white/80 rounded-full'
            }`}
            onClick={() => scrollTo(index)}
            data-testid={`button-carousel-dot-${index}`}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: index === selectedIndex 
                ? ["0 0 20px rgba(255,255,255,0.5)", "0 0 30px rgba(255,255,255,0.8)", "0 0 20px rgba(255,255,255,0.5)"]
                : "0 0 0px rgba(255,255,255,0)",
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            {index === selectedIndex && (
              <motion.div 
                className="absolute inset-0 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Enhanced Navigation Arrows with 3D effects */}
      <motion.button
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-white/80 transition-all duration-300 bg-white/10 backdrop-blur-md rounded-full p-4 hover:bg-white/20 border border-white/20 hover:border-white/40 z-20"
        onClick={scrollPrev}
        data-testid="button-carousel-prev"
        whileHover={{ 
          scale: 1.1, 
          x: -5,
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
        whileTap={{ scale: 0.9 }}
        animate={{
          x: [0, -2, 0],
        }}
        transition={{
          x: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <ChevronLeft className="h-8 w-8" />
      </motion.button>
      <motion.button
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-white/80 transition-all duration-300 bg-white/10 backdrop-blur-md rounded-full p-4 hover:bg-white/20 border border-white/20 hover:border-white/40 z-20"
        onClick={scrollNext}
        data-testid="button-carousel-next"
        whileHover={{ 
          scale: 1.1, 
          x: 5,
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
        whileTap={{ scale: 0.9 }}
        animate={{
          x: [0, 2, 0],
        }}
        transition={{
          x: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <ChevronRight className="h-8 w-8" />
      </motion.button>

      {/* Enhanced progress indicator */}
      <motion.div 
        className="absolute bottom-20 right-8 text-white/70 text-sm font-medium z-20 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.span
          key={selectedIndex}
          initial={{ scale: 1.2, color: "rgba(255,255,255,1)" }}
          animate={{ scale: 1, color: "rgba(255,255,255,0.7)" }}
          transition={{ duration: 0.3 }}
        >
          {selectedIndex + 1}
        </motion.span>
        {" / "}
        {slides.length}
      </motion.div>
    </section>
  );
}
