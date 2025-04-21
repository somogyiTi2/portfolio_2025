
import { useTheme } from '../store/ThemeContext';
import ColoreSelector from './ColoreSelector';
import LanguageSelector from './LanguageSelector';
import './Navbar.css'


const Navbar = () => {
    const { theme } = useTheme();
    return (
        <nav className={`nav ${theme}`} >
            <a href="#me">Me</a>
            <a href="#page2">Munkák</a>
            <div>
                <ColoreSelector />
                <LanguageSelector />
            </div>
        </nav>
    );
};

export default Navbar;
