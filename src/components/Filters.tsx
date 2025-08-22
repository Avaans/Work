'use client';
import { useState, useEffect } from 'react';
import { useFilters } from './FiltersContext';

const geoData: Record<string, Record<string, string[]>> = {
  Asia: {
    Mongolia: ['Central Mongolia', 'Gobi'],
    China: ['Beijing', 'Xinjiang'],
  },
  Europe: {
    UK: ['England', 'Scotland'],
    France: ['Île-de-France', 'Brittany'],
  },
};

export default function Filters() {
  const [start, setStart] = useState(-500);
  const [end, setEnd] = useState(2025);
  const [continent, setContinent] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [language, setLanguage] = useState('');
  const [script, setScript] = useState('');
  const [itemType, setItemType] = useState('');
  const [institute, setInstitute] = useState('');
  const [datingMethod, setDatingMethod] = useState('CE');

  const { setFilters } = useFilters();

  useEffect(() => {
    setFilters({
      region,
      language: language || undefined,
      script: script || undefined,
      itemType: itemType || undefined,
      institute: institute || undefined,
      datingMethod: datingMethod || undefined,
      start,
      end,
    });
  }, [region, language, script, itemType, institute, datingMethod, start, end, setFilters]);

  const countries = continent ? Object.keys(geoData[continent]) : [];
  const regions = continent && country ? geoData[continent][country] : [];

  return (
    <form className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div>
        <label className="block text-sm">Continent</label>
        <select
          className="w-full border p-2 rounded"
          value={continent}
          onChange={(e) => {
            setContinent(e.target.value);
            setCountry('');
            setRegion('');
          }}
        >
          <option value="">Any</option>
          {Object.keys(geoData).map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm">Country</label>
        <select
          className="w-full border p-2 rounded"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setRegion('');
          }}
          disabled={!continent}
        >
          <option value="">Any</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm">Region</label>
        <select
          className="w-full border p-2 rounded"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          disabled={!country}
        >
          <option value="">Any</option>
          {regions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm">Language</label>
        <input
          className="w-full border p-2 rounded"
          placeholder="Any"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm">Script</label>
        <input
          className="w-full border p-2 rounded"
          placeholder="Any"
          value={script}
          onChange={(e) => setScript(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm">Item Type</label>
        <input
          className="w-full border p-2 rounded"
          placeholder="Any"
          value={itemType}
          onChange={(e) => setItemType(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm">Holding Institute</label>
        <input
          className="w-full border p-2 rounded"
          placeholder="Any"
          value={institute}
          onChange={(e) => setInstitute(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm">Dating Method</label>
        <select
          className="w-full border p-2 rounded"
          value={datingMethod}
          onChange={(e) => setDatingMethod(e.target.value)}
        >
          <option value="CE">CE</option>
          <option value="BCE">BCE</option>
          <option value="AH">AH</option>
        </select>
      </div>
      <div className="col-span-full">
        <label className="block text-sm">Time Range</label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={start}
            onChange={(e) => setStart(parseInt(e.target.value))}
            className="w-full border p-2 rounded"
          />
          <span>-</span>
          <input
            type="number"
            value={end}
            onChange={(e) => setEnd(parseInt(e.target.value))}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>
    </form>
  );
}
