import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Volume2, Heart } from 'lucide-react';

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  isLoveNote?: boolean;
}

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [showPlayer, setShowPlayer] = useState(false);

  const ourPlaylist: Song[] = [
    { id: 1, title: "Perfect", artist: "Ed Sheeran", duration: "4:23", isLoveNote: true },
    { id: 2, title: "All of Me", artist: "John Legend", duration: "4:29" },
    { id: 3, title: "Thinking Out Loud", artist: "Ed Sheeran", duration: "4:41" },
    { id: 4, title: "A Thousand Years", artist: "Christina Perri", duration: "4:45", isLoveNote: true },
    { id: 5, title: "At Last", artist: "Etta James", duration: "3:01" },
    { id: 6, title: "Make You Feel My Love", artist: "Adele", duration: "3:32" },
  ];

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % ourPlaylist.length);
  };

  const prevSong = () => {
    setCurrentSong((prev) => (prev - 1 + ourPlaylist.length) % ourPlaylist.length);
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
          Our Love Playlist 🎵
        </motion.h2>
        
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Current Song Display */}
          <div className="text-center mb-8">
            <motion.div
              className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center"
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 10, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
            >
              <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="text-white" size={48} fill="currentColor" />
              </div>
            </motion.div>
            
            <h3 className="text-2xl font-bold text-white mb-2">
              {ourPlaylist[currentSong].title}
            </h3>
            <p className="text-pink-300 mb-1">{ourPlaylist[currentSong].artist}</p>
            <p className="text-white/60">{ourPlaylist[currentSong].duration}</p>
            
            {ourPlaylist[currentSong].isLoveNote && (
              <motion.div
                className="mt-4 px-4 py-2 bg-pink-500/20 rounded-full border border-pink-400/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="text-pink-300 text-sm">💕 Our Special Song</span>
              </motion.div>
            )}
          </div>
          
          {/* Player Controls */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <motion.button
              onClick={prevSong}
              className="text-white/60 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SkipBack size={24} />
            </motion.button>
            
            <motion.button
              onClick={togglePlayPause}
              className="w-16 h-16 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </motion.button>
            
            <motion.button
              onClick={nextSong}
              className="text-white/60 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SkipForward size={24} />
            </motion.button>
          </div>
          
          {/* Volume Control */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Volume2 className="text-white/60" size={20} />
            <div className="w-32 h-2 bg-white/20 rounded-full">
              <div className="w-3/4 h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full" />
            </div>
          </div>
          
          {/* Playlist Toggle */}
          <div className="text-center">
            <motion.button
              onClick={() => setShowPlayer(!showPlayer)}
              className="px-6 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/50 text-purple-300 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showPlayer ? 'Hide Playlist' : 'Show Our Playlist'}
            </motion.button>
          </div>
          
          {/* Playlist */}
          <AnimatePresence>
            {showPlayer && (
              <motion.div
                className="mt-6 space-y-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {ourPlaylist.map((song, index) => (
                  <motion.div
                    key={song.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      currentSong === index
                        ? 'bg-pink-500/20 border border-pink-400/30'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                    onClick={() => setCurrentSong(index)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center">
                          <span className="text-white font-medium">{song.title}</span>
                          {song.isLoveNote && (
                            <Heart className="ml-2 text-pink-400" size={14} fill="currentColor" />
                          )}
                        </div>
                        <span className="text-white/60 text-sm">{song.artist}</span>
                      </div>
                      <span className="text-white/60 text-sm">{song.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MusicPlayer;