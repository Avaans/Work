'use client';
import { useState } from 'react';
import { semanticSearch, SearchResult } from '../lib/search';
import { useModel } from './ModelContext';
import { useFilters } from './FiltersContext';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [smart, setSmart] = useState(true);
  const [results, setResults] = useState<SearchResult[]>([]);
  const { model } = useModel();
  const { filters } = useFilters();

  const handleSearch = async () => {
    if (!query) return;
    const res = smart
      ? await semanticSearch(query, filters, model)
      : [];
    setResults(res);
  };

  return (
    <div className="space-y-2">
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Search manuscripts..."
          className="w-full p-2 border rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="btn-primary">Go</button>
      </div>
      <label className="flex items-center space-x-2 text-sm">
        <input
          type="checkbox"
          checked={smart}
          onChange={() => setSmart(!smart)}
        />
        <span>AI smart search</span>
      </label>
      <ul className="space-y-1">
        {results.map(r => (
          <li key={r.id} className="border p-2 rounded">
            <div className="font-semibold">{r.title}</div>
            <div className="text-sm text-gray-600">{r.snippet}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
