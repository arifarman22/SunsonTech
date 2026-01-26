import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Next-Gen Banking",
    subtitle: "Automation",
    description: "Revolutionary Cash Deposit Machines and ATM solutions powered by AI and advanced security protocols. Experience the future of financial technology.",
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=1920&auto=format&fit=crop",
    cta: "Explore Innovation",
    link: "/products/banking",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    icon: Shield
  },
  {
    id: 2,
    title: "Smart Healthcare",
    subtitle: "Solutions",
    description: "Transform patient experiences with intelligent kiosk systems. Streamline check-ins, reduce wait times, and enhance healthcare delivery efficiency.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1920&auto=format&fit=crop",
    cta: "Discover More",
    link: "/products/healthcare",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    icon: Sparkles
  },
  {
    id: 3,
    title: "Future-Ready",
    subtitle: "Technology",
    description: "Leading the industry with cutting-edge automated terminal solutions. Custom hardware and software engineered for tomorrow's challenges.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1920&auto=format&fit=crop",
    cta: "Learn More",
    link: "/about",
    gradient: "from-violet-600 via-blue-600 to-indigo-600",
    icon: Zap
  }
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    const interval = setInterval(() => emblaApi.scrollNext(), 10000);
    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Animated background mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {slides.map((slide, index) => {
            const IconComponent = slide.icon;
            return (
              <div key={slide.id} className="embla__slide relative flex-[0_0_100%] h-full">
                {/* Background Image with enhanced overlay */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-80`} />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Floating elements */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/20 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                      }}
                      animate={{
                        y: [-20, 20, -20],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="container-modern h-full flex items-center relative z-10">
                  <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                      {index === selectedIndex && (
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -50 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                          <motion.div
                            className="flex items-center gap-3 mb-6"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                          >
                            <div className="p-3 rounded-2xl glass-modern">
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-white/90 font-semibold tracking-[0.3em] uppercase text-sm">
                              {slide.subtitle}
                            </span>
                          </motion.div>
                          
                          <motion.h1 
                            className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] text-shadow-modern"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                          >
                            {slide.title}
                          </motion.h1>
                          
                          <motion.p 
                            className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl font-light"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                          >
                            {slide.description}
                          </motion.p>
                          
                          <motion.div 
                            className="flex flex-wrap gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                          >
                            <Button 
                              size="lg" 
                              className="btn-modern text-lg px-10 py-6 h-auto font-bold group shadow-modern-xl"
                            >
                              {slide.cta}
                              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                            </Button>
                            
                            <Button 
                              size="lg" 
                              variant="outline" 
                              className="text-lg px-10 py-6 h-auto font-bold glass-modern border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-modern"
                            >
                              View Portfolio
                            </Button>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-10">
                  <div className="w-full h-full bg-gradient-to-tl from-white/20 to-transparent rounded-tl-[100px]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Navigation Controls */}
      <div className="absolute bottom-12 left-0 w-full z-20">
        <div className="container-modern flex items-center justify-between">
          {/* Progress Indicators */}
          <div className="flex gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 transition-all duration-700 rounded-full backdrop-blur-sm ${
                  i === selectedIndex 
                    ? "w-16 bg-white shadow-modern" 
                    : "w-8 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => emblaApi?.scrollPrev()}
              className="rounded-2xl h-14 w-14 glass-modern border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-modern"
            >
              <ChevronLeft className="h-7 w-7" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => emblaApi?.scrollNext()}
              className="rounded-2xl h-14 w-14 glass-modern border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-modern"
            >
              <ChevronRight className="h-7 w-7" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-px h-8 bg-white/40" />
        </div>
      </motion.div>
    </section>
  );
}
