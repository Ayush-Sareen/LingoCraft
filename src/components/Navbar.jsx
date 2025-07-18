import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-indigo-600">LingoCraft 🌍</h1>
      <div className="space-x-4 text-indigo-700 font-medium">
        <Link to="/" className="hover:text-indigo-900 transition">Translator</Link>
        <Link to="/random" className="hover:text-indigo-900 transition">Random Generator</Link>
      </div>
    </nav>
  );
};

export default Navbar;
