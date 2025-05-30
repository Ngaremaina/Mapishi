import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import ShowItem from "../components/ShowItem";
import { fetchData } from "../service/service";
import CirclesWithBarSpinner from "../components/Loader";

const ShowDetails = () => {
  const { label } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchData(label)
      .then((data) => setRecipes(data.hits))
      .finally(() => setLoading(false));
  }, [label]);

  
  return (
    <>
    {loading ? (
      <CirclesWithBarSpinner />
    ) : (
      <Grid container className="grid">
        <ShowItem details = {recipes} label = {label}/>       
    </Grid>
    )}
    
    </>
  );
};

export default ShowDetails;
