import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  className = ''
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
};

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: React.ReactNode;
  color: string;
  description?: string;
}

interface InteractiveStatsProps {
  stats: StatItem[];
  className?: string;
}

export const InteractiveStats: React.FC<InteractiveStatsProps> = ({ 
  stats, 
  className = '' 
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <motion.div
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="relative group"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <motion.div
            className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Icon */}
            <motion.div
              className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${stat.color}`}
              animate={{
                rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                scale: hoveredIndex === index ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {stat.icon}
            </motion.div>

            {/* Value */}
            <motion.div
              className="text-3xl font-bold text-foreground mb-2"
              animate={{
                scale: hoveredIndex === index ? 1.1 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <AnimatedCounter
                from={0}
                to={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                duration={2.5}
              />
            </motion.div>

            {/* Label */}
            <motion.div
              className="text-sm font-medium text-muted-foreground mb-2"
              animate={{
                color: hoveredIndex === index ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
              }}
              transition={{ duration: 0.2 }}
            >
              {stat.label}
            </motion.div>

            {/* Description */}
            {stat.description && (
              <motion.div
                className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ height: 0 }}
                animate={{ 
                  height: hoveredIndex === index ? 'auto' : 0,
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {stat.description}
              </motion.div>
            )}

            {/* Hover Effect Background */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${stat.color.replace('bg-', '').replace('-100', '')}20, transparent)`,
              }}
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Floating particles effect */}
          {hoveredIndex === index && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default InteractiveStats;