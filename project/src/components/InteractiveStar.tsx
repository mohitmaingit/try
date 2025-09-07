import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface StarProps {
  id: string;
  x: number;
  y: number;
  size: number;
  onClick: () => void;
  isExplored: boolean;
  glowColor: string;
}

const InteractiveStar: React.FC<StarProps> = ({
  id,
  x,
  y,
  size,
  onClick,
  isExplored,
  glowColor,
}) => {
  return (
    <motion.div
      className="absolute cursor-pointer z-10"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: Math.random() * 2, duration: 0.5 }}
    >
      <motion.div
        className={`relative ${isExplored ? 'text-pink-300' : 'text-yellow-300'}`}
        animate={{
          rotate: [0, 360],
          filter: [
            `drop-shadow(0 0 ${size}px ${glowColor})`,
            `drop-shadow(0 0 ${size * 2}px ${glowColor})`,
            `drop-shadow(0 0 ${size}px ${glowColor})`,
          ],
        }}
        transition={{
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          filter: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Star size={size} fill="currentColor" />
      </motion.div>
      
      {isExplored && (
        <motion.div
          className="absolute inset-0 bg-pink-400 rounded-full opacity-30 blur-sm"
          initial={{ scale: 0 }}
          animate={{ scale: 2 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.div>
  );
};

export default InteractiveStar;