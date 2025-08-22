'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Role = 'user' | 'editor' | 'admin';
interface UserContextValue { role: Role }
const UserContext = createContext<UserContextValue>({ role: 'user' });

export function UserProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>('user');

  useEffect(() => {
    const stored = localStorage.getItem('role');
    if (stored === 'editor' || stored === 'admin') {
      setRole(stored);
    }
  }, []);

  return (
    <UserContext.Provider value={{ role }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
