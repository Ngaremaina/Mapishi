import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Recipes from './pages/RecipesList';
import ShowDetails from './pages/ShowDetails';
import About from './pages/About';
import { fetchData } from './service/service';
import CirclesWithBarSpinner from './components/Loader';
import { Analytics } from "@vercel/analytics/react"
import Footer from './components/Footer';
import { AlertIcon, SearchIcon } from './components/icons';

function App() {
  const [recipes, setRecipes] = useState([])
  const [searchterm, setSearchterm] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  const query = searchterm?.trim() || "pork";

  useEffect(() => {
    let active = true;

    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchData(query);
        if (active) setRecipes(data.hits ?? []);
      } catch (err) {
        console.error(err);
        if (active) setError(err);
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchRecipes();
    return () => { active = false; };
  }, [query, reloadKey])

  const getSearch = (search) => setSearchterm(search)
  const retry = () => setReloadKey((k) => k + 1)

  let home;
  if (loading) {
    home = <CirclesWithBarSpinner />;
  } else if (error) {
    home = (
      <div className="flex flex-col items-center justify-center gap-4 py-24 text-center text-gray-300">
        <AlertIcon width={48} height={48} className="text-brand-400" />
        <p className="text-lg font-medium text-white">Something went wrong</p>
        <p className="max-w-md text-sm text-gray-400">
          We couldn&apos;t load recipes for &ldquo;{query}&rdquo;. Check your
          connection and try again.
        </p>
        <button
          type="button"
          onClick={retry}
          className="rounded-full bg-brand-500 px-5 py-2 font-medium text-white transition hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        >
          Try again
        </button>
      </div>
    );
  } else if (!recipes.length) {
    home = (
      <div className="flex flex-col items-center justify-center gap-4 py-24 text-center text-gray-300">
        <SearchIcon width={48} height={48} className="text-brand-400" />
        <p className="text-lg font-medium text-white">No recipes found</p>
        <p className="max-w-md text-sm text-gray-400">
          We couldn&apos;t find anything for &ldquo;{query}&rdquo;. Try a
          different dish or ingredient.
        </p>
      </div>
    );
  } else {
    home = <Recipes recipes={recipes} />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Analytics />
      <Header getSearch={getSearch} />
      <main className="mx-auto w-full max-w-7xl flex-1 px-2 sm:px-4">
        <Routes>
          <Route path="/" element={home} />
          <Route path="/:label" element={<ShowDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
