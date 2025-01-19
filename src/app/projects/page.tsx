'use client';

import React from 'react';
import { Box, Grid, Card, CardMedia, Typography } from '@mui/material';
import { projects } from './data';
import Link from 'next/link';



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
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Link
                            href={`/projects/${project.id}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >

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
                                    image={project.image}
                                    alt={project.title}
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
                                        {project.location}

                                    </Typography>
                                    <Typography sx={{
                                        textAlign: 'start',
                                        p: 2,
                                        fontSize: { xs: 15, md: 18, lg: 23 },
                                        color: "white"
                                    }}>
                                        {project.title}

                                    </Typography>

                                </Box>

                            </Card>
                        </Link>

                    </Grid>
                ))}
            </Grid>

        </Box>
    );
};

export default Projects;
