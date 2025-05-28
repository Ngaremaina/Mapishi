import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Recipes from './pages/RecipesList';
import ShowDetails from './pages/ShowDetails';
import About from './pages/About';
import { fetchData } from './service/service';
import CirclesWithBarSpinner from './components/Loader';
import './App.css'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [recipes, setRecipes] =  useState([])
  const [searchterm, setSearchterm] = useState("")
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const query = searchterm?.trim() || "pork";

    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const data = await fetchData(query);
        setRecipes(data.hits);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [searchterm]);

  const getSearch = (search) => {
    return setSearchterm(search)
  }

  return (
     <>
      {loading ? (
        <CirclesWithBarSpinner />
      ) : (
        <>
        <Analytics/>
          <Header getSearch={getSearch} />
          <Routes>
            <Route path="/" element={<Recipes recipes={recipes} />} />
            <Route path="/:label" element={<ShowDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </>
      )}
    </>
  )
}

export default App
