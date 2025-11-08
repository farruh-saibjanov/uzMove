import { HeroSection } from '../components/HeroSection';
import { MoviesCarousel } from '../components/MoviesCarousel';
import { MovieCategories } from '../components/MovieCategories';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MoviesCarousel />
      <MovieCategories />
    </>
  );
}
