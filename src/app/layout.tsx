import './globals.css';
import type { ReactNode } from 'react';
import NavBar from '../components/NavBar';
import CookieConsent from '../components/CookieConsent';
import { UserProvider } from '../components/UserContext';
import { FavoritesProvider } from '../components/FavoritesContext';
import { ModelProvider } from '../components/ModelContext';
import { FiltersProvider } from '../components/FiltersContext';

export const metadata = {
  title: 'AI Archive',
  description: 'Automatic analytical AI archive',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <ModelProvider>
            <FavoritesProvider>
              <FiltersProvider>
                <NavBar />
                <main className="min-h-screen p-4">
                  {children}
                </main>
                <CookieConsent />
              </FiltersProvider>
            </FavoritesProvider>
          </ModelProvider>
        </UserProvider>
      </body>
    </html>
  );
}
