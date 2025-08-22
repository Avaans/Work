'use client';
import { useModel } from './ModelContext';
import { useUser } from './UserContext';

export default function ModelToggle() {
  const { model, setModel } = useModel();
  const { role } = useUser();

  if (role !== 'editor' && role !== 'admin') return null;

  return (
    <div className="text-sm space-x-2">
      <span>Model:</span>
      <select
        value={model}
        onChange={(e) => setModel(e.target.value as typeof model)}
        className="border p-1 rounded"
      >
        <option value="local">Local</option>
        <option value="cloud">Cloud</option>
      </select>
    </div>
  );
}
