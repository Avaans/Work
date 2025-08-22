import SearchBar from '@/components/SearchBar';
import Filters from '@/components/Filters';

export default function Home() {
  return (
    <div className="space-y-6">
      <SearchBar />
      <Filters />
    </div>
  );
}
