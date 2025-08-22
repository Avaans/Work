'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

export type ModelType = 'local' | 'cloud';
interface ModelContextValue {
  model: ModelType;
  setModel: (m: ModelType) => void;
}
const ModelContext = createContext<ModelContextValue>({
  model: 'local',
  setModel: () => {},
});

export function ModelProvider({ children }: { children: ReactNode }) {
  const [model, setModel] = useState<ModelType>('local');
  return (
    <ModelContext.Provider value={{ model, setModel }}>
      {children}
    </ModelContext.Provider>
  );
}

export function useModel() {
  return useContext(ModelContext);
}
