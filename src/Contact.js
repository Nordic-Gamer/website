import React from 'react';
import { Typography, Container, Box, TextField, Button } from '@mui/material';

function Contact() {
    return (
        <Box 
            id="contact" 
            sx={{ 
                py: 8, 
                backgroundColor: '#34495E',
                color: '#ECF0F1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="h2" gutterBottom align="center">
                    Contact Us
                </Typography>
                <Typography variant="body1" paragraph align="center">
                    Have questions or want to learn more about Nordic Gamer? Get in touch with us!
                </Typography>
                <form noValidate autoComplete="off" sx={{ mt: 2 }}>
                    <TextField 
                        fullWidth
                        margin="normal"
                        label="Name"
                        variant="outlined"
                        color="primary"
                    />
                    <TextField 
                        fullWidth
                        margin="normal"
                        label="Email"
                        variant="outlined"
                        color="primary"
                    />
                    <TextField 
                        fullWidth
                        margin="normal"
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        color="primary"
                    />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        sx={{ mt: 2 }}
                    >
                        Send Message
                    </Button>
                </form>
            </Container>
        </Box>
    );
}

export default Contact;
