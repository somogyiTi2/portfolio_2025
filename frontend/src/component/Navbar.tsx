
import { useTheme } from '../store/theme';
import ColoreSelector from './ColoreSelector';
import LanguageSelector from './LanguageSelector';
import './Navbar.css'


const Navbar = () => {
    const { theme } = useTheme();
    return (
        <nav className={`nav ${theme}`} >
            <a href="#me">Me</a>
            <a href="#timeline">Munkák</a>
            <a href="#portfolio">Portfólió</a>
            <div>
                <ColoreSelector />
                <LanguageSelector />
            </div>
        </nav>
    );
};

export default Navbar;
