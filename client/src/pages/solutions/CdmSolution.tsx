import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, BarChart3, Clock } from "lucide-react";

export default function CdmSolution() {
  const [, setLocation] = useLocation();

  const handleGetQuote = () => {
    setLocation('/contact');
  };

  const handleScheduleDemo = () => {
    setLocation('/contact');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden"
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
            <h1 className="text-5xl font-bold mb-6">Smart Cash Deposit Machine (CDM) Solution</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive CDM solutions that streamline cash handling operations, reduce costs, 
              and enhance customer experience with cutting-edge technology and robust security features.
            </p>
            <div className="flex justify-center space-x-8 mt-12">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="h-6 w-6 text-blue-300" />
                <span className="text-blue-100">Real-time Processing</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="h-6 w-6 text-blue-300" />
                <span className="text-blue-100">Bank-grade Security</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="h-6 w-6 text-blue-300" />
                <span className="text-blue-100">24/7 Operation</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Complete CDM Ecosystem</h2>
              <p className="text-muted-foreground mb-8">
                Our CDM solution provides a complete ecosystem for cash deposit operations, 
                from hardware to software integration, ensuring seamless operation and maximum efficiency.
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start space-x-3"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Check className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Hardware Excellence</h4>
                    <p className="text-sm text-muted-foreground">Robust, reliable machines designed for 24/7 operation</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Check className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Software Integration</h4>
                    <p className="text-sm text-muted-foreground">Seamless integration with existing banking systems</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Check className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Security First</h4>
                    <p className="text-sm text-muted-foreground">Advanced security features and compliance standards</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="CDM Solution" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Solution Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced features designed to meet the demanding requirements of modern banking operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Currency Support",
                description: "Handle multiple currencies with automatic detection and validation.",
                features: ["Currency recognition", "Counterfeit detection", "Real-time validation"],
                icon: <Zap className="h-8 w-8 text-blue-600" />
              },
              {
                title: "Real-Time Processing",
                description: "Instant transaction processing with immediate account updates.",
                features: ["Immediate processing", "Account verification", "Transaction logging"],
                icon: <Clock className="h-8 w-8 text-green-600" />
              },
              {
                title: "Security & Compliance",
                description: "Enhanced security measures meeting international standards.",
                features: ["Encrypted communication", "Audit trails", "Compliance reporting"],
                icon: <Shield className="h-8 w-8 text-red-600" />
              },
              {
                title: "Remote Management",
                description: "Comprehensive remote monitoring and management capabilities.",
                features: ["Remote diagnostics", "Status monitoring", "Predictive maintenance"],
                icon: <BarChart3 className="h-8 w-8 text-purple-600" />
              },
              {
                title: "User Experience",
                description: "Intuitive interface designed for optimal user experience.",
                features: ["Touch screen interface", "Multi-language support", "Accessibility features"],
                icon: <Check className="h-8 w-8 text-orange-600" />
              },
              {
                title: "Analytics & Reporting",
                description: "Comprehensive analytics and reporting for business insights.",
                features: ["Transaction analytics", "Usage patterns", "Performance metrics"],
                icon: <BarChart3 className="h-8 w-8 text-indigo-600" />
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <ul className="space-y-2 text-sm">
                      {feature.features.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex} 
                          className="flex items-center"
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Business Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your cash handling operations with measurable business benefits
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "50%", label: "Cost Reduction", description: "Reduce operational costs through automation", color: "blue" },
              { value: "24/7", label: "Availability", description: "Round-the-clock service availability", color: "green" },
              { value: "99%", label: "Accuracy", description: "High accuracy in cash handling", color: "purple" },
              { value: "3x", label: "Efficiency", description: "Triple the transaction processing speed", color: "orange" }
            ].map((benefit, index) => (
              <motion.div 
                key={benefit.label}
                className="text-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-20 h-20 bg-${benefit.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-3xl font-bold text-${benefit.color}-600`}>{benefit.value}</span>
                </div>
                <h4 className="font-semibold mb-2">{benefit.label}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-primary text-primary-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Cash Operations?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today to learn how our CDM solution can benefit your business
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100" 
                onClick={handleGetQuote}
                data-testid="button-get-quote"
              >
                Get Quote
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary" 
                onClick={handleScheduleDemo}
                data-testid="button-schedule-demo"
              >
                Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
