import { Box, Typography } from "@mui/material";
import { projects } from "../data";
import Image from "next/image";
import Grid from '@mui/material/Grid2';

interface TParams {
    projectId: string; // This should match the dynamic segment in the route ([project])
}

const ProjectDetails = ({ params }: { params: TParams }) => {
    const { projectId } = params;

    // console.log("projectId", projectId)

    const project = projects.find((proj) => proj.id === projectId);

    if (!project) {
        return (
            <Box sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h4" color="error">
                    Project not found!
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 4 }}>
            <Grid sx={{ display: "flex", flexWrap: 'wrap' }} container spacing={2}>
                <Grid size={8}>
                    <Image
                        // component="img"
                        src={project.image}
                        alt={project.title}

                        height={600}
                        width={600}
                        layout="responsive"
                        objectFit="conver  " // Ensures cropping is handled properly
                    />
                </Grid>

                <Grid size={4}>
                    <Typography fontWeight="bold" sx={{ mb: 2, }}>
                        {project.title}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 4 }}>
                        Location: {project.location}
                    </Typography>
                    <Typography variant="body1">{project.description}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProjectDetails;
