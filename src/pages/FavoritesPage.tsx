import { MovieCard } from '../components/MovieCard';
import { Heart, Trash2 } from 'lucide-react';
import { Button } from '../components/ui/button';

const favorites = [
  { title: 'Shadow Warrior', image: 'https://images.unsplash.com/photo-1762356121454-877acbd554bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NjI1OTEwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.2, year: 2024, genre: 'Action' },
  { title: 'Sci-Fi Odyssey', image: 'https://images.unsplash.com/photo-1590562177087-ca6af9bb82ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZXxlbnwxfHx8fDE3NjI1MTgzODB8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.5, year: 2024, genre: 'Sci-Fi' },
  { title: 'Tashkent Nights', image: 'https://images.unsplash.com/photo-1606603696914-a0f46d934b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwcG9zdGVyfGVufDF8fHx8MTc2MjYwMjIzMHww&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.0, year: 2024, genre: 'Drama' },
  { title: 'Eternal Love', image: 'https://images.unsplash.com/photo-1761370980993-3ec8c23709fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwZmlsbXxlbnwxfHx8fDE3NjI1NTQ0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.9, year: 2024, genre: 'Romance' },
];

export function FavoritesPage() {
  return (
    <div className="min-h-screen bg-black pt-28 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-purple-600 flex items-center justify-center shadow-lg shadow-red-600/50">
              <Heart className="w-8 h-8 text-white fill-white" />
            </div>
            <div>
              <h1 className="text-white mb-2">My Favorites</h1>
              <p className="text-gray-400">{favorites.length} movies and series saved</p>
            </div>
          </div>

          {favorites.length > 0 && (
            <Button
              variant="outline"
              className="border-red-600/50 text-red-500 hover:bg-red-600/10 hover:text-red-400"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          )}
        </div>

        {/* Favorites Grid */}
        {favorites.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {favorites.map((movie, index) => (
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
            <Heart className="w-20 h-20 text-gray-600 mb-4" />
            <h3 className="text-white mb-2">No favorites yet</h3>
            <p className="text-gray-400 mb-6">Start adding movies and series to your favorites</p>
            <Button className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700">
              Browse Movies
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
