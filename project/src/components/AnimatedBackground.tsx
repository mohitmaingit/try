import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  // Generate random stars for the background
  const backgroundStars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Galaxy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900" />
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/50 via-purple-800/30 to-pink-800/40" />
      
      {/* Animated background stars */}
      {backgroundStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full opacity-70"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Nebula effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;