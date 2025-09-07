import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Calendar, MapPin } from 'lucide-react';

interface Memory {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  imageUrl?: string;
  type: 'memory' | 'dream' | 'special';
}

interface MemoryModalProps {
  memory: Memory | null;
  onClose: () => void;
}

const MemoryModal: React.FC<MemoryModalProps> = ({ memory, onClose }) => {
  if (!memory) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-md w-full border border-white/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-white">{memory.title}</h3>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Image placeholder */}
          {memory.imageUrl && (
            <div className="mb-4 rounded-lg overflow-hidden">
              <img
                src={memory.imageUrl}
                alt={memory.title}
                className="w-full h-48 object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="text-white/90 mb-4">
            <p className="leading-relaxed">{memory.description}</p>
          </div>

          {/* Meta information */}
          <div className="space-y-2">
            <div className="flex items-center text-pink-300">
              <Calendar size={16} className="mr-2" />
              <span className="text-sm">{memory.date}</span>
            </div>
            
            {memory.location && (
              <div className="flex items-center text-purple-300">
                <MapPin size={16} className="mr-2" />
                <span className="text-sm">{memory.location}</span>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-center">
            <motion.div
              className="text-pink-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={24} fill="currentColor" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MemoryModal;