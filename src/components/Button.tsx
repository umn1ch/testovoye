import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import '../styles/css/Button.css';

interface ButtonProps {
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
    const [ isVisible, setIsVisible ] = React.useState(true);

    return (
        <AnimatePresence>
            {isVisible && (
            <motion.button 
                onClick={() => {
                    onClick();
                    setIsVisible(false);
                    setTimeout(() => {
                        setIsVisible(true);
                    }, 3000)
                }}
                className="btn"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                *ЖМАК*
            </motion.button>)};
        </AnimatePresence>
    );
};

export default Button;


