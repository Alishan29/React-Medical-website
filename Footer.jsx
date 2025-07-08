import React from 'react';
import { Box, Typography, Grid, List, ListItem } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1a1a19', color: 'white', px: 15, py: 6 }}>
      <Grid container spacing={4} justifyContent="space-between">
        {/* Column 1: Logo & Excerpt */}
        <Grid item xs={12} md={3} sx={{ maxWidth: '300px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            MyCompany
          </Typography>
          <Typography variant="body2">
            We are dedicated to providing quality services and products that improve lives and support communities.
          </Typography>
        </Grid>

        {/* Column 2: Useful Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Useful Links
          </Typography>
          <List>
            <ListItem sx={{ p: 0.5 }}>Home</ListItem>
            <ListItem sx={{ p: 0.5 }}>About</ListItem>
            <ListItem sx={{ p: 0.5 }}>Contact</ListItem>
            <ListItem sx={{ p: 0.5 }}>Privacy Policy</ListItem>
          </List>
        </Grid>

        {/* Column 3: Services */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Services
          </Typography>
          <List>
            <ListItem sx={{ p: 0.5 }}>Consultation</ListItem>
            <ListItem sx={{ p: 0.5 }}>Vaccination</ListItem>
            <ListItem sx={{ p: 0.5 }}>Health Screening</ListItem>
            <ListItem sx={{ p: 0.5 }}>Travel Advice</ListItem>
          </List>
        </Grid>

        {/* Column 4: Contact Info & Social Icons */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Contact
          </Typography>
          <List>
  <ListItem sx={{ p: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}>
    <HomeIcon sx={{ color: 'goldenrod' }} />
    123 Muxton Lane, Telford
  </ListItem>
  
  <ListItem sx={{ p: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}>
    <PhoneIcon sx={{ color: 'goldenrod' }} />
    +44 123 456 7890
  </ListItem>
  
  <ListItem sx={{ p: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}>
    <EmailIcon sx={{ color: 'goldenrod' }} />
    info@muxtonpharmacy.co.uk
  </ListItem>
</List>

          <Box
            sx={{
              mt: 2,
              display: 'flex',
              gap: 2,
              "& svg": {
                fontSize: "28px",
                color: "white",
                cursor: "pointer",
              },
              "& svg:hover": {
                color: "goldenrod",
                transform: 'translateX(5px)',
                transition: 'all 400ms',
              }
            }}
          >
            <InstagramIcon />
            <FacebookIcon />
            <YouTubeIcon />
          </Box>
        </Grid>
      </Grid>

      {/* Bottom text */}
      <Typography variant="body2" sx={{ textAlign: 'center', mt: 5 }}>
        &copy; {new Date().getFullYear()} Muxton Pharmacy. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
