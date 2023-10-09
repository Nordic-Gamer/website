import React from 'react';
import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';

const HomeSection = styled(Box)({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
    color: 'white',
    padding: '64px 0',
});

function Home() {
    return (
        <HomeSection id="home">
            <Box textAlign="center">
                <Typography variant="h2" fontWeight="bold" marginBottom={2}>
                    Welcome to Nordic Gamer
                </Typography>
                <Typography variant="h6" maxWidth={600} textAlign="center">
                    Your decentralized meme coin platform.
                </Typography>
            </Box>
        </HomeSection>
    );
}

export default Home;
