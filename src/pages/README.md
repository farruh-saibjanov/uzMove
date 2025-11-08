# UzMove Pages

This directory contains all page components for the UzMove streaming platform.

## Pages Overview

- **HomePage.tsx** - Landing page with hero section, carousel, and movie categories
- **MoviesPage.tsx** - Browse all movies with filters and sorting
- **SeriesPage.tsx** - TV series and show listings
- **NewReleasesPage.tsx** - Latest releases and coming soon content
- **FavoritesPage.tsx** - User's saved favorites list
- **MovieDetailPage.tsx** - Individual movie/show detail page
- **LoginPage.tsx** - Authentication (login/signup)
- **SearchResultsPage.tsx** - Search results display

## Navigation

Navigation is handled through the Router component (`/components/Router.tsx`).
All pages use the `useRouter()` hook to access navigation functionality.
