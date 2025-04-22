import React from 'react';
import MeSVG from './MeSVG';
import './Hero.css'
import { useTheme } from '../store/ThemeContext';
import Code from './Code';



const Hero = () => {
    const { theme } = useTheme();
    return (
        <div className='parent'>
            <div className='div1'>
                <div className={`rombus ${theme}`}>
                <Code/>
                </div>
            </div>
            <div className='div2'>
                <MeSVG />
            </div>
        </div>
    );
};

export default Hero;
