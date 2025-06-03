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
   

    details?.filter(recipe => {
        if (recipe.recipe.label === label){
            results = recipe.recipe
            results.healthLabels?.map(health => {
                healthLabels.push(health)
                return healthLabels
            })

            let dietary = Object.values(results.totalNutrients)

            dietary?.map(nutrient => {
                nutrients.push(nutrient)
                return nutrients
            })

            results.ingredients?.map(ingredient => {
                ingredients.push(ingredient.text)
                return ingredients
            })

        }
        return results
    })

    const displayNutrients = nutrients?.map(nutrient => {
        return <ListItem>{nutrient.label}: {nutrient.quantity} {nutrient.unit}</ListItem>
    })

    const displayHealthLabels = healthLabels?.map(healthlabel => {
        return <ListItem>{healthlabel}</ListItem> 
    })

    const displayIngredients = ingredients?.map(ing => {
        return <ListItem>{ing}</ListItem>
    })

    return (
            <Grid container spacing={2} padding={2}>
              {/* Image Section */}
              <Grid item xs={12} md={5}>
                <img
                  src={results.image}
                  alt={results.label}
                  className="responsive-image"
                  style={{ width: "100%", height: "auto", borderRadius: "8px", maxHeight: "400px" }}
                />
              </Grid>

              {/* Text Section */}
              <Grid item xs={12} md={7}>
                <Typography variant="h4" gutterBottom style={{ color: 'white' }}>{results.label}</Typography>
                <Typography variant="h6" style={{ color: 'white' }}>{results.dishType}</Typography>
                <Typography variant="body1" gutterBottom style={{ color: 'white' }}>{results.source}</Typography>
                <Typography variant="body2" gutterBottom style={{ color: 'white' }}>
                  {results.cuisineType} cuisine
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  {results.calories} Calories
                </Typography>
              </Grid>

              {/* Cards Section */}
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {/* Ingredients */}
                  <Grid item xs={12} md={4}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" color="text.secondary">
                          Ingredients
                          <IconButton
                            onClick={handleExpandIngredients}
                            aria-expanded={expandIngredients}
                            aria-label="show more"
                          >
                            <ExpandMoreIcon />
                          </IconButton>
                        </Typography>
                        <Collapse in={expandIngredients} timeout="auto" unmountOnExit>
                          {displayIngredients}
                        </Collapse>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* Nutrients */}
                  <Grid item xs={12} md={4}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" color="text.secondary">
                          Nutrients
                          <IconButton
                            onClick={handleExpandNutrients}
                            aria-expanded={expandNutrients}
                            aria-label="show more"
                          >
                            <ExpandMoreIcon />
                          </IconButton>
                        </Typography>
                        <Collapse in={expandNutrients} timeout="auto" unmountOnExit>
                          {displayNutrients}
                        </Collapse>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* Health Labels */}
                  <Grid item xs={12} md={4}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" color="text.secondary">
                          Health Labels
                          <IconButton
                            onClick={handleExpandLabels}
                            aria-expanded={expandHealthLabels}
                            aria-label="show more"
                          >
                            <ExpandMoreIcon />
                          </IconButton>
                        </Typography>
                        <Collapse in={expandHealthLabels} timeout="auto" unmountOnExit>
                          {displayHealthLabels}
                        </Collapse>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>   
          )
    }
export default ShowItem
