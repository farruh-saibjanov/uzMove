import { MovieCard } from '../components/MovieCard';
import { Sparkles, Calendar } from 'lucide-react';
import { Badge } from '../components/ui/badge';

const newReleases = [
  { title: 'Shadow Warrior', image: 'https://images.unsplash.com/photo-1762356121454-877acbd554bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NjI1OTEwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.2, year: 2024, genre: 'Action' },
  { title: 'Sci-Fi Odyssey', image: 'https://images.unsplash.com/photo-1590562177087-ca6af9bb82ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZXxlbnwxfHx8fDE3NjI1MTgzODB8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.5, year: 2024, genre: 'Sci-Fi' },
  { title: 'Eternal Love', image: 'https://images.unsplash.com/photo-1761370980993-3ec8c23709fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwZmlsbXxlbnwxfHx8fDE3NjI1NTQ0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.9, year: 2024, genre: 'Romance' },
  { title: 'Tashkent Nights', image: 'https://images.unsplash.com/photo-1606603696914-a0f46d934b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwcG9zdGVyfGVufDF8fHx8MTc2MjYwMjIzMHww&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.0, year: 2024, genre: 'Drama' },
  { title: 'Comedy Central', image: 'https://images.unsplash.com/photo-1760007416920-7074ed2da3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBtb3ZpZXxlbnwxfHx8fDE3NjI1OTk4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 7.8, year: 2024, genre: 'Comedy' },
  { title: 'Dark Dreams', image: 'https://images.unsplash.com/photo-1630338679229-99fb150fbf88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBtb3ZpZSUyMGRhcmt8ZW58MXx8fHwxNzYyNTM3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.7, year: 2024, genre: 'Horror' },
];

const comingSoon = [
  { title: 'Mountain Echo', image: 'https://images.unsplash.com/photo-1590562177087-ca6af9bb82ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZXxlbnwxfHx8fDE3NjI1MTgzODB8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.9, year: 2024, genre: 'Adventure' },
  { title: 'Silk Road Legacy', image: 'https://images.unsplash.com/photo-1664249558732-7a779ec1321a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYSUyMGZpbG18ZW58MXx8fHwxNzYyNTIyNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.8, year: 2024, genre: 'Historical' },
  { title: 'Samarkand Stories', image: 'https://images.unsplash.com/photo-1761370980993-3ec8c23709fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwZmlsbXxlbnwxfHx8fDE3NjI1NTQ0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.6, year: 2024, genre: 'Romance' },
  { title: 'Cinema Nights', image: 'https://images.unsplash.com/photo-1606603696914-a0f46d934b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwcG9zdGVyfGVufDF8fHx8MTc2MjYwMjIzMHww&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.8, year: 2024, genre: 'Thriller' },
];

export function NewReleasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-purple-600 flex items-center justify-center shadow-lg shadow-red-600/50">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-white mb-2">New Releases</h1>
            <p className="text-gray-400">Fresh content added this month</p>
          </div>
        </div>

        {/* This Week Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-white">This Week</h2>
            <Badge className="bg-red-600 hover:bg-red-700">NEW</Badge>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {newReleases.map((movie, index) => (
              <div
                key={`${movie.title}-${index}`}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MovieCard {...movie} />
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-white">Coming Soon</h2>
            <Calendar className="w-6 h-6 text-purple-500" />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {comingSoon.map((movie, index) => (
              <div
                key={`${movie.title}-${index}`}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MovieCard {...movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
