import { Grid } from "@mui/material";
import RecipeItem from "../components/RecipeItem";
import { v4 as uuidv4 } from 'uuid';

const Recipes = ({ recipes }) => {
    const displayRecipes = recipes.map((recipe) => {  
        return <RecipeItem 
                    key={uuidv4()} 
                    label = {recipe.recipe.label} 
                    image = {recipe.recipe.image} 
                    dishType = {recipe.recipe.dishType} 
                    icon = {recipe.recipe.images.SMALL.url} 
                    ingredients = {recipe.recipe.ingredientLines} 
                    calories = {recipe.recipe.calories} 
                    source = {recipe.recipe.source}/>
    })
    
    return(
               
        <Grid container className="grid">
            {displayRecipes}
        </Grid>
    
    )

}

export default Recipes