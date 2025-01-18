'use client';

import React from 'react';
import { Box, Grid, Card, CardMedia, Typography } from '@mui/material';

const services = [
    {
        title: 'Building Construction',
        image: 'https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/service-img-1.jpg',
        description: 'We offer reliable construction services for residential and commercial projects.',
    },
    {
        title: 'Architecture Design',
        image: 'https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/service-img-2.jpg',
        description: 'Our architects create innovative and functional designs for every project.',
    },
    {
        title: 'Building Renovation',
        image: 'https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/service-img-3.jpg',
        description: 'Transform and upgrade your space with our professional renovation services.',
    },
    {
        title: 'Building Maintenance',
        image: 'https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/service-img-4.jpg',
        description: 'Keep your property in top condition with our maintenance solutions.',
    },
];

const Services = () => {
    return (
        <Box
            sx={{
                py: 6,
                px: { xs: 2, md: 4 },
                backgroundImage: `url('https://i.ibb.co/yhctpYh/our-service-bg.png')`,
                bgcolor: '#e7f3ff',
                backgroundPosition: 'center',
            }}
        >
            <Typography
                variant="overline"
                sx={{ display: 'block', textAlign: 'center', color: '#ff9800', fontWeight: 'bold', fontSize: '1rem' }}
            >
                OUR SERVICES
            </Typography>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#212121',
                    mb: 2,
                }}
            >
                Our Construction Services
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    textAlign: 'center',
                    color: '#616161',
                    mb: 4,
                    maxWidth: '800px',
                    mx: 'auto',
                }}
            >
                We specialize in a wide range of construction services, including residential, commercial, and industrial projects.
            </Typography>

            <Grid container spacing={3}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '16px',
                                boxShadow: 3,
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="300"
                                image={service.image}
                                alt={service.title}
                                sx={{
                                    filter: 'brightness(0.9)',
                                    transition: 'all 0.3s',
                                    '&:hover': { filter: 'brightness(0.6)' },
                                }}
                            />


                            <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 1 }}>
                                {service.title}

                            </Typography>


                        </Card>

                    </Grid>
                ))}
            </Grid>

        </Box>
    );
};

export default Services;
