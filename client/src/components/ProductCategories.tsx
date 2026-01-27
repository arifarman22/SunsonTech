import { Link } from "wouter";
import {
  Building2,
  Heart,
  Shield,
  Train,
  Info,
  CreditCard,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ProductCategories() {
  
  const categories = [
  {
    id: "banking",
    title: "Banking Solutions",
    desc: "Revolutionary self-service solutions transforming financial institutions worldwide.",
    icon: Building2,
    link: "/products/banking",
    products: ["AI-Powered CDMs", "Next-Gen ATMs", "Smart Teller Machines"],
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50"
  },
  {
    id: "healthcare",
    title: "Healthcare Kiosks",
    desc: "Intelligent patient management systems enhancing healthcare delivery.",
    icon: Heart,
    link: "/products/healthcare",
    products: ["Smart Check-in Kiosks", "Medical Dispensers", "Health Screening"],
    gradient: "from-indigo-500 to-purple-600",
    bgGradient: "from-indigo-50 to-purple-50"
  },
  {
    id: "security",
    title: "Security Systems",
    desc: "Military-grade security solutions with advanced encryption protocols.",
    icon: Shield,
    link: "/products/security",
    products: ["Encrypted Pin Pads", "Secure Keyboards", "Biometric Modules"],
    gradient: "from-red-500 to-pink-600",
    bgGradient: "from-red-50 to-pink-50"
  },
  {
    id: "transportation",
    title: "Transportation",
    desc: "Automated fare collection and ticketing systems for modern transit.",
    icon: Train,
    link: "/products/transportation",
    products: ["Digital Ticket Kiosks", "Contactless Stations", "Smart Parking"],
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50"
  },
  {
    id: "information",
    title: "Information Kiosks",
    desc: "Interactive information systems creating seamless user experiences.",
    icon: Info,
    link: "/products/information",
    products: ["AI Wayfinding", "Interactive Displays", "Queue Management"],
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50"
  },
  {
    id: "payment",
    title: "Payment Terminals",
    desc: "Next-generation payment terminals supporting all modern currencies.",
    icon: CreditCard,
    link: "/products/payment",
    products: ["Crypto Kiosks", "Multi-Currency", "Contactless Payment"],
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50"
  }
];
  return (
    <section className="section-modern bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-modern">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="h-6 w-6 text-emerald-500" />
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em]">
                Industry Solutions
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gradient mb-8 leading-tight">
              Innovative Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge self-service solutions across multiple industries
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="card-modern hover-lift h-full border-0 overflow-hidden relative">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Floating decoration */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="relative z-10 p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 shadow-modern group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-all duration-300">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-base">
                      {category.desc}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 p-8 pt-0">
                    <div className="space-y-3 mb-8">
                      {category.products.map((item, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center text-sm font-medium text-gray-600 group-hover:text-gray-700 transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <Zap className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                          {item}
                        </motion.div>
                      ))}
                    </div>
                    
                    <Link href={category.link}>
                      <Button className="w-full btn-modern group/btn">
                        <span className="relative z-10">View Details</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1 relative z-10" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/products/banking">
            <Button size="lg" variant="outline" className="px-12 py-6 text-lg font-bold rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 group">
              Explore All Products
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
