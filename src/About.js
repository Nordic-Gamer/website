import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function About() {
    return (
        <Box 
            id="about" 
            sx={{ 
                py: 8, 
                backgroundColor: '#2C3E50', // Темный фон
                color: '#ECF0F1' // Светлый текст
            }}
        >
            <Container>
                <Typography variant="h2" gutterBottom align="center">
                    About Nordic Gamer
                </Typography>
                <Typography variant="body1" paragraph>
                    Welcome to Nordic Gamer
                </Typography>
                <Typography variant="body1" paragraph>
                    Coin
                </Typography>
                <Typography variant="body1" paragraph>
                    Yes
                </Typography>
            </Container>
        </Box>
    );
}

export default About;

