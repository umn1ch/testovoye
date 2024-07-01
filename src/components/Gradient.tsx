import React, { useState } from "react";
import Button from './Button';
import Logo from './Logo';
import '../styles/css/Gradient.css';
import '../styles/css/Button.css';

const Gradient: React.FC = () => {
    const [isGradient, setIsGradient] = useState(false);
    const [isLogoVisible, setIsLogoVisible] = useState(false);

    const handleButtonClick = () => {
        setIsGradient(true);
        setTimeout(() => {
            setIsGradient(false);
            setIsLogoVisible(false);
        }, 3000);

        setTimeout(() => {
            setIsLogoVisible(true);
        }, 1000);
    };

    return (
        <>
            <div className={`sample-background ${isGradient ? 'gradient' : ''}`}></div>
            <div className="button-container">
                <Button onClick={handleButtonClick} />
            </div>
            <Logo isVisible={isLogoVisible} />
        </>
    );
};

export default Gradient;