import React from 'react';

function Header() {
    return (
        <header>
            <img src="logo.png" alt="Nordic Gamer Logo" id="logo" />
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#buy">How to buy</a></li>
                    <li><a href="#tokenomics">Tokenomics</a></li>
                    <li><a href="#roadmap">Roadmap</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
