import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import Logo from './Logo';
import '../styles/css/Gradient.css';
import '../styles/css/Button.css';

const Gradient: React.FC = () => {
    const [isGradient, setIsGradient] = useState(false);
    const [isLogoVisible, setIsLogoVisible] = useState(false);

    const [isLoaderVisible, setLoaderVisibility] = useState(true);

    const handleButtonClick = () => {
        setIsGradient(true);
        setTimeout(() => {
            setIsGradient(false);
            setIsLogoVisible(false);
        }, 3000);

        setTimeout(() => {
            setIsLogoVisible(true);
        }, 1000);

        setTimeout(()  =>  {
            setLoaderVisibility(false);
        }, 3000);
    };

    return (
        <>
            <AnimatePresence>
                { isLoaderVisible && (
                    <motion.div 
                    className="loader-wrapper"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                    <div className={`sample-background ${isGradient ? 'gradient' : ''}`}></div>
                    <div className="button-container">
                        <Button onClick={handleButtonClick} />
                    </div>
                    <Logo isVisible={isLogoVisible} />
                </motion.div> 
                )};
            </AnimatePresence>
        </>
    );
};

export default Gradient;