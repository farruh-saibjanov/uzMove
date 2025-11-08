import { Search, Film } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useRouter } from './Router';

export function Header() {
  const { currentPage, navigate } = useRouter();

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <motion.button 
            onClick={() => navigate('home')}
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Film className="w-8 h-8 text-red-600" />
            <span className="text-2xl bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              UzMove
            </span>
          </motion.button>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink onClick={() => navigate('home')} active={currentPage === 'home'}>
              Home
            </NavLink>
            <NavLink onClick={() => navigate('movies')} active={currentPage === 'movies'}>
              Movies
            </NavLink>
            <NavLink onClick={() => navigate('series')} active={currentPage === 'series'}>
              Series
            </NavLink>
            <NavLink onClick={() => navigate('new')} active={currentPage === 'new'}>
              New
            </NavLink>
            <NavLink onClick={() => navigate('favorites')} active={currentPage === 'favorites'}>
              Favorites
            </NavLink>
          </nav>

          {/* Search and Login */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <button 
              onClick={() => navigate('search')}
              className="hidden sm:flex items-center relative"
            >
              <Search className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
              <Input 
                type="search"
                placeholder="Search movies..."
                className="pl-10 bg-white/5 border-white/10 focus:border-red-600/50 focus:ring-red-600/20 transition-all duration-300 cursor-pointer"
                readOnly
              />
            </button>

            {/* Login Button */}
            <Button 
              onClick={() => navigate('login')}
              className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
            >
              Login
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center gap-4 mt-4 overflow-x-auto">
          <NavLink onClick={() => navigate('home')} active={currentPage === 'home'}>
            Home
          </NavLink>
          <NavLink onClick={() => navigate('movies')} active={currentPage === 'movies'}>
            Movies
          </NavLink>
          <NavLink onClick={() => navigate('series')} active={currentPage === 'series'}>
            Series
          </NavLink>
          <NavLink onClick={() => navigate('new')} active={currentPage === 'new'}>
            New
          </NavLink>
          <NavLink onClick={() => navigate('favorites')} active={currentPage === 'favorites'}>
            Favorites
          </NavLink>
        </nav>
      </div>
    </motion.header>
  );
}

function NavLink({ onClick, children, active = false }: { onClick: () => void; children: React.ReactNode; active?: boolean }) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-2 py-1 transition-colors duration-300 whitespace-nowrap ${
        active ? 'text-white' : 'text-gray-400 hover:text-white'
      }`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeNav"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-purple-600"
        />
      )}
    </motion.button>
  );
}
