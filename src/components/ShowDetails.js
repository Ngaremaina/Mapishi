import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowItem from "./ShowItem";

const ShowDetails = () => {
    const { label } = useParams()
    console.log(label)
    const [recipes, setRecipes] = useState([])
    // const [results, setResults] = useState({})
   
    useEffect(() => {
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${label}&app_id=4b55aada&app_key=%2062b760835f3546d3d7111edd448b68f9`)
        .then(res => res.json())
        .then(data => {
            console.log(data.hits)
            setRecipes(data.hits)})
      },[label])

    console.log(recipes)
    // console.log(recipes.recipe)

    
    // const showDetails = recipes.filter(recipe => {
    //     // console.log(recipe.recipe.label)
    //     if (recipe.recipe.label === label){
    //         console.log(recipe.recipe)
    //         setResults(recipe.recipe)

    //         return <ShowItem details={results} />
    //         // let results = Object.entries(recipe.recipe)
    //         // console.log(results)
    //         // console.log(results[])
    //         // return <p>{recipe.recipe.dishType}</p>
    //         // return <ShowItem details = {recipe.recipe} />
    //     }
    // })
    
    // console.log(results)
    return(
        <div className="container-fluid">
           <ShowItem details = {recipes} label = {label}/>
           
        </div>
    )

}

export default ShowDetails