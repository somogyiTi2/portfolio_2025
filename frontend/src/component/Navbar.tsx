
import { useTranslation } from 'react-i18next';
import { useTheme } from '../store/theme';
import ColoreSelector from './ColoreSelector';
import LanguageSelector from './LanguageSelector';
import './Navbar.css'


const Navbar = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
        <nav className={`nav ${theme}`} >
            <a href="#me">{t('navbar.about')}</a>
            <a href="#timeline">{t('navbar.expericences')}</a>
            <a href="#portfolio">{t('navbar.references')}</a>
            <a href="#connection">{t('navbar.connection')}</a>
            <div className="nav-controls">
                <ColoreSelector />
                <LanguageSelector />
            </div>
        </nav>
    );
};

export default Navbar;
