'use client';

import React from 'react';
import { Box, Grid, Card, CardMedia, Typography } from '@mui/material';
import p1 from '../../assets/images/projects/p-1.jpeg'
import p2 from '../../assets/images/projects/p-2.jpeg'
import p3 from '../../assets/images/projects/p-3.jpeg'
import p4 from '../../assets/images/projects/p-4.jpeg'
import p5 from '../../assets/images/projects/p-5.jpeg'

const services = [
    {
        title: 'Chayyaneer BrentWood',
        image: p1.src,
        location: 'Mirpur, Dhaka',
        description: 'We offer reliable construction services for residential and commercial projects.',
    },
    {
        title: 'Resonac by Chayyaneer',
        image: p2.src,
        location: 'Dhaka',
        description: 'Our architects create innovative and functional designs for every project.',
    },
    {
        title: 'Chayyaneer Gulsan-2',
        image: p3.src,
        location: 'Gulsan',
        description: 'Transform and upgrade your space with our professional renovation services.',
    },
    {
        title: 'R-6 Chayyaneer',
        image: p4.src,
        location: 'Agargaon',
        description: 'Keep your property in top condition with our maintenance solutions.',
    },
    {
        title: 'R-6 Chayyaneer',
        image: p5.src,
        location: 'Banani',
        description: 'Keep your property in top condition with our maintenance solutions.',
    },

];

const Projects = () => {
    return (
        <Box
            sx={{
                py: 6,
                px: { xs: 2, md: 4 },
                backgroundImage: `url('https://i.ibb.co/yhctpYh/our-service-bg.png')`,
                bgcolor: '#e7f3ff',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Typography
                variant="overline"
                sx={{
                    display: 'block',
                    textAlign: 'center', color: '#ff9800', fontWeight: 'bold', fontSize: '1rem'
                }}
            >
                PROJECTS
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
                OUR LATEST PROJECTS

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
                                height="450"
                                image={service.image}
                                alt={service.title}
                                sx={{
                                    filter: 'brightness(0.9)',
                                    transition: 'all 0.3s',
                                    '&:hover': { filter: 'brightness(0.6)' },
                                }}
                            />


                            <Box sx={{
                                backgroundColor: '#2d2d2d',
                                width: 'full'
                            }}>
                                <Typography
                                    sx={{
                                        textAlign: 'start',
                                        mb: -1,
                                        pt: 1,
                                        pl: 2,
                                        color: "white"
                                    }}>
                                    {service.location}

                                </Typography>
                                <Typography sx={{
                                    textAlign: 'start',
                                    p: 2,
                                    fontSize: { xs: 15, md: 18, lg: 23 },
                                    color: "white"
                                }}>
                                    {service.title}

                                </Typography>

                            </Box>

                        </Card>

                    </Grid>
                ))}
            </Grid>

        </Box>
    );
};

export default Projects;
