import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const HeartParticles: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (Math.random() > 0.8) { // 20% chance on scroll
        const newParticle = {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + 20,
        };
        setParticles(prev => [...prev, newParticle]);
        
        // Remove particle after animation
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id));
        }, 4000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute text-pink-400"
            initial={{
              x: particle.x,
              y: particle.y,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: particle.x + (Math.random() - 0.5) * 200,
              y: particle.y - 300,
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 360],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4, ease: "easeOut" }}
          >
            <Heart size={16} fill="currentColor" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default HeartParticles;