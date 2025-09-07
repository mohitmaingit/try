import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Music, Camera, Cloud, Quote } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'memories', label: 'Memories', icon: Star },
    { id: 'love-drop', label: 'Love Drop', icon: Quote },
    { id: 'weather', label: 'Weather', icon: Cloud },
    { id: 'cosmic', label: 'Cosmic', icon: Camera },
    { id: 'music', label: 'Music', icon: Music },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Heart className="text-pink-400" size={20} fill="currentColor" />
            <span className="text-white font-bold text-sm">Universe of Us</span>
          </div>
          
          <div className="w-px h-6 bg-white/20" />
          
          <div className="flex space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-colors ${
                    activeSection === item.id
                      ? 'bg-pink-500/30 text-pink-300'
                      : 'text-white/60 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                  <span className="text-xs hidden sm:inline">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;