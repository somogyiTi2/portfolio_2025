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
                <a href="https://www.facebook.com/somogyitibor97/">
                    <div className="card">
                        <img src={facebook} alt="facebook" />
                        <button>Kattints ide</button>
                    </div>
                </a>
                <a href="https://github.com/somogyiTi2">
                    <div className="card">
                        <img src={github} alt="github" />
                        <button>Kattints ide</button>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/somogyi-tibor-linkdin/">
                    <div className="card">
                        <img src={linkdin} alt="linkdin" />
                        <button>Kattints ide</button>
                    </div>
                </a>
                <div className="card ">
                <img src={phone} alt="Telefon ikon" />
                    <button className="icon-wrapper" onClick={openDialer}>
                     <img src={phone} alt="Telefon ikon" />
                    </button>
                    <p className='showHover'>{phoneNumber}</p>
                </div>
            </div>
        </div>
    );
};

export default Connection;
