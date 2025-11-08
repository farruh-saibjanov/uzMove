import { MovieCard } from '../components/MovieCard';
import { Search, X } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { useState } from 'react';

const searchResults = [
  { title: 'Shadow Warrior', image: 'https://images.unsplash.com/photo-1762356121454-877acbd554bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NjI1OTEwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.2, year: 2024, genre: 'Action' },
  { title: 'Sci-Fi Odyssey', image: 'https://images.unsplash.com/photo-1590562177087-ca6af9bb82ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZXxlbnwxfHx8fDE3NjI1MTgzODB8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.5, year: 2024, genre: 'Sci-Fi' },
  { title: 'Cinema Nights', image: 'https://images.unsplash.com/photo-1606603696914-a0f46d934b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwcG9zdGVyfGVufDF8fHx8MTc2MjYwMjIzMHww&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.8, year: 2024, genre: 'Thriller' },
];

export function SearchResultsPage() {
  const [searchQuery, setSearchQuery] = useState('action');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-12">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for movies, series, or genres..."
              className="pl-12 pr-12 h-14 bg-white/5 border-white/10 focus:border-red-600/50 focus:ring-red-600/20 text-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Results Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-white">
              Search Results for "{searchQuery}"
            </h2>
            <Badge className="bg-red-600 hover:bg-red-700">
              {searchResults.length} Results
            </Badge>
          </div>
          <p className="text-gray-400">
            Showing {searchResults.length} movies and series
          </p>
        </div>

        {/* Results Grid */}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {searchResults.map((movie, index) => (
              <div
                key={`${movie.title}-${index}`}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MovieCard {...movie} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <Search className="w-20 h-20 text-gray-600 mb-4" />
            <h3 className="text-white mb-2">No results found</h3>
            <p className="text-gray-400 mb-6">Try searching with different keywords</p>
          </div>
        )}

        {/* Popular Searches */}
        <div className="mt-16">
          <h3 className="text-white mb-4">Popular Searches</h3>
          <div className="flex flex-wrap gap-2">
            {['Action', 'Drama', 'Comedy', 'Thriller', 'Romance', 'Horror', 'Sci-Fi', 'Uzbek Films'].map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="cursor-pointer border-white/20 hover:border-red-600 hover:bg-red-600/10 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
