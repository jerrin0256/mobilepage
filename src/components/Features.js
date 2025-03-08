// 
// Features.js
// 
import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Paper from '@mui/material/Paper';

function Features() {
  const features = [
    'Hands-on Lessons - Learn digital painting, shading & composition.',
    'Tool Mastery - Master Procreate, Photoshop, & Illustrator.',
    'Exclusive Resource Pack - Brushes, templates & textures.',
    'Live Mentorship - Weekly Q&A sessions with industry pros.',
    'Project-Based Learning - Build a stunning portfolio.',
    'Certificate of Completion - Boost your creative career.',
    'Community Access - Network with fellow artists.',
  ];

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        With This Course, You Get:
      </Typography>
      <List>
        {features.map((feature, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <Typography variant="body2">{feature}</Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default Features;