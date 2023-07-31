import React from 'react';
import selfImg from './assets/DSC5940.jpg'

export default function AboutMe() {
    return (
        <div className='about-me'>
            <section className='main-container about-container'>
                <div className='self-image'>
                    <img src={selfImg} alt='Me Fabian Barranco' />
                </div>
                <p className='about-description'>
                    By enrolling in The Coding Bootcamp at The University of Utah, I am passionately committed to transforming my life and pursuing a thriving career rather than settling for a mere job.
                    My unwavering motivation stems from the profound love and responsibility I have towards my family, as they are my constant inspiration to strive for personal growth and excellence.
                    Guided by the footsteps of my tech-savvy younger brother, I have wholeheartedly chosen the path of coding, drawn by the boundless potential it offers in the realm of professional opportunities.
                    I am determined to harness my skills, knowledge, and creativity to unlock a world of innovative possibilities and make a lasting impact in the dynamic landscape of technology.
                </p>
            </section>
        </div>
    );
}