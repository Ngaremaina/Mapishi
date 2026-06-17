import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SearchIcon, MenuIcon, LogoIcon } from './icons';

export default function Header({ getSearch }) {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearch(search);
  };

  const navClass = ({ isActive }) =>
    `rounded-md px-3 py-1.5 text-sm font-medium no-underline transition ${
      isActive ? "text-brand-400" : "text-gray-200 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/70 text-white backdrop-blur">
      <div className="relative mx-auto flex max-w-7xl items-center gap-2 px-4 py-3">

        {/* Mobile menu button - xs only */}
        <div className="flex sm:hidden">
          <button
            type="button"
            aria-label="menu"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-full p-2 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            <MenuIcon />
          </button>

          {menuOpen && (
            <div className="absolute left-2 top-14 z-10 flex w-40 flex-col overflow-hidden rounded-lg bg-white py-1 text-black shadow-xl">
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 hover:bg-gray-100"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 hover:bg-gray-100"
              >
                About
              </NavLink>
            </div>
          )}
        </div>

        {/* Brand */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white no-underline transition hover:text-brand-400"
        >
          <LogoIcon width={26} height={26} className="text-brand-400" />
          Mapishi
        </NavLink>

        {/* Desktop nav - sm and up */}
        <nav className="ml-2 hidden flex-1 items-center gap-1 sm:flex">
          <NavLink className={navClass} to="/">
            Home
          </NavLink>
          <NavLink className={navClass} to="/about">
            About
          </NavLink>
        </nav>

        {/* Search form */}
        <form onSubmit={handleSubmit} className="ml-auto">
          <div className="relative rounded-full bg-white/10 ring-1 ring-white/15 transition focus-within:bg-white/15 focus-within:ring-brand-400 hover:bg-white/15">
            <button
              type="submit"
              aria-label="search"
              className="absolute inset-y-0 left-0 flex items-center justify-center px-3 text-white/80 transition hover:text-white"
            >
              <SearchIcon width={20} height={20} />
            </button>
            <input
              type="text"
              placeholder="Search…"
              aria-label="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent py-2 pl-11 pr-4 text-white placeholder-white/60 outline-none sm:w-48 sm:focus:w-64"
            />
          </div>
        </form>

      </div>
    </header>
  );
}
