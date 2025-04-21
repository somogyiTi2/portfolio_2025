import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import MeSVG from './MeSVG';
import './Hero.css'



const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className='parent'>
            <div className='div1'>
                <h1>{t('welcome')}</h1>
            </div>
            <div className='div2'>
                <MeSVG />
            </div>
        </div>
    );
};

export default Hero;
