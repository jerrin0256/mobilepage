import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';

function Testimonials() {
  const testimonials = [
    { name: 'Aditi Verma', age: 22, text: 'I always wanted to learn digital art, but tutorials were confusing. This course made everything so simple! Now I\'m taking commissions online!' },
    { name: 'Rajesh Khanna', age: 20, text: 'Switching from traditional art to digital felt overwhelming, but this course changed everything! The structured lessons helped me master Procreate in weeks!' },
  ];

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        What Our Students Say:
      </Typography>
      {testimonials.map((testimonial, index) => (
        <Card key={index} style={{ margin: '1rem 0' }}>
          <CardContent>
            <Typography variant="subtitle1">
              {testimonial.name}, {testimonial.age}
            </Typography>
            <Typography variant="body2">{testimonial.text}</Typography>
          </CardContent>
        </Card>
      ))}
    </Paper>
  );
}

export default Testimonials;