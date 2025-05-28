import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        position: "static",
        display: "flex",
        flexDirection: "column",
        color: "white",
        padding: "2%",
        margin: "10px 50px 0 50px",
        backgroundColor: "#1e1e1e",
        borderRadius: "10px",
      }}
    >

      <Typography variant="h6" gutterBottom>
        Welcome to Mapishi, the recipe discovery platform built using Node and the Edamam API. Our mission is simple — to make cooking easy, fun, and accessible for everyone.
      </Typography>

      <Typography variant="body1" paragraph className='space-y-3'>
        Mapishi helps home cooks, food enthusiasts, and aspiring chefs explore a wide range of recipes from across the globe. By leveraging the powerful Edamam API, we provide real-time access to thousands of recipes tailored to your search, whether you're looking for something quick, healthy, vegetarian, or indulgent.
      </Typography>

      <Typography variant="body1" paragraph>
        Whether you're cooking for yourself, your family, or planning a gathering, Mapishi is your go-to companion. Simply enter an ingredient or a dish name, and let our engine fetch the best recipes to match your taste and dietary preferences.
      </Typography>

      <Typography variant="body1" paragraph>
        Our platform is styled with modern frontend tools for a smooth user experience. We value sustainability, community, and simplicity — because cooking should bring joy, not stress.
      </Typography>

      <Typography variant="body1" paragraph>
        At Mapishi, we believe that food connects people. Through recipe sharing and culinary inspiration, we’re creating a space where people can learn, grow, and enjoy cooking — together.
      </Typography>

      <Typography variant="body2" mt={4}>
        Copyright © 2025 Mapishi. All rights reserved.
      </Typography>
    </Box>
  );
};

export default About;
