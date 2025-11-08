import { MovieCard } from '../components/MovieCard';
import { Tv } from 'lucide-react';

const series = [
  { title: 'Epic Adventures', image: 'https://images.unsplash.com/photo-1590562177087-ca6af9bb82ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZXxlbnwxfHx8fDE3NjI1MTgzODB8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.3, year: 2024, genre: 'Sci-Fi' },
  { title: 'Drama Chronicles', image: 'https://images.unsplash.com/photo-1664249558732-7a779ec1321a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYSUyMGZpbG18ZW58MXx8fHwxNzYyNTIyNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.9, year: 2024, genre: 'Drama' },
  { title: 'Mystery Files', image: 'https://images.unsplash.com/photo-1606603696914-a0f46d934b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwcG9zdGVyfGVufDF8fHx8MTc2MjYwMjIzMHww&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.7, year: 2023, genre: 'Mystery' },
  { title: 'Love & Life', image: 'https://images.unsplash.com/photo-1761370980993-3ec8c23709fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwZmlsbXxlbnwxfHx8fDE3NjI1NTQ0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.5, year: 2024, genre: 'Romance' },
  { title: 'Action Heroes', image: 'https://images.unsplash.com/photo-1762356121454-877acbd554bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NjI1OTEwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.1, year: 2024, genre: 'Action' },
  { title: 'Horror Tales', image: 'https://images.unsplash.com/photo-1630338679229-99fb150fbf88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBtb3ZpZSUyMGRhcmt8ZW58MXx8fHwxNzYyNTM3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.4, year: 2024, genre: 'Horror' },
  { title: 'Comedy Club', image: 'https://images.unsplash.com/photo-1760007416920-7074ed2da3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBtb3ZpZXxlbnwxfHx8fDE3NjI1OTk4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.2, year: 2024, genre: 'Comedy' },
  { title: 'Uzbek Stories', image: 'https://images.unsplash.com/photo-1606603696914-a0f46d934b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwcG9zdGVyfGVufDF8fHx8MTc2MjYwMjIzMHww&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.0, year: 2024, genre: 'Drama' },
];

const categories = [
  {
    title: 'Trending Series',
    shows: series.slice(0, 4)
  },
  {
    title: 'Drama Series',
    shows: series.slice(2, 6)
  },
  {
    title: 'Uzbek Series',
    shows: series.slice(4, 8)
  }
];

export function SeriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-28 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-purple-600 flex items-center justify-center shadow-lg shadow-red-600/50">
            <Tv className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-white mb-2">TV Series</h1>
            <p className="text-gray-400">Binge-watch the best series from around the world</p>
          </div>
        </div>

        {/* Series Categories */}
        {categories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-12 md:mb-16">
            <h2 className="mb-6 text-white">{category.title}</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {category.shows.map((show, index) => (
                <div
                  key={`${show.title}-${index}`}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <MovieCard {...show} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
