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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { ListItemText } from '@mui/material';


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

  const displayIngredients = ingredients?.map(ingredient => {
    
    return <ListItemText>{ingredient}</ListItemText>
  })

  return (
    <Card className="grid-item">
      
      {/* <CardHeader className="card-header" avatar={ <Avatar alt={label} src={icon} />}
        title={label} subheader={ dishType }/> */}
        <CardHeader
            avatar={<Avatar alt={label} src={icon} />}
            title={label}
            subheader={dishType}
            sx={{
              "& .MuiCardHeader-title": {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
          />
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
        <Typography variant="h6" color="text.secondary">Ingredients</Typography>
          {displayIngredients}
        </CardContent>
      </Collapse>

    </Card>
  );
}


export default RecipeItem