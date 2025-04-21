import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';



const Hero = () => {
    const { t } = useTranslation();
    
    return (
        <div>
            <h1>{t('welcome')}</h1>
        </div>
    );
};

export default Hero;
