import React from 'react';
import { Container, Box, Typography } from '@mui/material';

function Footer() {
    return (
        <Box 
            component="footer" 
            sx={{ 
                py: 3, 
                mt: 5, 
                backgroundColor: '#2C3E50',
                color: '#ECF0F1',
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="body2" align="center">
                    &copy; {new Date().getFullYear()} Nordic Gamer. All Rights Reserved.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
