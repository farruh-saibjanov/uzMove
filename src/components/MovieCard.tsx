import { Play, Plus, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRouter } from './Router';

interface MovieCardProps {
  title: string;
  image: string;
  rating: number;
  year: number;
  genre?: string;
}

export function MovieCard({ title, image, rating, year, genre }: MovieCardProps) {
  const { navigate } = useRouter();

  return (
    <motion.div
      onClick={() => navigate('movie-detail', { title, image, rating, year, genre })}
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-lg overflow-hidden cursor-pointer bg-gradient-to-b from-white/5 to-transparent"
    >
      {/* Movie Poster */}
      <div className="aspect-[2/3] overflow-hidden relative">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
        
        {/* Hover Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white mb-2">{title}</h3>
            
            <div className="flex items-center gap-3 mb-3 text-sm text-gray-300">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                {rating}
              </span>
              <span>•</span>
              <span>{year}</span>
              {genre && (
                <>
                  <span>•</span>
                  <span>{genre}</span>
                </>
              )}
            </div>

            <div className="flex gap-2">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('movie-detail', { title, image, rating, year, genre });
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-purple-600 shadow-lg shadow-red-600/50 transition-all duration-300"
              >
                <Play className="w-5 h-5" fill="currentColor" />
              </motion.button>
              <motion.button
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Plus className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-md flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
          <span className="text-xs text-white">{rating}</span>
        </div>
      </div>
    </motion.div>
  );
}
