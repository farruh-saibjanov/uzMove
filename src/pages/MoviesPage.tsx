import { MovieCard } from '../components/MovieCard';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const allMovies = [
  { title: 'Shadow Warrior', image: 'https://images.unsplash.com/photo-1762356121454-877acbd554bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NjI1OTEwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.2, year: 2024, genre: 'Action' },
  { title: 'Sci-Fi Odyssey', image: 'https://images.unsplash.com/photo-1590562177087-ca6af9bb82ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZXxlbnwxfHx8fDE3NjI1MTgzODB8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.5, year: 2024, genre: 'Sci-Fi' },
  { title: 'Eternal Love', image: 'https://images.unsplash.com/photo-1761370980993-3ec8c23709fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwZmlsbXxlbnwxfHx8fDE3NjI1NTQ0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.9, year: 2024, genre: 'Romance' },
  { title: 'Dark Dreams', image: 'https://images.unsplash.com/photo-1630338679229-99fb150fbf88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBtb3ZpZSUyMGRhcmt8ZW58MXx8fHwxNzYyNTM3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.7, year: 2024, genre: 'Horror' },
  { title: 'Life Stories', image: 'https://images.unsplash.com/photo-1664249558732-7a779ec1321a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYSUyMGZpbG18ZW58MXx8fHwxNzYyNTIyNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.0, year: 2023, genre: 'Drama' },
  { title: 'Cinema Nights', image: 'https://images.unsplash.com/photo-1606603696914-a0f46d934b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwcG9zdGVyfGVufDF8fHx8MTc2MjYwMjIzMHww&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.8, year: 2024, genre: 'Thriller' },
  { title: 'Comedy Central', image: 'https://images.unsplash.com/photo-1760007416920-7074ed2da3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBtb3ZpZXxlbnwxfHx8fDE3NjI1OTk4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 7.8, year: 2024, genre: 'Comedy' },
  { title: 'Tashkent Nights', image: 'https://images.unsplash.com/photo-1606603696914-a0f46d934b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwcG9zdGVyfGVufDF8fHx8MTc2MjYwMjIzMHww&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.0, year: 2024, genre: 'Drama' },
  { title: 'Silk Road Legacy', image: 'https://images.unsplash.com/photo-1664249558732-7a779ec1321a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYSUyMGZpbG18ZW58MXx8fHwxNzYyNTIyNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.8, year: 2023, genre: 'Historical' },
  { title: 'Samarkand Stories', image: 'https://images.unsplash.com/photo-1761370980993-3ec8c23709fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwZmlsbXxlbnwxfHx8fDE3NjI1NTQ0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.6, year: 2024, genre: 'Romance' },
  { title: 'Mountain Echo', image: 'https://images.unsplash.com/photo-1590562177087-ca6af9bb82ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZXxlbnwxfHx8fDE3NjI1MTgzODB8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.9, year: 2024, genre: 'Adventure' },
  { title: 'Midnight Terror', image: 'https://images.unsplash.com/photo-1630338679229-99fb150fbf88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBtb3ZpZSUyMGRhcmt8ZW58MXx8fHwxNzYyNTM3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080', rating: 7.5, year: 2024, genre: 'Horror' },
];

export function MoviesPage() {
  return (
    <div className="min-h-screen bg-black pt-28 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-white mb-4">All Movies</h1>
          <p className="text-gray-400">Explore our collection of premium movies</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <span className="text-white">Filter by:</span>
          </div>
          
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px] bg-white/5 border-white/10">
              <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genres</SelectItem>
              <SelectItem value="action">Action</SelectItem>
              <SelectItem value="drama">Drama</SelectItem>
              <SelectItem value="comedy">Comedy</SelectItem>
              <SelectItem value="horror">Horror</SelectItem>
              <SelectItem value="romance">Romance</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="newest">
            <SelectTrigger className="w-[150px] bg-white/5 border-white/10">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="title">Title A-Z</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all-years">
            <SelectTrigger className="w-[150px] bg-white/5 border-white/10">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-years">All Years</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {allMovies.map((movie, index) => (
            <div
              key={`${movie.title}-${index}`}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <MovieCard {...movie} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-red-600/30"
          >
            Load More Movies
          </Button>
        </div>
      </div>
    </div>
  );
}
