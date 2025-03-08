

import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; // Import Grid

function Hero() {
  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h4">Master the Art of Digital Illustration</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">A 4-Week Course Designed for Beginners & Enthusiasts!</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">Learn to create stunning digital artwork with step-by-step guidance from industry experts. No prior experience required. Just your creativity!</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" className="enroll-button">
          Enroll now for ₹7,999
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="secondary" className="enroll-button">
          Secure Your Spot for Just ₹79
        </Button>
      </Grid>
      <Grid item>
        <Typography variant="body2">Use a coupon code within 15 minutes to unlock a special bonus pack!</Typography>
      </Grid>
    </Grid>
  );
}

export default Hero;
