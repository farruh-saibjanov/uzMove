import { Play, Info } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1688678004647-945d5aaf91c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBzY3JlZW58ZW58MXx8fHwxNzYyNTE0MzYyfDA&ixlib=rb-4.1.0&q=80&w=1080)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block mb-4 px-4 py-1 bg-red-600/20 border border-red-600/50 rounded-full backdrop-blur-sm"
          >
            <span className="text-red-500">Featured Movie</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-4 text-white"
          >
            The Cinema Experience
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-6 text-gray-300 max-w-xl"
          >
            Experience the ultimate cinematic journey with stunning visuals and captivating storytelling. 
            Join millions of viewers worldwide in this extraordinary adventure.
          </motion.p>

          {/* Meta Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-4 mb-8 text-gray-400"
          >
            <span className="flex items-center gap-1">
              ⭐ <span className="text-white">8.5</span>/10
            </span>
            <span>•</span>
            <span>2024</span>
            <span>•</span>
            <span>2h 15min</span>
            <span>•</span>
            <span className="px-2 py-0.5 border border-gray-600 rounded text-xs">16+</span>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" fill="currentColor" />
              Watch Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/40"
            >
              <Info className="w-5 h-5 mr-2" />
              More Info
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
