import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu" 
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Nordic Gamer
                </Typography>
                <Button color="inherit" href="#home">Home</Button>
                <Button color="inherit" href="#about">About</Button>
                <Button color="inherit" href="#buy">How to buy</Button>
                <Button color="inherit" href="#tokenomics">Tokenomics</Button>
                <Button color="inherit" href="#roadmap">Roadmap</Button>
                <Button color="inherit" href="#contact">Contact</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
