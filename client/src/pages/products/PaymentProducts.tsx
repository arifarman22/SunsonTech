import { Link, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CreditCard, Smartphone, Bitcoin, Zap } from "lucide-react";

const paymentProducts = [
  {
    id: "bitcoin-payment",
    name: "Bitcoin Payment Kiosk",
    model: "SKT-BTC-2001",
    description: "Cryptocurrency payment terminal supporting Bitcoin and major altcoins with secure wallet integration.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Bitcoin & altcoin support",
      "QR code scanning",
      "Real-time exchange rates",
      "Secure wallet integration",
      "KYC compliance",
      "Receipt printing"
    ],
    specifications: {
      "Dimensions": "1600 x 700 x 500 mm",
      "Weight": "200 kg",
      "Power": "220V AC",
      "Display": "21'' TFT LCD Touch Screen",
      "Cryptocurrency": "BTC, ETH, LTC, BCH"
    }
  },
  {
    id: "cash-payment",
    name: "Cash Payment Kiosk",
    model: "SKT-CP-3001",
    description: "Self-service cash payment terminal for bill payments, top-ups, and various services.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Bill payment processing",
      "Cash validation",
      "Change dispensing",
      "Service provider integration",
      "Receipt generation",
      "Multi-currency support"
    ],
    specifications: {
      "Dimensions": "1800 x 800 x 600 mm",
      "Weight": "350 kg",
      "Power": "220V AC",
      "Cash Validator": "Multi-denomination",
      "Change Dispenser": "Coin & note"
    }
  },
  {
    id: "wall-mount-payment",
    name: "Wall Mount Payment Kiosk",
    model: "SKT-WM-4001",
    description: "Compact wall-mounted payment terminal ideal for space-constrained environments.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Space-saving design",
      "Card payment processing",
      "Contactless payment",
      "Receipt printing",
      "Remote monitoring",
      "Vandal resistant"
    ],
    specifications: {
      "Dimensions": "800 x 400 x 200 mm",
      "Weight": "50 kg",
      "Power": "12V DC",
      "Display": "15'' TFT LCD Touch Screen",
      "Payment": "EMV, NFC, Contactless"
    }
  },
  {
    id: "cashless-payment",
    name: "Cashless Payment Kiosk",
    model: "SKT-CL-5001",
    description: "Modern cashless payment solution supporting cards, mobile payments, and digital wallets.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Card payment (EMV)",
      "NFC/Contactless",
      "Mobile wallet support",
      "QR code payments",
      "Digital receipts",
      "PCI DSS compliance"
    ],
    specifications: {
      "Dimensions": "1500 x 600 x 400 mm",
      "Weight": "120 kg",
      "Power": "220V AC",
      "Display": "19'' TFT LCD Touch Screen",
      "Security": "PCI DSS Level 1"
    }
  }
];

export default function PaymentProducts() {
  const [, setLocation] = useLocation();

  const handleContactQuote = (productId: string) => {
    setLocation('/contact');
  };

  const handleViewDetails = (productId: string) => {
    setLocation(`/products/payment/${productId}`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-yellow-900 to-orange-700 text-white py-20 relative overflow-hidden"
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
            <h1 className="text-5xl font-bold mb-6">Payment Solutions</h1>
            <p className="text-xl text-yellow-100 mb-8">
              Comprehensive payment processing solutions supporting traditional and modern payment methods 
              including cryptocurrency, contactless, and mobile payments for diverse business needs.
            </p>
            <div className="flex justify-center space-x-8 mt-12">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <CreditCard className="h-6 w-6 text-yellow-300" />
                <span className="text-yellow-100">Card Payments</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Smartphone className="h-6 w-6 text-yellow-300" />
                <span className="text-yellow-100">Mobile Wallets</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Bitcoin className="h-6 w-6 text-yellow-300" />
                <span className="text-yellow-100">Cryptocurrency</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Payment Stats */}
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
              <div className="text-3xl font-bold text-yellow-600 mb-2">50+</div>
              <div className="text-muted-foreground">Payment Methods</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-yellow-600 mb-2">99.9%</div>
              <div className="text-muted-foreground">Transaction Success</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-yellow-600 mb-2">3s</div>
              <div className="text-muted-foreground">Average Processing</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-muted-foreground">Payment Processing</div>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Payment Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Next-generation payment solutions for the digital economy
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {paymentProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-yellow-100">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <motion.div 
                        className="bg-yellow-600 text-white p-2 rounded-full"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Zap className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {product.name}
                      <motion.span 
                        className="text-sm bg-yellow-600/10 text-yellow-600 px-3 py-1 rounded-full flex items-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <CreditCard className="h-3 w-3 mr-1" />
                        {product.model}
                      </motion.span>
                    </CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Smartphone className="h-4 w-4 mr-2 text-yellow-600" />
                        Payment Features
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
                            <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
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
                        className="flex-1 bg-yellow-600 hover:bg-yellow-700" 
                        onClick={() => handleViewDetails(product.id)}
                        data-testid={`button-view-details-${product.id}`}
                      >
                        View Details
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white" 
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

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Supported Payment Methods</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Accept all major payment methods with our comprehensive solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center p-6 rounded-2xl bg-yellow-50 border border-yellow-100"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <CreditCard className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Card Payments</h3>
              <p className="text-muted-foreground text-sm">Visa, Mastercard, Amex, Discover, UnionPay</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-2xl bg-yellow-50 border border-yellow-100"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Smartphone className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Mobile Wallets</h3>
              <p className="text-muted-foreground text-sm">Apple Pay, Google Pay, Samsung Pay, Alipay</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-2xl bg-yellow-50 border border-yellow-100"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Bitcoin className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Cryptocurrency</h3>
              <p className="text-muted-foreground text-sm">Bitcoin, Ethereum, Litecoin, Bitcoin Cash</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-2xl bg-yellow-50 border border-yellow-100"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Instant Payments</h3>
              <p className="text-muted-foreground text-sm">Real-time processing, QR codes, NFC</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-yellow-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Accept All Payment Methods?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us to learn how our payment solutions can increase your revenue and customer satisfaction
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              size="lg"
              className="bg-white text-yellow-600 hover:bg-gray-100"
              onClick={() => setLocation('/contact')}
            >
              Start Accepting Payments
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-yellow-600"
              onClick={() => setLocation('/solutions/payment')}
            >
              View Payment Solutions
            </Button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
