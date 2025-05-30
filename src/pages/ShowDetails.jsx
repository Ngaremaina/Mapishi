import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography, CircularProgress } from "@mui/material";
import ShowItem from "../components/ShowItem";
import { fetchData } from "../service/service";

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
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {loading ? (
        <Grid container justifyContent="center" alignItems="center" minHeight="40vh">
          <CircularProgress />
        </Grid>
      ) : recipes.length === 0 ? (
        <Typography variant="h6" align="center" color="textSecondary">
          No recipes found for "{label}"
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {recipes.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ShowItem data={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ShowDetails;
