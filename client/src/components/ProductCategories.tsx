import { Link } from "wouter";
import { 
  Building2, 
  Heart, 
  Shield, 
  Train, 
  Info, 
  CreditCard,
  Check,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card3D } from "@/components/ui/card-3d";
import { FloatingElements } from "@/components/ui/floating-elements";
import { Scene3D } from "@/components/ui/scene-3d";
import { motion } from "framer-motion";

const categories = [
  {
    id: "banking",
    titleKey: "products.banking.title",
    descKey: "products.banking.desc",
    icon: Building2,
    iconColor: "text-blue-600",
    bgGradient: "bg-gradient-to-br from-blue-50 to-blue-100",
    cardBorder: "border-blue-200 hover:border-blue-300",
    buttonColor: "bg-blue-600 hover:bg-blue-700 text-white",
    link: "/products/banking",
    products: [
      "Cash Deposit Machine CDM",
      "Cash Dispenser ATM", 
      "Smart Teller Machine STM",
      "Currency Exchange Kiosk"
    ],
    badge: "Financial"
  },
  {
    id: "healthcare",
    titleKey: "products.healthcare.title",
    descKey: "products.healthcare.desc",
    icon: Heart,
    iconColor: "text-emerald-600",
    bgGradient: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    cardBorder: "border-emerald-200 hover:border-emerald-300",
    buttonColor: "bg-emerald-600 hover:bg-emerald-700 text-white",
    link: "/products/healthcare",
    products: [
      "Hospital Check-in Kiosk",
      "Self-service Healthcare Kiosk",
      "Mobile Charging Station",
      "Hotel Check-in Kiosk"
    ],
    badge: "Healthcare"
  },
  {
    id: "security",
    titleKey: "products.security.title",
    descKey: "products.security.desc",
    icon: Shield,
    iconColor: "text-red-600",
    bgGradient: "bg-gradient-to-br from-red-50 to-red-100",
    cardBorder: "border-red-200 hover:border-red-300",
    buttonColor: "bg-red-600 hover:bg-red-700 text-white",
    link: "/products/security",
    products: [
      "PCI Approved EPP",
      "Full Metal Keyboard",
      "NON PCI Pinpad"
    ],
    badge: "Security"
  },
  {
    id: "transportation",
    titleKey: "products.transportation.title",
    descKey: "products.transportation.desc",
    icon: Train,
    iconColor: "text-purple-600",
    bgGradient: "bg-gradient-to-br from-purple-50 to-purple-100",
    cardBorder: "border-purple-200 hover:border-purple-300",
    buttonColor: "bg-purple-600 hover:bg-purple-700 text-white",
    link: "/products/transportation",
    products: [
      "Ticket Vending Kiosk",
      "Card Dispenser Kiosk",
      "Card Top-up Kiosk",
      "Parking Payment Kiosk"
    ],
    badge: "Transport"
  },
  {
    id: "information",
    titleKey: "products.information.title",
    descKey: "products.information.desc",
    icon: Info,
    iconColor: "text-indigo-600",
    bgGradient: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    cardBorder: "border-indigo-200 hover:border-indigo-300",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700 text-white",
    link: "/products/information",
    products: [
      "Information Kiosk",
      "Digital Signage",
      "Way Finding Solutions",
      "Queuing System"
    ],
    badge: "Information"
  },
  {
    id: "payment",
    titleKey: "products.payment.title",
    descKey: "products.payment.desc",
    icon: CreditCard,
    iconColor: "text-amber-600",
    bgGradient: "bg-gradient-to-br from-amber-50 to-amber-100",
    cardBorder: "border-amber-200 hover:border-amber-300",
    buttonColor: "bg-amber-600 hover:bg-amber-700 text-white",
    link: "/products/payment",
    products: [
      "Bitcoin Payment Kiosk",
      "Cash Payment Kiosk",
      "Wall Mount Payment Kiosk",
      "Cashless Payment Kiosk"
    ],
    badge: "Payment"
  }
];

