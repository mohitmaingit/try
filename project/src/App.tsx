import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import HeartParticles from './components/HeartParticles';
import Navigation from './components/Navigation';
import StarryMemories from './components/StarryMemories';
import DailyLoveDrop from './components/DailyLoveDrop';
import WeatherLove from './components/WeatherLove';
import NasaLove from './components/NasaLove';
import MusicPlayer from './components/MusicPlayer';
import { Heart } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('memories');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'memories':
        return <StarryMemories />;
      case 'love-drop':
        return <DailyLoveDrop />;
      case 'weather':
        return <WeatherLove />;
      case 'cosmic':
        return <NasaLove />;
      case 'music':
        return <MusicPlayer />;
      default:
        return <StarryMemories />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Heart Particles */}
      <HeartParticles />
      
      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center">
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Heart className="text-pink-400 mx-auto mb-4" size={80} fill="currentColor" />
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            The Universe of Us
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            A magical galaxy celebrating our love story, where every star holds a precious memory
            and every constellation tells our tale ✨
          </motion.p>
          
          <motion.button
            onClick={() => setActiveSection('memories')}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(236, 72, 153, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Universe 🚀
          </motion.button>
        </div>
      </motion.section>
      
      {/* Dynamic Content Section */}
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        {renderActiveSection()}
      </motion.div>
      
      {/* Footer */}
      <motion.footer
        className="relative py-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-md mx-auto border border-white/20 mx-4">
          <Heart className="text-pink-400 mx-auto mb-3" size={32} fill="currentColor" />
          <p className="text-white/90 font-medium mb-2">
            Made with infinite love for my universe ✨
          </p>
          <p className="text-white/60 text-sm">
            Every pixel crafted with love, every animation filled with memories
          </p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;