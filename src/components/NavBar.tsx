import Link from 'next/link';
import ModelToggle from './ModelToggle';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow">
      <div className="text-lg font-bold">AI Archive</div>
      <div className="flex items-center space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/mission" className="hover:underline">Our Mission</Link>
        <Link href="/add" className="hover:underline">Add to the Archive</Link>
        <Link href="/favorites" className="hover:underline">Favorites</Link>
        <Link href="/auth/login" className="hover:underline">Login</Link>
        <ModelToggle />
      </div>
    </nav>
  );
}
