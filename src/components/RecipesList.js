import React from "react";
import RecipeItem from "./RecipeItem";
import { Grid } from "@mui/material";

const Recipes = ({recipes}) => {
    
    const displayRecipes = recipes.map((recipe) => {
       
        return <RecipeItem key={recipe.recipe.yield} label = {recipe.recipe.label} image = {recipe.recipe.image} dishType = {recipe.recipe.dishType} icon = {recipe.recipe.images.SMALL.url} ingredients = {recipe.recipe.ingredientLines} calories = {recipe.recipe.calories} source = {recipe.recipe.source}/>
       
    })
    
    return(
        <Grid container className="grid">
            {displayRecipes}
        </Grid>
    )

}

export default Recipes