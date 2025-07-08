// src/components/HeroSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import slide1 from '../../Images/banner-img.jpg';
import slide2 from '../../Images/Beach.jpg';
import slide3 from '../../Images/injection.jpg';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';


const slides = [
  {
    image: slide1,
    title: 'Speciality Vaccine in Telford',
    description:
      'We offer private speciality vaccines at Muxton Pharmacy including HPV, Shingles, MMR, Chickenpox and Pneumonia.',
  },
  {
    image: slide2,
    title: 'Travel Vaccination Clinic in Telford',
    description: 'Get expert travel health advice and vaccines for your next adventure',
  },
  {
    image: slide3,
    title: 'Speciality Vaccine in Telford',
    description:
      'We offer private speciality vaccines at Muxton Pharmacy including HPV, Shingles, MMR, Chickenpox and Pneumonia.',
  },
];

const cardData = [
  {
    image: slide1,
    title: 'HPV Vaccination',
  },
  {
    image: slide2,
    title: 'Travel Consultation',
  },
  {
    image: slide3,
    title: 'Flu Shots',
  },
];

function HeroSlider() {
  return (
    <>
      {/* Slider Section */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        style={{ width: '100%', height: '100vh' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                height: '100vh',
                width: '100%',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                color: '#000',
                paddingLeft: '50px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#FFFFFFCC',
                  padding: '20px 30px',
                  borderRadius: '8px',
                  maxWidth: '600px',
                  marginLeft: '100px',
                }}
              >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{slide.title}</h2>
                <p style={{ fontSize: '1.2rem' }}>{slide.description}</p>
                <button
                  style={{
                    fontSize: '16px',
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '50px',
                  }}
                >Our Services
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Additional Section */}
   {/* Additional Section */}
<div style={{ padding: '60px 100px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
  <h2 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>Our Services</h2>
  <p style={{ fontSize: '1rem', marginBottom: '40px', color: '#555' }}>
    Select the service you need and book an appointment online at a time that suits you.
  </p>

  {/* Responsive Card Grid Section */}
  <Grid container spacing={4} justifyContent="center">
    {cardData.map((card, idx) => (
      <Grid item xs={12} sm={6} md={4} key={idx}>
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            height: '100%',
            textAlign: 'left',
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={card.image}
            alt={card.title}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {card.title}
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: '#007bff',
                '&:hover': {
                  backgroundColor: '#0056b3',
                },
                textTransform: 'none',
                mt: 2,
              }}
            >
              Read More
            </Button>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</div>


      
    </>
  );
}

export default HeroSlider;
