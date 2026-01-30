import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const slides = [
  {
    title: "Banking Automation Solutions",
    description: "Advanced self-service banking terminals for modern financial institutions",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&q=80"
  },
  {
    title: "Healthcare Innovation",
    description: "Smart kiosk solutions for efficient patient management",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop&q=80"
  },
  {
    title: "Enterprise Technology",
    description: "Comprehensive terminal solutions for global businesses",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&q=80"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative bg-slate-50 overflow-hidden">
      <div className="container-enterprise">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[500px] py-16 md:py-20">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg text-slate-600">
              {slides[currentSlide].description}
            </p>
            <div className="flex gap-4">
              <Button className="btn-enterprise">
                {t('common.learnMore')}
              </Button>
              <Button className="btn-enterprise-outline">
                {t('common.contactUs')}
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-[400px] object-cover rounded-md"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 pb-8">
          <button
            onClick={prevSlide}
            className="p-2 rounded-md border border-slate-300 hover:bg-slate-100 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-blue-900" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-md border border-slate-300 hover:bg-slate-100 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
