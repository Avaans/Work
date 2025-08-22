'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export interface FavoriteFolder {
  id: string;
  name: string;
  items: string[];
}

interface FavoritesContextValue {
  folders: FavoriteFolder[];
  addFolder: (name: string) => void;
  addItem: (folderId: string, item: string) => void;
  removeFolder: (folderId: string) => void;
  removeItem: (folderId: string, item: string) => void;
}

const FavoritesContext = createContext<FavoritesContextValue>({
  folders: [],
  addFolder: () => {},
  addItem: () => {},
  removeFolder: () => {},
  removeItem: () => {},
});

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [folders, setFolders] = useState<FavoriteFolder[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) setFolders(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(folders));
  }, [folders]);

  const addFolder = (name: string) => {
    if (!name) return;
    setFolders([...folders, { id: Date.now().toString(), name, items: [] }]);
  };

  const addItem = (folderId: string, item: string) => {
    setFolders(
      folders.map(f =>
        f.id === folderId ? { ...f, items: [...f.items, item] } : f
      )
    );
  };

  const removeFolder = (folderId: string) => {
    setFolders(folders.filter(f => f.id !== folderId));
  };

  const removeItem = (folderId: string, item: string) => {
    setFolders(
      folders.map(f =>
        f.id === folderId
          ? { ...f, items: f.items.filter(i => i !== item) }
          : f
      )
    );
  };

  return (
    <FavoritesContext.Provider value={{ folders, addFolder, addItem, removeFolder, removeItem }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
