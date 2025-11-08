import { createContext, useContext, useState, ReactNode } from 'react';

type Page = 'home' | 'movies' | 'series' | 'new' | 'favorites' | 'login' | 'movie-detail' | 'search';

interface RouterContextType {
  currentPage: Page;
  navigate: (page: Page, data?: any) => void;
  pageData: any;
}

const RouterContext = createContext<RouterContextType | null>(null);

export function Router({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [pageData, setPageData] = useState<any>(null);

  const navigate = (page: Page, data?: any) => {
    setCurrentPage(page);
    setPageData(data || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigate, pageData }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a Router');
  }
  return context;
}
