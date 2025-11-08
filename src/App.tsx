import { Router, useRouter } from './components/Router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { MoviesPage } from './pages/MoviesPage';
import { SeriesPage } from './pages/SeriesPage';
import { NewReleasesPage } from './pages/NewReleasesPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { MovieDetailPage } from './pages/MovieDetailPage';
import { LoginPage } from './pages/LoginPage';
import { SearchResultsPage } from './pages/SearchResultsPage';

function AppContent() {
  const { currentPage } = useRouter();

  // Login page has its own layout
  if (currentPage === 'login') {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-20">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'movies' && <MoviesPage />}
        {currentPage === 'series' && <SeriesPage />}
        {currentPage === 'new' && <NewReleasesPage />}
        {currentPage === 'favorites' && <FavoritesPage />}
        {currentPage === 'movie-detail' && <MovieDetailPage />}
        {currentPage === 'search' && <SearchResultsPage />}
      </main>
      
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
