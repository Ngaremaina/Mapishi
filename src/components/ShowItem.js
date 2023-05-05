import React from "react";

const ShowItem = ({details, label }) => {
    // const [results, setResults] = useState({})
    let results = {}
    console.log(details)
    console.log(label)

    details.filter(recipe => {
        if (recipe.recipe.label === label){
            // console.log(recipe.recipe)
            results = recipe.recipe
        }
        return results
    })

    console.log(results)

    return (
        <div>
            <img src={results.image} alt={results.label}/>
            <p>{results.label}</p>
            <p>{results.dishType}</p>
        </div>
    )

}

export default ShowItem