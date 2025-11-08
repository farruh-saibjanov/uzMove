import { MovieCard } from './MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useMotionValue } from 'motion/react';
import { useRef, useState } from 'react';

const trendingMovies = [
  { title: 'Shadow Warrior', image: 'https://images.unsplash.com/photo-1762356121454-877acbd554bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NjI1OTEwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.2, year: 2024, genre: 'Action' },
  { title: 'Sci-Fi Odyssey', image: 'https://images.unsplash.com/photo-1590562177087-ca6af9bb82ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZXxlbnwxfHx8fDE3NjI1MTgzODB8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.5, year: 2024, genre: 'Sci-Fi' },
  { title: 'Eternal Love', image: 'https://images.unsplash.com/photo-1761370980993-3ec8c23709fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwZmlsbXxlbnwxfHx8fDE3NjI1NTQ0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.9, year: 2024, genre: 'Romance' },
  { title: 'Dark Dreams', image: 'https://images.unsplash.com/photo-1630338679229-99fb150fbf88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBtb3ZpZSUyMGRhcmt8ZW58MXx8fHwxNzYyNTM3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.7, year: 2024, genre: 'Horror' },
  { title: 'Life Stories', image: 'https://images.unsplash.com/photo-1664249558732-7a779ec1321a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYSUyMGZpbG18ZW58MXx8fHwxNzYyNTIyNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.0, year: 2023, genre: 'Drama' },
  { title: 'Cinema Nights', image: 'https://images.unsplash.com/photo-1606603696914-a0f46d934b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwcG9zdGVyfGVufDF8fHx8MTc2MjYwMjIzMHww&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.8, year: 2024, genre: 'Thriller' },
  { title: 'Comedy Central', image: 'https://images.unsplash.com/photo-1760007416920-7074ed2da3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBtb3ZpZXxlbnwxfHx8fDE3NjI1OTk4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 7.8, year: 2024, genre: 'Comedy' },
  { title: 'Tashkent Nights', image: 'https://images.unsplash.com/photo-1606603696914-a0f46d934b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwcG9zdGVyfGVufDF8fHx8MTc2MjYwMjIzMHww&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.0, year: 2024, genre: 'Drama' },
];

export function MoviesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      
      setTimeout(checkScroll, 100);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-white mb-2">Top Movies This Week</h2>
          <p className="text-gray-400">Trending now on UzMove</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Previous Button */}
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-purple-600 shadow-lg shadow-red-600/50 items-center justify-center hover:shadow-red-600/70 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>
          )}

          {/* Next Button */}
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('right')}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-purple-600 shadow-lg shadow-red-600/50 items-center justify-center hover:shadow-red-600/70 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          )}

          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {trendingMovies.map((movie, index) => (
              <motion.div
                key={`${movie.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex-shrink-0 w-[45%] sm:w-[30%] md:w-[23%] lg:w-[18%] snap-start"
              >
                <MovieCard {...movie} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
