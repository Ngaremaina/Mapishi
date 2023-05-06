import React from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';


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

function RecipeItem({ label, dishType, image, icon, ingredients, calories, source }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const displayIngredients = ingredients.map(ingredient => {
    console.log(ingredient)
    return <Typography paragraph>{ingredient}</Typography>
  })

  return (
    <Card className="grid-item">
      
      <CardHeader className="card-header" avatar={ <Avatar alt={label} src={icon} />}
        action={ <IconButton aria-label="add to favorites"> <FavoriteIcon /> </IconButton> }
        title={label} subheader={ dishType }/>
      <CardMedia component="img" height="194" image={image} alt={label} />

      <CardContent>
        <Typography>{source}</Typography>
        <Typography variant="body2" color="text.secondary">{calories} Calories</Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Link to={`/${label}`}><IconButton aria-label="info"> <InfoIcon/></IconButton></Link>       
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more" ><ExpandMoreIcon /></ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            {displayIngredients}
        </CardContent>
      </Collapse>

    </Card>
  );
}










// const RecipeItem = ({ label, dishType, image }) => {
//     return (
//         <card className ="text-white border-dark bg-dark" style={{width :"15rem", margin: "5px"}}>
//             <img className =  "card-img-top" src={image} alt={label}/>
//             <div className="card-body">
//                 <h5 className="card-title">{label}</h5>
//                 <p className="card-text"><small> {dishType}</small></p>
//                 {/* <p className="card-text">Kshs. {price}</p> */}
               
//                 <Link className="btn btn-success mb-4" to={`/${label}`}>Show More</Link>
//                 <div className="card-footer mt-6">
//                     <div>
//                     {/* <button type="button" style={{width: "90%"}} className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-2">Add To Cart</button> */}
//                     </div>                  
//                 </div>             
//             </div>       
//         </card>  
//     )
// }

export default RecipeItem