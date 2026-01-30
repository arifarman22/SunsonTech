import { Link } from "wouter";
import { Building2, Heart, Shield, Bus, Monitor, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = [
  {
    id: "banking",
    icon: Building2,
    title: "Banking & Finance",
    description: "Self-service banking terminals and ATM solutions",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&h=600&fit=crop&q=80",
    link: "/products/banking"
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare",
    description: "Patient check-in and healthcare management kiosks",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop&q=80",
    link: "/products/healthcare"
  },
  {
    id: "security",
    icon: Shield,
    title: "Security & Encryption",
    description: "Advanced security solutions for terminals",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&q=80",
    link: "/products/security"
  },
  {
    id: "transportation",
    icon: Bus,
    title: "Transportation",
    description: "Smart ticketing and transportation terminals",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop&q=80",
    link: "/products/transportation"
  },
  {
    id: "information",
    icon: Monitor,
    title: "Information & Signage",
    description: "Digital signage and information kiosks",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    link: "/products/information"
  },
  {
    id: "payment",
    icon: CreditCard,
    title: "Payment Systems",
    description: "Modern payment terminal solutions",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&q=80",
    link: "/products/payment"
  }
];

export default function ProductCategories() {
  const { t } = useLanguage();

  return (
    <section className="section-enterprise bg-white">
      <div className="container-enterprise">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive terminal solutions for diverse industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} href={category.link}>
                <div className="enterprise-card p-6 cursor-pointer group">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-md flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <Icon className="h-6 w-6 text-blue-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {category.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
