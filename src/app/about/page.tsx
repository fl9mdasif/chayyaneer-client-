'use client';

import React from 'react';
import { Box, Typography, Grid, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import aboutUs from '@/assets/images/about-us.png'

const AboutUs = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                mx: { xs: 1, md: 8 },
                px: { xs: 2, md: 4 },
                py: { xs: 4, md: 6 },
                bgcolor: '#f8f9fa',
            }}
        >
            <Grid container spacing={4} alignItems="center">
                {/* Left Image Section */}
                <Grid item xs={12} md={6} lg={5}>
                    <Box
                        component="img"
                        src='https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/about-us-img.png'
                        alt="About Us Image"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '12px',
                            // boxShadow: 3,
                        }}
                    />
                </Grid>

                {/* Right Content Section */}
                <Grid item xs={12} md={6} lg={6}>
                    <Box
                        sx={{
                            width: { xs: 350, md: 500, lg: 650 },
                            ml: { xs: 0, md: 5, lg: 5 },
                        }}
                    >
                        <Typography variant="overline" color="primary" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                            ABOUT US
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 700,
                                color: '#212121',
                                mt: 1,
                                mb: 2,
                            }}
                        >
                            Crafting structures that last a lifetime
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#616161',
                                lineHeight: 1.8,
                                mb: 3,
                            }}
                        >
                            Crafting structures that last a lifetime requires a holistic approach that integrates advanced materials,
                            resilient design, regular maintenance, and sustainability practices. By learning from historical examples and
                            leveraging modern technology.
                        </Typography>

                        {/* Features List */}
                        <Box
                            sx={{
                                bgcolor: '#e7f3ff',
                                borderRadius: '8px',
                                p: 2,
                                mb: 3,
                            }}
                        >
                            <List>
                                {['Comprehensive Services', 'Advanced Technology', 'Transparent Communication'].map((text) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleIcon color="primary" />
                                        </ListItemIcon>
                                        <ListItemText primary={text} primaryTypographyProps={{ fontSize: '1rem', color: '#424242' }} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>

                        {/* Call to Action */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Button
                                variant="contained"
                                color="warning"
                                sx={{
                                    textTransform: 'capitalize',
                                    fontWeight: 'bold',
                                    borderRadius: '8px',
                                    px: 3,
                                    py: 1.5,
                                    fontSize: '1rem',
                                }}
                            >
                                Get Free Quote
                            </Button>
                            <Box>
                                <Typography variant="caption" sx={{ display: 'block', color: '#757575' }}>
                                    Call support center 24x7
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#212121', fontWeight: 'bold' }}>
                                    +1 809 120 6705
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutUs;
