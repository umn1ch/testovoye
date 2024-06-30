import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import '../styles/css/Logo.css';

const Logo = ({ isVisible }) => {
    const controlsB = useAnimation();
    const controlsT = useAnimation();
    const [showT, setShowT] = useState(false);

    useEffect(() => {
        const sequence = async () => {
            if (isVisible) {
                setShowT(true);
                await controlsB.start({ x: '95vw', transition: { type: 'tween', duration: 2.5 } });
                controlsB.start({ x: '46vw', transition: { type: 'tween', duration: 2.5 } });
                controlsT.start({ x: '46vw', transition: { type: 'tween', duration: 2.5 } });
            }
        };

        sequence();
    }, [isVisible, controlsB, controlsT]);

    return (
        <div className="big-container">
            <AnimatePresence>
                { isVisible && (
                    <div className="letters-container">
                        <motion.div 
                            className="first-letter"
                            initial={{ x: '-100vw' }}
                            animate={controlsB}
                            exit={{ opacity: 0, transition: { duration: 1 } }}
                        >
                            B
                        </motion.div>
                        { showT && (
                            <motion.div 
                                className="second-letter"
                                initial={{ x: '100vw' }}
                                animate={controlsT}
                                exit={{ opacity: 0, transition: { duration: 1 } }}
                            >
                                T
                            </motion.div>
                        )}
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Logo;
