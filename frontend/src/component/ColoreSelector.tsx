import React from 'react';
import { ThemeType, useTheme } from '../store/ThemeContext';
import './ColoreSelector.css';

const ColorSelector = () => {
    const { theme, setTheme } = useTheme();

    const themesName: { color: ThemeType; buttonText: string }[] = [
        { color: 'light', buttonText: '🌞' },
        { color: 'dark', buttonText: '🌙' },
    ];

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.className = newTheme;
    };

    return (
        <>
            <button onClick={toggleTheme}>
                {theme === 'light' ? themesName[0].buttonText : themesName[1].buttonText}
            </button>
            {   // <select value={theme} onChange={handleChange}>
                //     {themesName.map((t) => (
                //         <option key={t.color} value={t.color}>
                //             {t.buttonText}
                //         </option>
                //     ))}
                // </select>
            }
        </>
    );
};

export default ColorSelector;