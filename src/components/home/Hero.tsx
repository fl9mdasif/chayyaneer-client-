
import { Box, Button, Typography } from "@mui/material";
import bgImage from '../../assets/images/hero-bg.jpg'

const HeroSection = () => {
    return (
        <Box
            sx={{
                width: "100%", // Full width
                height: "92vh", // Full height for the viewport
                backgroundImage: `url(${bgImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                // mx: 2
            }}
        >
            {/* Dark overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)", // Add a dark overlay
                    zIndex: 1,
                }}
            />
            {/* Content */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                    px: 2, // Padding for mobile responsiveness
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        color: "#00b0a7ff",
                        textTransform: "uppercase",
                        letterSpacing: 2,
                        mb: 2,
                    }}
                >
                    Welcome to Chayyaneer
                </Typography>
                <Typography
                    variant="h2"
                    fontWeight={700}
                    sx={{
                        fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive font size
                        color: "white",
                        mb: 3,
                    }}
                >
                    Building dreams with precision and excellence
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: "1rem", sm: "1.25rem" },
                        color: "white",
                        maxWidth: "600px",
                        mx: "auto",
                        mb: 4,
                    }}
                >
                    We specialize in turning visions into reality with exceptional craftsmanship and meticulous attention to detail. With years of experience and a commitment to quality.
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" }, // Stack buttons on mobile
                        gap: 2,
                        justifyContent: "center",
                    }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: "#00b0a87b",
                            color: "#ffffff",
                            "&:hover": { backgroundColor: "#c900469d" },
                            px: 4,
                        }}
                    >
                        Get Started
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            color: "white",
                            borderColor: "#c900469d",
                            "&:hover": { borderColor: "#00b0a87b    " },
                            px: 4,
                        }}
                    >
                        View Projects
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;
