'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography } from '@mui/material';
import bgImage from '../../assets/images/design-2.jpg'
import p1 from '../../assets/images/projects/p-3.jpeg'
import p2 from '../../assets/images/projects/p-2.jpeg'
import p3 from '../../assets/images/projects/p-3.jpeg'
import p4 from '../../assets/images/projects/p-4.jpeg'
import p5 from '../../assets/images/projects/p-5.jpeg'
import Image from 'next/image';

export default function PreviousWork() {
    return (
        <>
            <Typography sx={{
                backgroundColor: '#b000789b',
                p: 1,
                fontSize: { xs: 15, md: 27, lg: 45 },
                fontWeight: 'bold',
                mt: 3,
                color: 'white',
                textAlign: 'center'
            }}
            >Innovating Beyond Distinction</Typography>
            <Box sx={{
                width: 'full',
                height: { xs: 300, md: 450, lg: 600 }, overflowY: 'scroll',
                backgroundImage: `url(${bgImage.src})`,
                pt: 5,
            }}>

                <ImageList variant="masonry" cols={2} gap={15}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.id}>

                            <Image
                                src={item.img}
                                loading="lazy"
                                layout="responsive"
                                alt={item.name}
                                width={390} // Set appropriate width
                                height={600} // Set appropriate height
                                objectFit="fit" // Ensures cropping is handled properly
                            />
                            <ImageListItemBar sx={{ backgroundColor: '#202020ff', pl: 2, color: 'white' }}
                                position="below"
                                title={item.name} />
                            <Typography sx={{
                                backgroundColor: '#040404ff',
                                p: 1,
                                color: 'white'
                            }}
                            >{item.details}</Typography>

                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </>
    );
}

const itemData = [
    {
        id: 1,
        img: p1.src,
        name: 'Gulsan Resident',
        details: 'Cyayyaneer AscensionResidential Sustainability is evident in the design, incorporating wooden screens and green spaces for a perfect blend of light, privacy, and community interaction.',
    },
    {
        id: 2,
        img: p2.src,
        name: 'Chayyaneer 2',
        details: 'Cyayyaneer AscensionResidential Sustainability is evident in the design, incorporating wooden screens and green spaces for a perfect blend of light, privacy, and community interaction.',
    },
    {
        id: 3,
        img: p3.src,
        name: 'Dining',
        details: 'Cyayyaneer AscensionResidential Sustainability is evident in the design, incorporating wooden screens and green spaces for a perfect blend of light, privacy, and community interaction.',
    },
    {
        id: 4,
        img: p4.src,
        name: 'Dining 2',
        details: 'The design seamlessly blends modernity and functionality, featuring a vast infinity pool overlooking Gulshan Lake, and a state-of-the-art gym.',
    },
    {
        id: 5,
        img: p5.src,
        name: 'Living',
        details: 'This residential masterpiece blends exceptional design with eco-conscious living, featuring a unique concave low-emission façade glass.',
    },
    {
        id: 6,
        img: p1.src,
        name: 'Blinds',
        details: 'The building echoes natures simplicity with organically shaped layouts and branching patterns for natural light, utilizing clean architecture.',
    },
    // {
    //     id:"",
    // img: 'https://i.ibb.co.com/ggmRBwQ/int4.jpg',
    //     name: 'kitchen',
    //     details: 'This project fosters social interaction and eco-friendly living with open common spaces, encouraging residents to embrace a living community.',
    // },



];
