import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video autoPlay loop muted>
                <source src='/videos/video-1.mp4' type='video/mp4' />
            </video>
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch Trailer <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
