import {useState} from "react";
import { CardContent, Grid } from "@mui/material";
import {Collapse} from "@mui/material";
import {Typography} from "@mui/material";
import { styled } from '@mui/material/styles';
import {ListItem} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const ShowItem = ({ details, label }) => {
  
    const [expandIngredients, setExpandIngredients] = useState(false);
    const [expandHealthLabels, setExpandHealthLabels] = useState(false);
    const [expandNutrients, setExpandNutrients] = useState(false);


  const handleExpandIngredients = () =>{
    setExpandIngredients(!expandIngredients)
  }
  const handleExpandNutrients = () => {
    setExpandNutrients(!expandNutrients)
  }
  const handleExpandLabels = () => {
    setExpandHealthLabels(!expandHealthLabels)
  }
    let ingredients = []
    let nutrients = []
    let healthLabels = []
    let results = {}
   

    details.filter(recipe => {
        if (recipe.recipe.label === label){
            results = recipe.recipe
            results.healthLabels.map(health => {
                healthLabels.push(health)
                return healthLabels
            })

            let dietary = Object.values(results.totalNutrients)

            dietary.map(nutrient => {
                nutrients.push(nutrient)
                return nutrients
            })

            results.ingredients.map(ingredient => {
                ingredients.push(ingredient.text)
                return ingredients
            })

        }
        return results
    })

    const displayNutrients = nutrients.map(nutrient => {
        return <ListItem>{nutrient.label}: {nutrient.quantity} {nutrient.unit}</ListItem>
    })

    const displayHealthLabels = healthLabels.map(healthlabel => {
        return <ListItem>{healthlabel}</ListItem> 
    })

    const displayIngredients = ingredients.map(ing => {
        return <ListItem>{ing}</ListItem>
    })

    return (
            <div className="div-container">
              <Grid container spacing={0.5} className="container">
              <Grid className="image-container">
              <img src={results.image} alt={results.label}  />
              </Grid>
                
                <Grid className="text-container">
                    <h2>{results.label}</h2>
                    <h3>{results.dishType}</h3>  
                    <p>{results.source}</p>            
                    <p>{results.cuisineType} cuisine</p>
                    <h4>{results.calories} Calories</h4>
                    
                    <div className="cards">
                      <Card>
                        <CardContent>
                          <Typography variant="h6" color="text.secondary">Ingredients
                              <ExpandMore expand={expandIngredients} onClick={handleExpandIngredients} aria-expanded={expandIngredients} aria-label="show more" ><ExpandMoreIcon /></ExpandMore>
                          </Typography>
                          <Collapse in={expandIngredients} timeout="auto" unmountOnExit>
                              {displayIngredients}
                          </Collapse>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent>
                          <Typography variant="h6" color="text.secondary">Nutrients
                              <ExpandMore expand={expandNutrients} onClick={handleExpandNutrients} aria-expanded={expandNutrients} aria-label="show details" ><ExpandMoreIcon /></ExpandMore>
                          </Typography>
                          <Collapse in={expandNutrients} timeout="auto" unmountOnExit>
                              {displayNutrients}
                          </Collapse>
                        </CardContent>                        
                      </Card>

                      <Card>
                        <CardContent>
                          <Typography variant="h6" color="text.secondary">Health Labels
                              <ExpandMore expand={expandHealthLabels} onClick={handleExpandLabels} aria-expanded={expandHealthLabels} aria-label="show more" ><ExpandMoreIcon /></ExpandMore>
                          </Typography>
                          <Collapse in={expandHealthLabels} timeout="auto" unmountOnExit>
                              {displayHealthLabels}
                          </Collapse>
                        </CardContent>
                      </Card>
                    </div>

                </Grid>
            </Grid>
            </div>    
          )
    }
export default ShowItem