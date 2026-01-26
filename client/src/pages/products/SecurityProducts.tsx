import { Link, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Award } from "lucide-react";

const securityProducts = [
  {
    id: "pci-epp",
    name: "PCI Approved EPP",
    model: "SKT-EPP-V6",
    description: "PCI PTS certified encrypting PIN pad with advanced security features for secure transactions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "PCI PTS V6 certified",
      "Triple DES encryption",
      "Tamper detection",
      "Multi-language support",
      "Backlit keypad",
      "Audio feedback"
    ],
    specifications: {
      "Certification": "PCI PTS V6",
      "Encryption": "Triple DES, AES",
      "Interface": "USB, Serial, Ethernet",
      "Display": "2x16 LCD",
      "Operating Temp": "-10°C to 60°C"
    }
  },
  {
    id: "metal-keyboard",
    name: "Full Metal Keyboard",
    model: "SKT-MK-2001",
    description: "Industrial-grade full metal keyboard designed for harsh environments and high-security applications.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Stainless steel construction",
      "Vandal resistant",
      "IP65 protection",
      "Backlit keys",
      "Numeric keypad",
      "Function keys"
    ],
    specifications: {
      "Material": "304 Stainless Steel",
      "Protection": "IP65",
      "Interface": "USB, PS/2",
      "Key Travel": "3.5mm",
      "Operating Force": "2.5N"
    }
  },
  {
    id: "non-pci-pinpad",
    name: "NON PCI Pinpad",
    model: "SKT-NP-1001",
    description: "Basic PIN entry device for low-security applications and development purposes.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Basic PIN entry",
      "Numeric keypad",
      "LED indicators",
      "Buzzer feedback",
      "Compact design",
      "Cost-effective"
    ],
    specifications: {
      "Interface": "USB, Serial",
      "Display": "LED indicators",
      "Power": "5V DC via USB",
      "Dimensions": "120 x 80 x 25 mm",
      "Weight": "200g"
    }
  }
];

export default function SecurityProducts() {
  const [, setLocation] = useLocation();

  const handleContactQuote = (productId: string) => {
    setLocation('/contact');
  };

  const handleViewDetails = (productId: string) => {
    setLocation(`/products/security/${productId}`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20 relative overflow-hidden"
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
            <h1 className="text-5xl font-bold mb-6">Security Solutions</h1>
            <p className="text-xl text-red-100 mb-8">
              PCI certified security modules and encrypting PIN pads designed to protect 
              sensitive financial transactions with the highest level of security standards.
            </p>
            <div className="flex justify-center space-x-8 mt-12">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="h-6 w-6 text-red-300" />
                <span className="text-red-100">PCI Certified</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Lock className="h-6 w-6 text-red-300" />
                <span className="text-red-100">Encrypted</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Eye className="h-6 w-6 text-red-300" />
                <span className="text-red-100">Tamper Proof</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Security Stats */}
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
              <div className="text-3xl font-bold text-red-600 mb-2">PCI V6</div>
              <div className="text-muted-foreground">Latest Certification</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-red-600 mb-2">256-bit</div>
              <div className="text-muted-foreground">AES Encryption</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-muted-foreground">Tamper Detection</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-muted-foreground">Security Monitoring</div>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Security Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-leading security solutions for financial and high-security applications
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {securityProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-red-100">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <motion.div 
                        className="bg-red-600 text-white p-2 rounded-full"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Shield className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {product.name}
                      <motion.span 
                        className="text-sm bg-red-600/10 text-red-600 px-3 py-1 rounded-full flex items-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Award className="h-3 w-3 mr-1" />
                        {product.model}
                      </motion.span>
                    </CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Lock className="h-4 w-4 mr-2 text-red-600" />
                        Security Features
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-center text-sm"
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Technical Specifications</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm border-b border-border pb-1">
                            <span className="text-muted-foreground">{key}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        className="flex-1 bg-red-600 hover:bg-red-700" 
                        onClick={() => handleViewDetails(product.id)}
                        data-testid={`button-view-details-${product.id}`}
                      >
                        View Details
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white" 
                        onClick={() => handleContactQuote(product.id)}
                        data-testid={`button-contact-${product.id}`}
                      >
                        Get Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Security Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our products meet the highest international security standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-6 rounded-2xl bg-red-50 border border-red-100"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">PCI PTS Certified</h3>
              <p className="text-muted-foreground text-sm">Payment Card Industry PIN Transaction Security certification</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-2xl bg-red-50 border border-red-100"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Lock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">FIPS 140-2</h3>
              <p className="text-muted-foreground text-sm">Federal Information Processing Standard for cryptographic modules</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-2xl bg-red-50 border border-red-100"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Common Criteria</h3>
              <p className="text-muted-foreground text-sm">International standard for computer security certification</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-red-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Secure Your Transactions Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us to learn how our security solutions can protect your business and customers
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100"
              onClick={() => setLocation('/contact')}
            >
              Get Security Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600"
              onClick={() => setLocation('/solutions/epp')}
            >
              View EPP Solutions
            </Button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
