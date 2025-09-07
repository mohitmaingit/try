import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import InteractiveStar from './InteractiveStar';
import MemoryModal from './MemoryModal';
import { memories, dreams, specialStar, Memory } from '../data/memories';

const StarryMemories: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [exploredStars, setExploredStars] = useState<Set<string>>(new Set());
  const [showHeartConstellation, setShowHeartConstellation] = useState(false);
  const [isSpecialDateUnlocked, setIsSpecialDateUnlocked] = useState(false);

  // Check if special date is unlocked (for demo, always unlocked after 5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSpecialDateUnlocked(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Check if heart constellation should appear
  useEffect(() => {
    if (exploredStars.size >= 3) {
      setShowHeartConstellation(true);
    }
  }, [exploredStars.size]);

  const handleStarClick = (memory: Memory) => {
    setSelectedMemory(memory);
    setExploredStars(prev => new Set([...prev, memory.id]));
  };

  const allStars = [...memories, ...dreams];

  // Heart constellation points (simplified heart shape)
  const heartPoints = [
    { x: 45, y: 35 }, { x: 55, y: 35 }, // top of heart
    { x: 40, y: 40 }, { x: 60, y: 40 }, // upper sides
    { x: 50, y: 55 } // bottom point
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-white text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Universe of Memories ✨
        </motion.h2>
        
        <motion.p
          className="text-xl text-white/80 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Click on the stars to explore our precious moments and dreams together
        </motion.p>

        {/* Interactive Star Field */}
        <div className="relative h-96 mb-16">
          {/* Memory and Dream Stars */}
          {allStars.map((star) => (
            <InteractiveStar
              key={star.id}
              id={star.id}
              x={star.x}
              y={star.y}
              size={star.size}
              onClick={() => handleStarClick(star)}
              isExplored={exploredStars.has(star.id)}
              glowColor={star.glowColor}
            />
          ))}
          
          {/* Special Anniversary Star */}
          {isSpecialDateUnlocked && (
            <motion.div
              className="absolute"
              style={{ left: `${specialStar.x}%`, top: `${specialStar.y}%` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <InteractiveStar
                id={specialStar.id}
                x={0}
                y={0}
                size={specialStar.size}
                onClick={() => handleStarClick(specialStar)}
                isExplored={exploredStars.has(specialStar.id)}
                glowColor={specialStar.glowColor}
              />
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-yellow-300 text-sm font-bold whitespace-nowrap"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Special Day! ✨
              </motion.div>
            </motion.div>
          )}
          
          {/* Heart Constellation Lines */}
          {showHeartConstellation && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {heartPoints.map((point, index) => (
                index < heartPoints.length - 1 ? (
                  <motion.line
                    key={index}
                    x1={`${heartPoints[index].x}%`}
                    y1={`${heartPoints[index].y}%`}
                    x2={`${heartPoints[index + 1].x}%`}
                    y2={`${heartPoints[index + 1].y}%`}
                    stroke="#ff69b4"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: index * 0.5 }}
                  />
                ) : null
              ))}
              {/* Close the heart shape */}
              {showHeartConstellation && (
                <>
                  <motion.line
                    x1={`${heartPoints[4].x}%`}
                    y1={`${heartPoints[4].y}%`}
                    x2={`${heartPoints[0].x}%`}
                    y2={`${heartPoints[0].y}%`}
                    stroke="#ff69b4"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 2 }}
                  />
                  <motion.line
                    x1={`${heartPoints[4].x}%`}
                    y1={`${heartPoints[4].y}%`}
                    x2={`${heartPoints[1].x}%`}
                    y2={`${heartPoints[1].y}%`}
                    stroke="#ff69b4"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 2.5 }}
                  />
                </>
              )}
            </svg>
          )}
        </div>

        {/* Heart Constellation Message */}
        {showHeartConstellation && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <div className="bg-pink-500/20 backdrop-blur-lg rounded-2xl p-6 max-w-md mx-auto border border-pink-400/30">
              <h3 className="text-2xl font-bold text-pink-300 mb-3">💖 Heart Constellation Formed! 💖</h3>
              <p className="text-pink-200">
                Our memories have aligned to create a heart in the stars - just like how our love connects every moment we share.
              </p>
            </div>
          </motion.div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-3xl font-bold text-pink-400">{memories.length}</div>
            <div className="text-white/80">Beautiful Memories</div>
          </motion.div>
          
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="text-3xl font-bold text-purple-400">{dreams.length}</div>
            <div className="text-white/80">Shared Dreams</div>
          </motion.div>
          
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-3xl font-bold text-yellow-400">∞</div>
            <div className="text-white/80">Days of Love</div>
          </motion.div>
        </div>
      </div>

      {/* Memory Modal */}
      <MemoryModal
        memory={selectedMemory}
        onClose={() => setSelectedMemory(null)}
      />
    </section>
  );
};

export default StarryMemories;