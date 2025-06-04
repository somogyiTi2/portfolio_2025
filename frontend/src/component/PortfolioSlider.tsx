import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-bootstrap/Carousel';

import ExampleCarouselImage from './ExampleCarouselImage';
import { useTheme } from '../store/theme';
import './PortfolioSlider.css';

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
  const { theme } = useTheme();
  const [buttonSelected, setButtonSelected] = useState('all');

  const references = useMemo(
    () => [...(t('references', { returnObjects: true }) as ReferencesType[])].reverse(),
    [t]
  );

  const buttons = useMemo(
    () => ['all', ...new Set(references.flatMap(ref => ref.technologies))],
    [references]
  );

  const filteredReferences = useMemo(
    () =>
      buttonSelected === 'all'
        ? references
        : references.filter(ref => ref.technologies.includes(buttonSelected)),
    [buttonSelected, references]
  );

  return (
    <>
      <div className='slider-button'>
        <h1>{t('referencesTitle')}</h1>
        {buttons.map(btn => (
          <button
            key={btn}
            className={`slider-selector-button ${theme} ${buttonSelected === btn ? 'active' : ''}`}
            onClick={() => setButtonSelected(btn)}
          >
            {btn === 'all' ? t('allButton') : btn}
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
};

export default CarouselFadeExample;
