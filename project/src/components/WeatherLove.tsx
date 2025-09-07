import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sun, Cloud, CloudRain, SunSnow as Snow } from 'lucide-react';
import axios from 'axios';

interface WeatherData {
  city: string;
  temperature: number;
  description: string;
  main: string;
}

const WeatherLove: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // For demo purposes, using a placeholder. In production, you'd use a real API key
  const fetchWeather = async () => {
    setLoading(true);
    try {
      // Mock weather data for demo (replace with real API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      setWeather({
        city: "Our Special Place",
        temperature: 22,
        description: "Perfect for our love",
        main: "Clear"
      });
    } catch (error) {
      setWeather({
        city: "Wherever You Are",
        temperature: 25,
        description: "Beautiful like you",
        main: "Sunny"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const getWeatherIcon = (main: string) => {
    switch (main.toLowerCase()) {
      case 'clear': return <Sun className="text-yellow-400" size={40} />;
      case 'clouds': return <Cloud className="text-gray-300" size={40} />;
      case 'rain': return <CloudRain className="text-blue-400" size={40} />;
      case 'snow': return <Snow className="text-white" size={40} />;
      default: return <Sun className="text-yellow-400" size={40} />;
    }
  };

  const getRomanticMessage = (main: string, temp: number) => {
    if (main.toLowerCase() === 'clear') {
      return `The sun is shining just like your smile brightens my world! ☀️💕`;
    } else if (main.toLowerCase() === 'rain') {
      return `Even the rain can't dampen my love for you! Let's dance in it together 💃🌧️`;
    } else if (main.toLowerCase() === 'clouds') {
      return `The clouds may be gray, but you paint my world in colors! 🎨💖`;
    } else {
      return `Whatever the weather, you're my perfect forecast! 🌈💕`;
    }
  };

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Love Weather 🌤️
        </motion.h2>
        
        {loading ? (
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-white/60">Checking the weather of our love...</div>
          </motion.div>
        ) : weather && (
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-pink-400 mr-2" size={20} />
              <span className="text-white font-semibold">{weather.city}</span>
            </div>
            
            <div className="flex justify-center mb-4">
              {getWeatherIcon(weather.main)}
            </div>
            
            <div className="text-3xl font-bold text-white mb-2">
              {weather.temperature}°C
            </div>
            
            <div className="text-white/80 mb-6">
              {weather.description}
            </div>
            
            <motion.div
              className="bg-pink-500/20 rounded-lg p-4 border border-pink-400/30"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-pink-200 leading-relaxed">
                {getRomanticMessage(weather.main, weather.temperature)}
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WeatherLove;