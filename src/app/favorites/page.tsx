'use client';
import { useFavorites } from '../../components/FavoritesContext';
import { useState } from 'react';

export default function FavoritesPage() {
  const { folders, addFolder, removeFolder, removeItem } = useFavorites();
  const [name, setName] = useState('');

  return (
    <div>
      <h1 className="text-2xl mb-4">Favorites</h1>
      <div className="mb-4 flex space-x-2">
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New folder name"
        />
        <button
          className="btn-primary"
          onClick={() => {
            addFolder(name);
            setName('');
          }}
        >
          Add Folder
        </button>
      </div>
      <ul className="space-y-2">
        {folders.map((f) => (
          <li key={f.id} className="border p-2 rounded">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{f.name}</div>
              <button
                className="text-xs text-red-600"
                onClick={() => removeFolder(f.id)}
              >
                Delete
              </button>
            </div>
            {f.items.length === 0 ? (
              <p className="text-sm text-gray-500">No items yet</p>
            ) : (
              <ul className="list-disc ml-5 space-y-1">
                {f.items.map((i, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <span>{i}</span>
                    <button
                      className="text-xs text-red-600"
                      onClick={() => removeItem(f.id, i)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
