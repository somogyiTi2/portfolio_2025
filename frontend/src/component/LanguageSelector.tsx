import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import './LanguageSelector.css'; // külső stílus hozzáadása

type LanguageOption = { value: string; optionText: string };

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("en");

    const languages: LanguageOption[] = [
        { value: 'en', optionText: 'English' },
        { value: 'hu', optionText: 'Magyar' }
    ];

    const languageSelector = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLang = e.target.value;
        setLanguage(selectedLang);
        i18n.changeLanguage(selectedLang);
    };

    return (
        <div className="language-selector">
            <select value={language} onChange={languageSelector}>
                {languages.map((lang) => (
                    <option key={lang.value} value={lang.value}>
                        {lang.optionText}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;
