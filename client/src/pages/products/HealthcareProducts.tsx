import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Shield, Clock, ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";

const healthcareProducts = [
  {
    id: "health-screening",
    name: "Health Screening Kiosk",
    model: "SKT-D1007",
    description: "Comprehensive health screening kiosk with advanced biometric sensors and diagnostic capabilities.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Blood pressure measurement",
      "Heart rate monitoring",
      "BMI calculation",
      "Temperature screening",
      "Health report generation",
      "Multi-language support"
    ],
    specifications: {
      "Dimensions": "1800 x 600 x 500 mm",
      "Weight": "180 kg",
      "Power": "220V AC",
      "Display": "21'' TFT LCD Touch Screen",
      "Sensors": "Medical grade certified"
    }
  },
  {
    id: "hospital-checkin",
    name: "Hospital Check-in Kiosk",
    model: "SKT-H2001",
    description: "Streamlined patient check-in system with appointment scheduling and insurance verification.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Patient registration",
      "Appointment scheduling",
      "Insurance verification",
      "Queue management",
      "Document scanning",
      "Payment processing"
    ],
    specifications: {
      "Dimensions": "1600 x 600 x 400 mm",
      "Weight": "120 kg",
      "Power": "220V AC",
      "Display": "19'' TFT LCD Touch Screen",
      "Printer": "Thermal receipt printer"
    }
  },
  {
    id: "mobile-charging",
    name: "Mobile Charging Station",
    model: "SKT-C3001",
    description: "Secure mobile device charging station with multiple port support and payment integration.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Multi-device charging",
      "Secure lockers",
      "Payment integration",
      "USB-C, Lightning, Micro-USB",
      "Digital advertising display",
      "Remote monitoring"
    ],
    specifications: {
      "Dimensions": "1200 x 400 x 300 mm",
      "Weight": "80 kg",
      "Power": "220V AC",
      "Ports": "12 charging ports",
      "Payment": "Card, mobile payment"
    }
  },
  {
    id: "hotel-checkin",
    name: "Hotel Check-in Kiosk",
    model: "SKT-HT4001",
    description: "Automated hotel guest check-in and check-out system with key card dispensing.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Guest registration",
      "Key card encoding",
      "Payment processing",
      "ID verification",
      "Room assignment",
      "Upselling capabilities"
    ],
    specifications: {
      "Dimensions": "1700 x 650 x 450 mm",
      "Weight": "150 kg",
      "Power": "220V AC",
      "Display": "21'' TFT LCD Touch Screen",
      "Card Encoder": "RFID key card system"
    }
  }
];

export default function HealthcareProducts() {
  const [, setLocation] = useLocation();

  const handleContactClick = () => {
    console.log('Navigating to contact page...');
    setLocation('/contact');
  };

  const handleQuoteClick = (productName: string) => {
    console.log(`Quote requested for: ${productName}`);
    setLocation('/contact');
  };

  const handleCallClick = () => {
    window.open('tel:+1-800-SUNSON', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@sunsontech.com', '_self');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-green-900 to-teal-700 text-white py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold mb-6">Healthcare & Retail Solutions</h1>
            <p className="text-xl text-green-100 mb-8">
              Innovative self-service healthcare solutions designed to improve patient experience 
              and streamline healthcare operations with cutting-edge technology.
            </p>
            <div className="flex justify-center space-x-8 mt-12">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="h-6 w-6 text-green-300" />
                <span className="text-green-100">Patient Care</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="h-6 w-6 text-green-300" />
                <span className="text-green-100">HIPAA Compliant</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="h-6 w-6 text-green-300" />
                <span className="text-green-100">24/7 Available</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-muted-foreground">Healthcare Installations</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-muted-foreground">Patient Satisfaction</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-muted-foreground">Reduced Wait Times</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-muted-foreground">Service Availability</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Healthcare Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed for modern medical facilities
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-12"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {healthcareProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { y: 60, opacity: 0, scale: 0.9 },
                  show: { 
                    y: 0, 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                      type: "spring",
                      damping: 20,
                      stiffness: 100
                    }
                  }
                }}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <div className="aspect-video overflow-hidden relative">
                    <motion.img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute bottom-4 left-4 text-white">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <span className="text-sm font-medium">Model: {product.model}</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between group">
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {product.name}
                      </motion.span>
                      <motion.span 
                        className="text-sm bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full shadow-md"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {product.model}
                      </motion.span>
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="font-semibold mb-3 flex items-center text-green-700">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Key Features
                      </h4>
                      <motion.ul 
                        className="space-y-2"
                        variants={{
                          hidden: { opacity: 0 },
                          show: {
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.1
                            }
                          }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                      >
                        {product.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-center text-sm group/item"
                            variants={{
                              hidden: { x: -20, opacity: 0 },
                              show: { x: 0, opacity: 1 }
                            }}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-3"
                              whileHover={{ scale: 1.5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            />
                            <span className="group-hover/item:text-green-700 transition-colors">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className="font-semibold mb-3 text-green-700">Specifications</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {Object.entries(product.specifications).map(([key, value], specIndex) => (
                          <motion.div 
                            key={key} 
                            className="flex justify-between text-sm border-b border-border/50 pb-2 hover:bg-green-50/50 px-2 rounded transition-colors"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: specIndex * 0.05 }}
                            whileHover={{ x: 5 }}
                          >
                            <span className="text-muted-foreground font-medium">{key}:</span>
                            <span className="font-semibold text-green-700">{value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.button
                        className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white shadow-lg rounded-md px-4 py-2 font-medium transition-all duration-200 group"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleContactClick}
                      >
                        <span className="flex items-center justify-center">
                          Contact Us
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>
                      <motion.button
                        className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white shadow-md rounded-md px-4 py-2 font-medium transition-all duration-200"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleQuoteClick(product.name)}
                      >
                        Get Quote
                      </motion.button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-green-600 via-teal-600 to-green-700 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            Ready to Transform Healthcare Delivery?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            Contact us today to learn how our healthcare solutions can improve patient outcomes and operational efficiency
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <motion.button
              className="bg-white text-green-600 hover:bg-gray-100 shadow-xl px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
            >
              Get Started Today
            </motion.button>
            <motion.button
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 shadow-xl px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
}