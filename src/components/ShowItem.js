import React, { useState } from "react";
// import { Button } from "react-bootstrap";

const ShowItem = ({ details, label }) => {
    // const [results, setResults] = useState({})
    // const [ingredients, setIngredients] = useState([])
    let ingredients = []
    // let ingred = []
    let results = {}
    console.log(details)
    console.log(label)

    details.filter(recipe => {
        if (recipe.recipe.label === label){
            // console.log(recipe.recipe)
            results = recipe.recipe
            console.log(recipe.recipe.ingredientLines)
            console.log(recipe.recipe.totalNutrients.CA)
            
            recipe.recipe.ingredients.map(ingredient => {
                console.log(ingredient.text)
                ingredients.push(ingredient.text)
                return ingredients
            })

            // setIngredients(recipe.recipe.ingredients)
            // ingredients = recipe.recipe.ingredients
            // return ingredients
        }
        return results
    })

    console.log(results)
    const displayIngredients = ingredients.map(ing => {
        console.log(ing)
        return <li>{ing}</li>
    })

    return (
        <div>
            <img src={results.image} alt={results.label}/>
            <p>{results.label}</p>
            <p>{results.dishType}</p>
            <p>{results.cautions}</p>
            <p>{results.cuisineType}</p>
            <p>{results.mealType}</p>
            <p>{results.healthLabels}</p>
            {/* <p>{ingred}</p> */}
            {/* <Button className="btn btn-primary"></Button> */}
            {/* {results.ingredients.map(ingredient =>{
                console.log(ingredient.text)
                // return <p>{ingredient.text}</p>
            })} */}
            {/* <p>{results.totalNutrients}</p> */}
            <ul>{displayIngredients}</ul>
            {/* <p>{results.totalTime}</p> */}
            <p>{results.totalWeight}</p>
        </div>
    )

}

export default ShowItem