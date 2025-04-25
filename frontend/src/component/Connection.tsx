import './Connection.css';
import facebook from '../assets/facebook.svg';
import github from '../assets/github.svg';
import phone from '../assets/phone.svg';
import linkdin from '../assets/linkedin.svg';
import { useTheme } from '../store/theme';
import { useTranslation } from 'react-i18next';

const Connection = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const phoneNumber: string = "+36204113514";
    const openDialer = (): void => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <div className={`contactSelection ${theme}`}>
            <h2>{t('connectionTitle')}</h2>
            <p>{t('connectionDescripton')}</p>
            <div className="cards">
                <div className="card">
                    <img src={facebook} alt="facebook" />
                    <a href="https://www.facebook.com/somogyitibor97/">
                        <button>Kattints ide</button>
                    </a>
                </div>
                <div className="card">
                    <img src={github} alt="github" />
                    <a href="https://github.com/somogyiTi2">
                        <button>Kattints ide</button>
                    </a>
                </div>
                <div className="card">
                    <img src={linkdin} alt="linkdin" />
                    <a href="https://www.linkedin.com/in/somogyi-tibor-linkdin/">
                        <button>Kattints ide</button>
                    </a>
                </div>
                <div className="card showHover">
                    <img src={phone} alt="phone" />
                    <button onClick={openDialer}>Kattints ide</button>
                    <p >{phoneNumber}</p>
                </div>
            </div>
        </div>
    );
};

export default Connection;
