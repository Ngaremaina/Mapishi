import { Grid } from "@mui/material";
import RecipeItem from "../components/RecipeItem";
import { v4 as uuidv4 } from 'uuid';

const Recipes = ({ recipes }) => {
    const displayRecipes = recipes?.map((recipe) => {  
        return  <Grid
                    item
                    xs={12}       
                    sm={6}        
                    md={4}        
                    lg={3}        
                    ><RecipeItem 
                        key={uuidv4()} 
                        label = {recipe.recipe.label} 
                        image = {recipe.recipe.image} 
                        dishType = {recipe.recipe.dishType} 
                        icon = {recipe.recipe.images.SMALL.url} 
                        ingredients = {recipe.recipe.ingredientLines} 
                        calories = {recipe.recipe.calories} 
                        source = {recipe.recipe.source}/></Grid>
    })
    
    return(
        <div className="display-container">
            <Grid container spacing={1} justifyContent="center">
                {displayRecipes}
            </Grid>
        </div>   
    
    )

}

export default Recipes