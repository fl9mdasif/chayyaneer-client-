import CountUp from "react-countup"
import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { Card, CardContent, Typography } from "@mui/material";
import bgImage from '../../assets/images/design-3.jpg'


export default function Counter() {
    return (
        <Box sx={{
            p: 2,
            backgroundImage: `url(${bgImage.src})`,
            bgcolor: '#e7f3ff',

            // backgroundSize: 'cover', // Ensures the image covers the entire container
            backgroundPosition: 'center', // Centers the image within the container
            backgroundRepeat: 'no-repeat', //


        }}>
            <Typography sx={{
                fontSize: { sx: 15, md: 22, lg: 26 },
                fontWeight: 'bold',
                textAlign: 'center',
                mt: { xs: 2, md: 3, lg: 4 },
                mb: { xs: 3, md: -3, lg: -7 },

            }}>
                Expanding The Horizon

            </Typography>

            <Grid container spacing={2}
                sx={{
                    width: '100%', height: { sx: 200, md: 250, lg: 300 },
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex'
                }}
            >

                {/* card 1 */}
                <Grid size={{ xs: 6, md: 3 }}>
                    <Card sx={{ backgroundColor: '#00b0a87b', boxShadow: 'none', p: 1 }}>
                        <CardContent sx={{ color: '#e4e4e4', mb: -2, fontWeight: 'bold', boxShadow: '', fontSize: { sx: 15, md: 24 }, textAlign: 'center' }}>
                            Years of Experience
                        </CardContent>
                        <Typography
                            variant="h3"
                            sx={{ color: '#fafafafa', textAlign: 'center' }}>
                            <CountUp
                                start={0}
                                end={3}
                                delay={1.5}
                                duration={3}
                                suffix="+"
                                separator=""
                            />

                        </Typography>
                    </Card>
                </Grid>

                {/* card 2 */}
                <Grid size={{ xs: 6, md: 3 }}>
                    <Card sx={{ backgroundColor: '#c900469d', boxShadow: 'none', p: 1 }}>

                        <CardContent sx={{ color: '#e4e4e4', mb: -2, fontWeight: 'bold', boxShadow: '', fontSize: { sx: 15, md: 24 }, textAlign: 'center' }}>
                            Projects Completed
                        </CardContent>
                        <Typography
                            variant="h3"
                            sx={{ color: '#ffffffff', textAlign: 'center' }}>
                            <CountUp
                                start={0}
                                delay={1.5}
                                end={5}
                                duration={3}
                                suffix="+"
                                separator=" "
                            />

                        </Typography>
                    </Card>
                </Grid>

                {/* card 3 */}
                <Grid size={{ xs: 6, md: 3 }}>

                    <Card sx={{ backgroundColor: '#c900469d', boxShadow: 'none', p: 1 }}>
                        <CardContent sx={{ color: '#e4e4e4', mb: -2, fontWeight: 'bold', boxShadow: '', fontSize: { sx: 15, md: 24 }, textAlign: 'center' }}>
                            Units of Delivered
                        </CardContent>
                        <Typography
                            variant="h3"
                            sx={{ color: '#ffffffff', textAlign: 'center' }}>
                            <CountUp
                                start={0}
                                delay={1.5}
                                end={12}
                                duration={3}
                                suffix="+"
                                separator=" "
                            />
                        </Typography>
                    </Card>
                </Grid>

                {/* card 4 */}
                <Grid size={{ xs: 6, md: 3 }}>

                    <Card sx={{ backgroundColor: '#00b0a87b', boxShadow: 'none', p: 1 }}>
                        <CardContent sx={{ color: '#e4e4e4', mb: -2, fontWeight: 'bold', boxShadow: '', fontSize: { sx: 15, md: 24 }, textAlign: 'center' }}>
                            Plots Handed Over
                        </CardContent>
                        <Typography
                            variant="h3"
                            sx={{ color: '#fafafafa', textAlign: 'center' }}>
                            <CountUp
                                start={0}
                                end={6}
                                delay={1.5}
                                duration={3}
                                suffix="+"
                                separator=" "
                            />

                        </Typography>
                    </Card>
                </Grid>
            </Grid>

        </Box >
    );
}
