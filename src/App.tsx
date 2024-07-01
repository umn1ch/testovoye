// import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Gradient from './components/Gradient';
import Logo from './components/Logo';
import BasicPage from './components/BasicPage';

function App() {
  const isVisible = false; 
  const isLoaderVisible = true;
  // const [isLoaderVisible, setLoaderVisibility ] = useState(true);

  // setTimeout(() => {
  //   setLoaderVisibility(false);
  // }, 4500);

  return (
    <>
      <AnimatePresence> 
        { isLoaderVisible && (
          <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
            <Gradient />
            <Logo isVisible={isVisible} />
          </motion.div>
        )}
      </AnimatePresence>
      <BasicPage />
    </>
  );
}

export default App;
