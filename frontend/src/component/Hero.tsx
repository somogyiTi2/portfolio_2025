import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import MeSVG from './MeSVG';



const Hero = () => {
    const { t } = useTranslation();
    
    return (
        <div>
            <MeSVG/>
            <h1>{t('welcome')}</h1>
        </div>
    );
};

export default Hero;
