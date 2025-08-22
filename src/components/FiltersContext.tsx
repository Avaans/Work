'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import type { SearchFilters } from '../lib/search';

const FiltersContext = createContext<{
  filters: SearchFilters;
  setFilters: (f: SearchFilters) => void;
}>({
  filters: {},
  setFilters: () => {},
});

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<SearchFilters>({});
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilters() {
  return useContext(FiltersContext);
}
