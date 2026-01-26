import { Link } from "wouter";
import { ArrowRight, Users, Award, Globe, TrendingUp, Zap, Rocket, Shield, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const corporateTeam = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop";

const solutions = [
  {
    id: "banking",
    title: "AI Banking Revolution",
    description: "Next-generation CDM solutions powered by artificial intelligence and machine learning for unprecedented efficiency.",
    gradient: "from-emerald-500 to-teal-600",
    link: "/solutions/cdm",
    icon: Brain
  },
  {
    id: "healthcare",
    title: "Smart Healthcare",
    description: "Transforming patient experiences with intelligent automation and seamless digital integration.",
    gradient: "from-indigo-500 to-purple-600",
    link: "/solutions/healthcare",
    icon: Users
  },
  {
    id: "security",
    title: "Quantum Security",
    description: "Military-grade encryption and biometric authentication for the most secure transactions possible.",
    gradient: "from-red-500 to-pink-600",
    link: "/solutions/epp",
    icon: Shield
  },
  {
    id: "innovation",
    title: "Future Innovation",
    description: "Pioneering tomorrow's technology today with cutting-edge R&D and visionary engineering.",
    gradient: "from-violet-500 to-purple-600",
    link: "/about",
    icon: Rocket
  }
];

const stats = [
  { number: "1000+", label: "Global Installations", icon: Globe },
  { number: "150+", label: "Countries Served", icon: TrendingUp },
  { number: "99.9%", label: "Uptime Guarantee", icon: Award },
  { number: "24/7", label: "Support Available", icon: Zap }
];

export default function AboutSection() {
  return (
    <section className="section-modern relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 gradient-mesh opacity-5" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-emerald-100 to-transparent rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-indigo-100 to-transparent rounded-full blur-3xl opacity-30" />
      
      <div className="container-modern relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-gradient-primary">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em]">
                Global Innovation Leader
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-gradient mb-8 leading-tight">
              Shaping the
              <br />
              Digital Future
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              For over two decades, Sunson Technology has been at the forefront of automated terminal innovation. We don't just build machines—we craft experiences that transform how people interact with technology.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              {stats.slice(0, 2).map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * i, duration: 0.6 }}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-emerald-500 mr-2" />
                      <div className="text-4xl font-black text-gray-900">{stat.number}</div>
                    </div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
            
            <Link href="/about">
              <Button className="btn-modern text-lg px-10 py-6 h-auto font-bold group">
                Discover Our Story
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="rounded-modern-xl overflow-hidden shadow-modern-xl">
                <img
                  src={corporateTeam}
                  alt="Sunson Technology Innovation Team"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              
              {/* Floating stats cards */}
              <motion.div
                className="absolute -bottom-8 -left-8 glass-modern rounded-modern-lg p-6 shadow-modern-lg border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">ISO 27001</div>
                    <div className="text-sm text-gray-600 font-semibold">Security Certified</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -top-8 -right-8 glass-modern rounded-modern-lg p-6 shadow-modern-lg border border-white/20"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-secondary flex items-center justify-center">
                    <Zap className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">AI Powered</div>
                    <div className="text-sm text-gray-600 font-semibold">Smart Technology</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Solutions Grid */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl md:text-6xl font-black text-gradient mb-6">
              Innovation Ecosystem
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive suite of solutions designed to revolutionize industries and enhance human experiences.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="card-modern hover-lift h-full border-0 overflow-hidden relative">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <CardHeader className="relative z-10 p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 shadow-modern group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-all duration-300">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-base mb-6">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 p-8 pt-0">
                    <Link href={solution.link}>
                      <Button variant="ghost" className="p-0 h-auto font-bold text-gray-700 hover:text-emerald-600 hover:bg-transparent group/btn transition-all">
                        Explore Solution
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-black text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
