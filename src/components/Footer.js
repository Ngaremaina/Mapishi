import React from "react";
import { Typography } from "@mui/material";
import {Box} from "@mui/material";

const Footer = () => {
    return (
        
        <Box sx={{display:"flex", flexDirection:"column", color:"white", padding:"2% 10% 2% 10%", margin:"10px 50px 0 50px"}}>
            <Typography variant="h5" textAlign={"center"}>
            The purpose of Recipes is to make cooking enjoyable and stress-free. We provide recipes created by culinary professionals for those who cook at home. We understand that cooking is crucial to living a healthier and more enjoyable life for individuals, communities, and the earth, hence our purpose is to make cooking pleasurable. By exchanging recipes and cooking advice, we encourage home cooks throughout the globe to assist one another.
            </Typography>
            <Typography variant="h6" textAlign={"center"}>
                Copyright @ 2023
            </Typography>
          
        </Box>
    
    )
}

export default Footer