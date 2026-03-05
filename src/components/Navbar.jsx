import { Clapperboard, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();
  // handle input change
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const query = search.trim();
    if (!query) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
    setSearch('');
  };

  return (
    <nav className="flex px-6 py-4 items-center justify-between shadow-sm">
      {/* logo */}
      <div className=" flex gap-2 justify-center items-center">
        <Link className="flex items-center gap-1.5" href="/">
          <Clapperboard />
          <h2 className="text-lg md:text-2xl font-bold">iMovie</h2>
        </Link>
      </div>

      {/* search */}
      <form className="hidden md:flex" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search title here.."
          className="border border-gray-400 rounded-xl px-6 py-1 focus:outline-none focus:ring-2 focus:ring-black/20"
          value={search}
          onChange={handleChange}
        />
      </form>

      {/* menu */}
      <div className=" hidden md:flex gap-4 font-semibold">
        <Link to="/" className="hover:scale-90 hover:text-gray-500 ">
          Movies
        </Link>
        <Link to="#" className="hover:scale-90 hover:text-gray-300">
          Genre
        </Link>
        <Link to="/trending" className="hover:scale-90 hover:text-gray-300">
          Trending
        </Link>
        <Link to="/favorites" className="hover:scale-90 hover:text-gray-300">
          Favorite
        </Link>
      </div>
      <button onClick={() => setMenuOpen((v) => !v)} className="md:hidden">
        <Menu />
      </button>

      {/* drop down menu */}
      <div
        className={`absolute left-0 py-4 px-6 right-0 top-12 z-50 mt-2 bg-white/86 backdrop-blur-md transform transition-all duration-300 ease-in-out  shadow-lg 
          ${
            menuOpen
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
          }`}
      >
        <div className="flex flex-col pb-2 text-md">
          <Link to="#">Genre</Link>
          <Link to="#">Trending</Link>
          <Link to="/favorites">Favorite</Link>
        </div>
        <form
          className="flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search title here.."
            className="border w-full border-gray-400 rounded-xl px-6 py-1 focus:outline-none focus:ring-2 focus:ring-black/20"
            value={search}
            onChange={handleChange}
          />
        </form>
      </div>
    </nav>
  );
};
