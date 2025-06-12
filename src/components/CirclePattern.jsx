import React from 'react';
import { Box } from '@mui/material';

const CirclePattern = ({ imageSrc, hovered }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: 100,
                height: 100,
            }}
        >
            {/* Base circle with background color */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '80%',
                    height: '80%',
                    borderRadius: '50%',
                    backgroundColor: hovered ? '#fff' : '#00BEAE',
                    zIndex: 1,
                }}
            />
            {/* Overlay pattern image */}
            <Box
                component="img"
                src={imageSrc}
                alt="Overlay pattern"
                sx={{
                    position: 'absolute',
                    width: '40%',
                    height: '40%',
                    objectFit: 'contain',
                    zIndex: 2,
                    top: 20,
                    left: 20,
                    filter: hovered ? 'brightness(0) saturate(100%) invert(28%) sepia(96%) saturate(747%) hue-rotate(131deg) brightness(94%) contrast(101%)' : 'none',
                }}
            />
        </Box>
    );
};

export default CirclePattern;
