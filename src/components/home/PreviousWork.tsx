import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography } from '@mui/material';
import bgImage from '../../assets/images/design-2.jpg'
import Image from 'next/image';

export default function PreviousWork() {
    return (
        <>
            <Typography sx={{
                backgroundColor: '#00b0a87b',
                p: 1,
                fontSize: { xs: 15, md: 22, lg: 35 },
                fontWeight: 'bold',
                mt: 3,
                color: 'white'
            }}
            >Innovating Beyond Distinction</Typography>
            <Box sx={{
                width: 'full', height: { xs: 300, md: 450, lg: 600 }, overflowY: 'scroll',
                backgroundImage: `url(${bgImage.src})`,
                pt: 5,
            }}>

                <ImageList variant="masonry" cols={2} gap={15}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <Image
                                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.name}
                                loading="lazy"
                            />
                            <ImageListItemBar sx={{ backgroundColor: '#c900469d' }} position="below" title={item.name} />
                            <Typography sx={{
                                backgroundColor: '#a0a0a083',
                                p: 1
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
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        name: 'Laptop',
        details: 'Cyayyaneer AscensionResidential Sustainability is evident in the design, incorporating wooden screens and green spaces for a perfect blend of light, privacy, and community interaction.',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        name: 'Books',
        details: 'The design seamlessly blends modernity and functionality, featuring a vast infinity pool overlooking Gulshan Lake, and a state-of-the-art gym.',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        name: 'Sink',
        details: 'This residential masterpiece blends exceptional design with eco-conscious living, featuring a unique concave low-emission façade glass.',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        name: 'Kitchen',
        details: 'The building echoes natures simplicity with organically shaped layouts and branching patterns for natural light, utilizing clean architecture.',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        name: 'Blinds',
        details: 'This project fosters social interaction and eco-friendly living with open common spaces, encouraging residents to embrace a living community.',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        name: 'Chairs',
        details: 'Pristine Pavilion Commercial A Visionary Icon on Gulshan Avenue, this buildings dynamic posture sets it apart, evoking a sense of motion through its unique architecture.',
    },


];
