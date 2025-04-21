import React from 'react';
import './StarBackground.css';
import { useTheme } from '../store/ThemeContext';

interface TryStarProps {
    children?: React.ReactNode;
}

const StarBackground = ({ children }: TryStarProps) => {
    const { theme } = useTheme();
    return (
        <div className={`starbackground ${theme}`}>
            <div className='star star1'></div>
            <div className='star star2'></div>
            <div className='star star3'></div>
            <div className="shooting-stars-container">
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
            </div>
            <div className='childrenStar'>
                {children}
            </div>
        </div>
    )
}

export default StarBackground