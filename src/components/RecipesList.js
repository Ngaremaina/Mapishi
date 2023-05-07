import React, {useState} from "react";
import RecipeItem from "./RecipeItem";
import { Button, Grid } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {TextField, InputAdornment} from "@mui/material";


const Recipes = ({ recipes, getSearch }) => {
    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        getSearch(search)
       
    }
    
    const displayRecipes = recipes.map((recipe) => {  
        return <RecipeItem key={recipe.recipe.yield} label = {recipe.recipe.label} image = {recipe.recipe.image} dishType = {recipe.recipe.dishType} icon = {recipe.recipe.images.SMALL.url} ingredients = {recipe.recipe.ingredientLines} calories = {recipe.recipe.calories} source = {recipe.recipe.source}/>
    })
    
    return(
        <div>
            <form onSubmit = {handleSubmit} className="search-form" >
                <TextField fullWidth color="primary" id="search" type="search" placeholder="Pork" label="Search for a recipe" value={search} onChange={e => setSearch(e.target.value)}
                    InputProps={{ style: { color: 'white' }, endAdornment: ( <InputAdornment position="end"><Button type="submit"><SearchIcon /></Button></InputAdornment>),}}
                    InputLabelProps={{ style: { color: 'white' },  }} />

            </form>
            
            <Grid container className="grid">
                {displayRecipes}
            </Grid>

        </div>
       
    )

}

export default Recipes