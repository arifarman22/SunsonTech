import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { RotateCcw, ZoomIn, ZoomOut, Maximize, Info, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
}

interface InteractiveProductShowcaseProps {
  product: Product;
  className?: string;
}

export const InteractiveProductShowcase: React.FC<InteractiveProductShowcaseProps> = ({ 
  product, 
  className = '' 
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [zoom, setZoom] = useState([1]);
  const [rotation, setRotation] = useState([0]);
  const [showSpecs, setShowSpecs] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]));
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]));

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardContent className="p-0">
        {/* Product Image with 3D Interaction */}
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <div ref={constraintsRef} className="relative h-96 overflow-hidden">
            <motion.div
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.1}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                x.set((e.clientX - centerX) / 5);
                y.set((e.clientY - centerY) / 5);
              }}
              onMouseLeave={() => {
                x.set(0);
                y.set(0);
              }}
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-8"
                style={{
                  scale: zoom[0],
                  rotate: rotation[0],
                }}
                animate={{
                  filter: `brightness(${1 + (zoom[0] - 1) * 0.2})`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </motion.div>

            {/* Floating Action Buttons */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className="w-10 h-10 p-0 rounded-full shadow-lg backdrop-blur-sm"
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleShare}
                  className="w-10 h-10 p-0 rounded-full shadow-lg backdrop-blur-sm"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowSpecs(!showSpecs)}
                  className="w-10 h-10 p-0 rounded-full shadow-lg backdrop-blur-sm"
                >
                  <Info className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-4 left-4 right-4">
              <Card className="bg-background/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Zoom Control */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Zoom</span>
                        <div className="flex space-x-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setZoom([Math.max(0.5, zoom[0] - 0.25)])}
                            className="w-8 h-8 p-0"
                          >
                            <ZoomOut className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setZoom([Math.min(3, zoom[0] + 0.25)])}
                            className="w-8 h-8 p-0"
                          >
                            <ZoomIn className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      <Slider
                        value={zoom}
                        onValueChange={setZoom}
                        min={0.5}
                        max={3}
                        step={0.1}
                        className="w-full"
                      />
                    </div>

                    {/* Rotation Control */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Rotate</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setRotation([0])}
                          className="w-8 h-8 p-0"
                        >
                          <RotateCcw className="w-3 h-3" />
                        </Button>
                      </div>
                      <Slider
                        value={rotation}
                        onValueChange={setRotation}
                        min={-180}
                        max={180}
                        step={5}
                        className="w-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-muted-foreground">
                {product.description}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <motion.div
            initial={false}
            animate={{ height: showSpecs ? 'auto' : 0, opacity: showSpecs ? 1 : 0 }}
            className="overflow-hidden"
          >
            <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-border last:border-b-0">
                  <span className="text-sm font-medium text-muted-foreground">{key}</span>
                  <span className="text-sm text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveProductShowcase;