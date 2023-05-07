import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowItem from "./ShowItem";

const ShowDetails = () => {
    const { label } = useParams()
    const [recipes, setRecipes] = useState([])
   
    useEffect(() => {
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${label}&app_id=4b55aada&app_key=%2062b760835f3546d3d7111edd448b68f9`)
        .then(res => res.json())
        .then(data => {
            console.log(data.hits)
            setRecipes(data.hits)})
      },[label])

    return(
        <div className="container-fluid">
           <ShowItem details = {recipes} label = {label}/>       
        </div>
    )

}

export default ShowDetails