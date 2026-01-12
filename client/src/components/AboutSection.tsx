import { Link } from "wouter";
import { ArrowRight, Users, Award, Globe, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const solutions = [
  {
    id: "banking",
    title: "Banking Solutions",
    description: "Sunson delivers CDM Solutions that can fulfill your business needs. The flexible/friendly software solution makes it easily connected.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    gradient: "from-blue-500/10 to-blue-600/10",
    iconColor: "text-blue-600",
    link: "/solutions/cdm",
    icon: TrendingUp
  },
  {
    id: "healthcare",
    title: "Healthcare Solutions",
    description: "Sunson imagines a future in which healthcare systems provide consumers with high-quality care in various convenient forms.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    gradient: "from-emerald-500/10 to-emerald-600/10",
    iconColor: "text-emerald-600",
    link: "/solutions/healthcare",
    icon: Users
  },
  {
    id: "security",
    title: "Security Solutions",
    description: "Sunson offers a variety of EPPs solutions which is PCI certified and are adaptable for your business.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    gradient: "from-red-500/10 to-red-600/10",
    iconColor: "text-red-600",
    link: "/solutions/epp",
    icon: Award
  },
  {
    id: "payments",
    title: "Payment Solutions",
    description: "Sunson payment kiosk is a self-service kiosk that can receive a bill payment for a service or good rendered.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    gradient: "from-amber-500/10 to-amber-600/10",
    iconColor: "text-amber-600",
    link: "/solutions/payment",
    icon: Globe
  }
];

export default function AboutSection() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
            WHO WE ARE
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            We are a manufacturer of banking system solutions, healthcare solutions and information security solutions.
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            With over a decade of experience, we deliver cutting-edge self-service technology solutions that transform how businesses interact with their customers.
          </p>
          <Link href="/about">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Company Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { label: "Years Experience", value: "15+", icon: Award },
            { label: "Global Clients", value: "500+", icon: Globe },
            { label: "Team Members", value: "200+", icon: Users },
            { label: "Projects Delivered", value: "1000+", icon: TrendingUp },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Team Image */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400" 
              alt="Sunson Technology Team" 
              className="w-full h-96 object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Our Dedicated Team</h3>
              <p className="text-white/90">Passionate professionals committed to innovation and excellence</p>
            </div>
          </div>
        </motion.div>

        {/* Solution Pillars */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div key={solution.id} variants={itemVariants}>
                <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden h-full">
                  <div className="relative">
                    <img 
                      src={solution.image} 
                      alt={`${solution.title} Solutions`} 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${solution.gradient} to-transparent`} />
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <IconComponent className={`w-5 h-5 ${solution.iconColor}`} />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Link href={solution.link}>
                      <Button variant="ghost" className="w-full justify-start p-0 h-auto font-semibold text-primary hover:text-primary/80 group/btn">
                        Learn More 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
