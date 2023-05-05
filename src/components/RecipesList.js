import React from "react";
import RecipeItem from "./RecipeItem";

const Recipes = ({recipes}) => {
    // console.log(recipes)
    const displayRecipes = recipes.map((recipe) => {
        // console.log(recipe)
        console.log(recipe.recipe.label)
        return <RecipeItem key={recipe.recipe.yield} label = {recipe.recipe.label} image = {recipe.recipe.image} dishType = {recipe.recipe.dishType}/>
       
    })
    

    return(
        <div className="card-deck col d-flex justify-content-center">
            {displayRecipes}
        </div>
    )

}

export default Recipes