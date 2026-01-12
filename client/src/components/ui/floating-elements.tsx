import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({ 
  count = 6, 
  className = '' 
}) => {
  const elements = Array.from({ length: count }, (_, i) => i);

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      },
    },
  };

  const shapes = [
    // Circle
    <div className="w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full backdrop-blur-sm" />,
    // Square
    <div className="w-6 h-6 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-lg backdrop-blur-sm rotate-45" />,
    // Triangle
    <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-purple-400/20" />,
    // Hexagon
    <div className="w-8 h-8 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full clip-hexagon backdrop-blur-sm" />,
    // Diamond
    <div className="w-6 h-6 bg-gradient-to-br from-yellow-400/20 to-red-400/20 rounded-sm rotate-45 backdrop-blur-sm" />,
    // Oval
    <div className="w-10 h-6 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full backdrop-blur-sm" />,
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          variants={floatingVariants}
          animate="animate"
        >
          {shapes[i % shapes.length]}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;