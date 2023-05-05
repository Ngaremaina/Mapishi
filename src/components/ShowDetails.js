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

    // console.log(recipes)
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

           {/* {showDetails} */}
           <ShowItem details = {recipes} label = {label}/>

            {/* <div className="container">
                <div className="row">
                    <div className="col-sm-4 ">
                        <img className="img-fluid" style={{maxHeight:"502px", maxWidth:"450px", float:"left",marginRight:"20px"}} alt={label}/>  
                        <p>{label}</p>                 
                    
                    </div> */}
                    
                    {/* <div className="col-sm-8 border border-dark rounded mb-5" >
                        <p style={{marginTop:"20px"}}>{title}</p>
                        <p>{subtitle}</p>
                        <p>by {author}</p>
                        <p>Kshs. {price}</p>
                        <p>Available copies: {quantity - sold}</p>
                        <p>Description</p>
                        <p>{description}</p>
                        <p>Publish Date: {published}</p>
                        <p>Publisher: {publisher}</p>
                        <p>{pages} pages </p>
                        
                        <Button type="button" className="btn btn-primary mt-4" style={{width:"100%", marginBottom:"30px"}}>Add To Cart</Button>

                    </div> 
                    */}
                {/* </div>
            </div>            */}
        </div>
    )

}

export default ShowDetails