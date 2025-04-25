import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../store/theme';
import { useState } from 'react';
import "./PortfolioSlider.css"

type ReferencesType = {
  id: number;
  title: string;
  img: string;
  text: string;
  link: string;
  technologies: string[];
  git: string;
};


const CarouselFadeExample = () => {
  const { t } = useTranslation();
  const references = (t('references', { returnObjects: true }) as ReferencesType[]).reverse();
  const buttons = [...new Set(references.flatMap(item => item.technologies))];
  const { theme } = useTheme();
  const [buttonSelected, setButtonSelected] = useState<string>('all');

  const filteredReferences = buttonSelected === 'all'
    ? references
    : references.filter((data) => data.technologies.includes(buttonSelected));

  return (
    <>
      <div className='slider-button'>
        <h1>{t('referencesTitle')}</h1>
        <button key="all" className={`slider-selector-button ${theme} ${buttonSelected === "all" ? 'active' : ''}`} onClick={() => setButtonSelected("all")}> {t('allButton')}</button>
        {buttons.map((item) => (
          <button
            key={item}
            className={`slider-selector-button ${theme} ${buttonSelected === item ? 'active' : ''}`}
            onClick={() => setButtonSelected(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <Carousel fade>
        {filteredReferences.map(item => (
          <Carousel.Item key={item.id}>
            <ExampleCarouselImage item={item} theme={theme} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default CarouselFadeExample;
