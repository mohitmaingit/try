import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, RefreshCw } from 'lucide-react';
import axios from 'axios';

interface Quote {
  content: string;
  author: string;
}

const DailyLoveDrop: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.quotable.io/random?tags=love,happiness,motivational');
      setQuote(response.data);
    } catch (error) {
      // Fallback quote
      setQuote({
        content: "You are my sun, my moon, and all my stars.",
        author: "E.E. Cummings"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Daily Love Drop ✨
        </motion.h2>
        
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {loading ? (
            <div className="flex justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <RefreshCw className="text-pink-400" size={32} />
              </motion.div>
            </div>
          ) : quote && (
            <>
              <Quote className="text-pink-400 mx-auto mb-4" size={32} />
              <blockquote className="text-xl text-white/90 font-light italic mb-4 leading-relaxed">
                "{quote.content}"
              </blockquote>
              <cite className="text-pink-300">— {quote.author}</cite>
            </>
          )}
          
          <motion.button
            onClick={fetchQuote}
            className="mt-6 px-6 py-2 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-400/50 text-pink-300 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            New Love Drop ♡
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DailyLoveDrop;