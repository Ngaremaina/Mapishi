import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowItem from "./ShowItem";
import { fetchData } from "./service";

const ShowDetails = () => {
    const { label } = useParams()
    const [recipes, setRecipes] = useState([])
   
    useEffect(() => {
        fetchData(label)
        .then(data => setRecipes(data.hits))
      },[label])

    return(
        <div className="container-fluid">
           <ShowItem details = {recipes} label = {label}/>       
        </div>
    )

}

export default ShowDetails