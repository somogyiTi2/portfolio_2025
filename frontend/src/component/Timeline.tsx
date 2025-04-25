import React, { useState } from 'react';
import './Timeline.css';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../store/theme';

type TimelineItem = {
    id: number;
    year: string;
    description: string;
    image: string;
    categorie: string;
    link: string;
};

type ExperienceSelectorItem = {
    title: string;
    value: string;
};

const Timeline: React.FC = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const experiencesSelector = t('experiencesSelector', { returnObjects: true }) as ExperienceSelectorItem[];
    const [SelectedCategorie, setSelectedCategorie] = useState('all');
    const allExperiences = t('experiences', { returnObjects: true }) as TimelineItem[];

    const experiencesSelectorHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
        const selectedValue = event.currentTarget.value;
        setSelectedCategorie(selectedValue);
    }

    const filteredExperiences =
        (SelectedCategorie === 'all'
            ? allExperiences
            : allExperiences.filter((item) => item.categorie === SelectedCategorie)
        ).slice().reverse();

    return (
        <div className={`experience-page ${theme} timeline-container`}>
            <div className="timeline-container">
                <h2 className="timeline-title">{t('expericences-title')}</h2>
                <div className={`selector-wrapper ${theme}`}>
                    {experiencesSelector.map((item: ExperienceSelectorItem) => (
                        <button
                            key={item.value}
                            onClick={experiencesSelectorHandle}
                            value={item.value}
                            className={item.value === SelectedCategorie ? 'active' : ''}
                        >
                            {item.title}
                        </button>
                    ))}

                </div>

                <div className="timeline">

                    {filteredExperiences.map((item: TimelineItem) => (
                        <a key={item.id} href={item.link} >
                            <div key={item.id} className={`timeline-item ${item.link ? 'haveLink' : ''} ${theme}`}>
                                <div className="content">
                                    <img src={item.image} alt="Ikona" />
                                    <h3>{item.year}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}

                </div>
            </div>
        </div>

    );
};

export default Timeline;
