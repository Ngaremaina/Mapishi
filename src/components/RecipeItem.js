import React from "react";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

const RecipeItem = ({ label, dishType, image }) => {
    return (
        <Card className ="text-white border-dark bg-dark d-flex flex-column" style={{width :"15rem", margin: "5px"}}>
            <img className =  "card-img-top" src={image} alt={label}/>
            <div className="card-body">
                <h5 className="card-title">{label}</h5>
                <p className="card-text"><small> {dishType}</small></p>
                {/* <p className="card-text">Kshs. {price}</p> */}
               
                <Link className="btn btn-success mb-4 " to={`/${label}`}>Show More</Link>
                <div className="card-footer mt-6">
                    <div>
                    <Button type="button" style={{width: "90%"}} className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-2">Add To Cart</Button>
                    </div>                  
                </div>             
            </div>       
        </Card>  
    )
}

export default RecipeItem