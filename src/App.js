import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/RecipesList';
import { Routes, Route } from 'react-router-dom';
import ShowDetails from './components/ShowDetails';

function App() {
  const [recipes, setRecipes] =  useState([])
  const [searchterm, setSearchterm] = useState("")


  useEffect(() => {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchterm}&app_id=4b55aada&app_key=%2062b760835f3546d3d7111edd448b68f9`)
    .then(resp => resp.json())
    .then(data => setRecipes(data.hits))
  },[searchterm])


  const getSearch = (search) => {
    return setSearchterm(search)
  }


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element = { <Recipes recipes={recipes} getSearch = {getSearch}/> }/>
        <Route path="/:label" element= { <ShowDetails />}/>
      </Routes>  
    </div>
  );
}

export default App;
