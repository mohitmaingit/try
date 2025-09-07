import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, ExternalLink } from 'lucide-react';
import axios from 'axios';

interface APODData {
  title: string;
  explanation: string;
  url: string;
  date: string;
  media_type: string;
}

const NasaLove: React.FC = () => {
  const [apod, setApod] = useState<APODData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchAPOD = async () => {
    setLoading(true);
    try {
      // For demo purposes, using mock data. In production, use NASA API key
      await new Promise(resolve => setTimeout(resolve, 1500));
      setApod({
        title: "The Andromeda Galaxy",
        explanation: "The Andromeda Galaxy is the nearest major galaxy to our Milky Way and is approaching us at about 250,000 miles per hour. Don't worry, it won't collide with us for another 4.5 billion years.",
        url: "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg",
        date: new Date().toISOString().split('T')[0],
        media_type: "image"
      });
    } catch (error) {
      // Fallback data
      setApod({
        title: "A Beautiful Cosmic View",
        explanation: "The universe is vast and beautiful, filled with countless wonders that pale in comparison to the wonder that is you.",
        url: "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg",
        date: new Date().toISOString().split('T')[0],
        media_type: "image"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPOD();
  }, []);

  const customCaption = "The universe is infinite and breathtaking, but even with all its galaxies and stars, nothing in the cosmos shines brighter than you in my life. 💫✨";

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cosmic Love 🌌
        </motion.h2>
        
        {loading ? (
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Camera className="text-purple-400 mx-auto mb-4" size={48} />
            <div className="text-white/60">Loading today's cosmic wonder...</div>
          </motion.div>
        ) : apod && (
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {apod.media_type === 'image' && (
              <div className="relative overflow-hidden">
                <img
                  src={apod.url}
                  alt={apod.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            )}
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{apod.title}</h3>
                <span className="text-purple-300 text-sm">{apod.date}</span>
              </div>
              
              <motion.div
                className="bg-pink-500/20 rounded-lg p-4 mb-6 border border-pink-400/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-pink-200 leading-relaxed font-medium">
                  {customCaption}
                </p>
              </motion.div>
              
              <p className="text-white/80 leading-relaxed mb-6">
                {apod.explanation.length > 200 
                  ? `${apod.explanation.substring(0, 200)}...` 
                  : apod.explanation
                }
              </p>
              
              <motion.a
                href={apod.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/50 text-purple-300 rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Full Image
                <ExternalLink className="ml-2" size={16} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default NasaLove;