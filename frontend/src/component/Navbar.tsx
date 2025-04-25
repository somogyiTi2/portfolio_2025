import { useTranslation } from 'react-i18next';
import { useTheme } from '../store/theme';
import ColoreSelector from './ColoreSelector';
import LanguageSelector from './LanguageSelector';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`nav ${theme}`}>
            <div className="nav-header">
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
                
            </div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a href="#me">{t('navbar.about')}</a>
                <a href="#timeline">{t('navbar.expericences')}</a>
                <a href="#portfolio">{t('navbar.references')}</a>
                <a href="#connection">{t('navbar.connection')}</a>
                <div className="nav-controls">
                    <ColoreSelector />
                    <LanguageSelector />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
