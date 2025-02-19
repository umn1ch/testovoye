import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import '../styles/css/Logo.css';

interface LogoProps  {
    isVisible: boolean;
}

const Logo: React.FC<LogoProps> = ({ isVisible }) => {
    const controlsB = useAnimation();
    const controlsT = useAnimation();
    const [showT, setShowT] = useState(false);

    useEffect(() => {
        const sequence = async () => {
            if (isVisible) {
                setShowT(true);
                await controlsB.start({ x: '95vw', transition: { type: 'tween', duration: 1 } });
                controlsB.start({ x: '45vw', transition: { type: 'tween', duration: 1 } });
                controlsT.start({ x: '45vw', transition: { type: 'tween', duration: 1 } });
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
                            exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        >
                            B
                        </motion.div>
                        { showT && (
                            <motion.div 
                                className="second-letter"
                                initial={{ x: '100vw' }}
                                animate={controlsT}
                                exit={{ opacity: 0, transition: { duration: 0.5 } }}
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