export default function ProductCategories() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Floating background elements */}
      <FloatingElements count={8} className="opacity-30" />
      
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59,130,246,0.05), rgba(147,51,234,0.05), rgba(236,72,153,0.05))",
            "linear-gradient(45deg, rgba(147,51,234,0.05), rgba(236,72,153,0.05), rgba(59,130,246,0.05))",
            "linear-gradient(45deg, rgba(236,72,153,0.05), rgba(59,130,246,0.05), rgba(147,51,234,0.05))",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <Scene3D>
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
              transition={{ duration: 0.3 }}
            >
              <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                {t('common.ourProducts')}
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              {t('common.ourProducts')}
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t('common.comprehensive')}
            </motion.p>
          </motion.div>
        </Scene3D>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const glowColors = [
              'rgba(59, 130, 246, 0.3)',   // blue
              'rgba(16, 185, 129, 0.3)',   // emerald
              'rgba(239, 68, 68, 0.3)',    // red
              'rgba(147, 51, 234, 0.3)',   // purple
              'rgba(99, 102, 241, 0.3)',   // indigo
              'rgba(245, 158, 11, 0.3)',   // amber
            ];
            
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <Card3D 
                  className="h-full" 
                  glowColor={glowColors[index % glowColors.length]}
                  intensity={0.8}
                >
                  <Card className={`group hover:shadow-2xl transition-all duration-500 border-2 ${category.cardBorder} bg-white/90 backdrop-blur-sm overflow-hidden h-full`}>
                    {/* Animated background pattern */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${category.bgGradient.replace('bg-gradient-to-br', '').replace('from-', '').replace('to-', '').split(' ')[0]}20, transparent 70%)`,
                      }}
                    />
                    
                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div 
                          className={`w-16 h-16 ${category.bgGradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: [0, -10, 10, 0],
                            transition: { duration: 0.5 }
                          }}
                        >
                          <motion.div
                            animate={{
                              rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.2,
                            }}
                          >
                            <IconComponent className={`h-8 w-8 ${category.iconColor}`} />
                          </motion.div>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="secondary" className="text-xs font-medium backdrop-blur-sm">
                            {category.badge}
                          </Badge>
                        </motion.div>
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {t(category.titleKey)}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {t(category.descKey)}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0 relative z-10">
                      <div className="space-y-3 mb-6">
                        {category.products.map((product, productIndex) => (
                          <motion.div 
                            key={productIndex} 
                            className="flex items-center text-sm group/item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + productIndex * 0.05 }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div 
                              className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 group-hover/item:bg-green-200 transition-colors"
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Check className="h-3 w-3 text-green-600" />
                            </motion.div>
                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{product}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <Link href={category.link}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            className={`w-full ${category.buttonColor} group/btn shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                            data-testid={`button-explore-${category.id}`}
                          >
                            {/* Button shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              initial={{ x: '-100%' }}
                              whileHover={{ x: '100%' }}
                              transition={{ duration: 0.6 }}
                            />
                            <span className="relative z-10">{t('common.explore')} {t(category.titleKey === "products.banking.title" ? "products.banking.title" : category.titleKey)} {t('common.solutions')}</span>
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                            </motion.div>
                          </Button>
                        </motion.div>
                      </Link>
                    </CardContent>
                  </Card>
                </Card3D>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Enhanced Call to Action with 3D effects */}
        <Scene3D className="mt-16">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Card3D glowColor="rgba(59, 130, 246, 0.4)" intensity={1.2}>
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 backdrop-blur-sm relative overflow-hidden">
                {/* Animated background elements */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-16 h-16 bg-purple-400/10 rounded-full blur-xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.6, 0.3, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                />
                
                <motion.h3 
                  className="text-2xl font-bold text-foreground mb-4"
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Need a Custom Solution?
                </motion.h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our engineering team can design and manufacture bespoke self-service solutions tailored to your specific industry requirements.
                </p>
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10">Get Custom Quote</span>
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </Card3D>
          </motion.div>
        </Scene3D>
      </div>
    </section>
  );
}
