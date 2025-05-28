import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box sx={{ width: '100%', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Grid
            container
            justifyContent="space-between"
            alignItems="flex-start"
            rowSpacing={4}
            columnSpacing={4}
            >
            {/* Company Info */}
            <Grid item xs={12} md={3}>
                <Typography variant="h6" gutterBottom>
                Mapishi
                </Typography>
                <Typography variant="body2">
                Find Recipes That Nourish and Delight. Mapishi allows you to search cooking recipes based on dish names. 
                </Typography>
            </Grid>


            {/* Useful Links */}
            <Grid item xs={12} md={2}>
                <Typography variant="h6" gutterBottom>
                Useful Links
                </Typography>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <HomeIcon fontSize="small" />
                    <Link href="/" color="inherit" underline="hover">Home</Link>
                </Box>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <InfoIcon fontSize="small" />
                    <Link href="/about" color="inherit" underline="hover">About Us</Link>
                </Box>
            </Grid>

            {/* Contact */}
            <Grid item xs={12} md={3}>
                <Typography variant="h6" gutterBottom>
                    Contact
                </Typography>

                <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <GitHubIcon fontSize="small" />
                    <Link href="https://github.com/Ngaremaina" color="inherit" underline="hover">
                    Github
                    </Link>
                </Box>

                <Box display="flex" alignItems="center" gap={1}>
                    <LinkedInIcon fontSize="small" />
                    <Link href="https://www.linkedin.com/in/owen-ngare-maina/" color="inherit" underline="hover">
                    LinkedIn
                    </Link>
                </Box>
            </Grid>

        </Grid>


        <Box my={4} borderTop={1} borderColor="rgba(255,255,255,0.2)" />

        {/* Footer Bottom */}
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2">
              © 2025 Mapishi. All rights reserved.
            </Typography>
          </Grid>
          <Grid item>
            <Box>
              <IconButton color="inherit" href="https://github.com/Ngaremaina">
                <GitHubIcon />
              </IconButton>
              <IconButton color="inherit" href="https://www.linkedin.com/in/owen-ngare-maina/">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" href="mailto:ngaremaina4@gmail.com">
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
