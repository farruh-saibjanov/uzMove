import { Play, Plus, Share2, Star, Clock, Calendar, User } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { MovieCard } from '../components/MovieCard';
import { Separator } from '../components/ui/separator';

const relatedMovies = [
  { title: 'Cinema Nights', image: 'https://images.unsplash.com/photo-1606603696914-a0f46d934b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwcG9zdGVyfGVufDF8fHx8MTc2MjYwMjIzMHww&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.8, year: 2024, genre: 'Thriller' },
  { title: 'Dark Dreams', image: 'https://images.unsplash.com/photo-1630338679229-99fb150fbf88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBtb3ZpZSUyMGRhcmt8ZW58MXx8fHwxNzYyNTM3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080', rating: 8.7, year: 2024, genre: 'Horror' },
  { title: 'Life Stories', image: 'https://images.unsplash.com/photo-1664249558732-7a779ec1321a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYSUyMGZpbG18ZW58MXx8fHwxNzYyNTIyNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080', rating: 9.0, year: 2023, genre: 'Drama' },
  { title: 'Comedy Central', image: 'https://images.unsplash.com/photo-1760007416920-7074ed2da3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBtb3ZpZXxlbnwxfHx8fDE3NjI1OTk4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080', rating: 7.8, year: 2024, genre: 'Comedy' },
];

export function MovieDetailPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[700px] w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1762356121454-877acbd554bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NjI1OTEwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 h-full flex items-end relative z-10 pb-12">
          <div className="max-w-3xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="bg-red-600 hover:bg-red-700">Featured</Badge>
              <Badge variant="outline" className="border-white/30">2024</Badge>
              <Badge variant="outline" className="border-white/30">16+</Badge>
            </div>

            {/* Title */}
            <h1 className="text-white mb-4">Shadow Warrior</h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-300">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                <span className="text-white">9.2</span>/10
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                2h 15min
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                2024
              </span>
              <span>•</span>
              <span>Action, Thriller</span>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-8 max-w-2xl">
              An elite warrior must confront his past when a mysterious enemy threatens everything he holds dear. 
              Action-packed sequences and stunning cinematography deliver an unforgettable cinematic experience.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" fill="currentColor" />
                Play Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
              >
                <Plus className="w-5 h-5 mr-2" />
                My List
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Cast & Crew */}
          <div className="md:col-span-2">
            <h3 className="text-white mb-4">Cast & Crew</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-purple-600 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white">John Doe</p>
                  <p className="text-gray-400 text-sm">Lead Actor</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-purple-600 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white">Jane Smith</p>
                  <p className="text-gray-400 text-sm">Director</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-white mb-4">Details</h3>
            <div className="space-y-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <div>
                <p className="text-gray-400 text-sm">Genre</p>
                <p className="text-white">Action, Thriller</p>
              </div>
              <Separator className="bg-white/10" />
              <div>
                <p className="text-gray-400 text-sm">Language</p>
                <p className="text-white">English, Uzbek</p>
              </div>
              <Separator className="bg-white/10" />
              <div>
                <p className="text-gray-400 text-sm">Release Date</p>
                <p className="text-white">November 8, 2024</p>
              </div>
              <Separator className="bg-white/10" />
              <div>
                <p className="text-gray-400 text-sm">Country</p>
                <p className="text-white">Uzbekistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Movies */}
        <div>
          <h2 className="text-white mb-6">More Like This</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedMovies.map((movie, index) => (
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
