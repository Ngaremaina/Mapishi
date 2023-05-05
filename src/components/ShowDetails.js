import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowDetails = () => {
    const { label } = useParams()
    console.log(label)
    const [recipes, setRecipes] = useState("")
    const {image } = recipes

    useEffect(() => {
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${label}&app_id=4b55aada&app_key=%2062b760835f3546d3d7111edd448b68f9`)
        .then(res => res.json())
        .then(data => {
            console.log(data.hits)
            setRecipes(data.hits)})
      },[label])

    console.log(recipes)
    // recipes.map(recipe => {
    //     console.log(recipe.recipe)
    // })
    
    return(
        <div className="container-fluid text-white">

            <div className="container">
                <div className="row">
                    <div className="col-sm-4 ">
                        <img className="img-fluid" style={{maxHeight:"502px", maxWidth:"450px", float:"left",marginRight:"20px"}} src={image} alt={label}/>                   
                        {/* <Link className="btn btn-info mt-3 mb-4" to={`/editbook/${id}`}>Edit Book</Link>
                        <Button className = "btn btn-danger mt-3 mb-4" style={{float: "right"}}onClick={handleDelete}>Delete Book</Button> */}
                    </div>
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
                </div>
            </div>           
        </div>
    )

}

export default ShowDetails