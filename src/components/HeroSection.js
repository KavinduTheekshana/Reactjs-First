import React from 'react';
import {Button} from "./Button";
import './HeroSection.css';
import '../App.css'

function HeroSection(props) {
    return (
        <div className='hero-container'>
            <video src={'videos/video-1.mp4'} autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are You waiting for?</p>
            <div className="hero-btns">
                <Button onclick='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button onclick='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle'/> </Button>
            </div>
        </div>
    );
}

export default HeroSection;