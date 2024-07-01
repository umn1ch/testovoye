// import React from 'react';
import Gradient from './components/Gradient';
import Logo from './components/Logo';

function App() {
  const isVisible = false; 

  return (
    <>
      <Gradient />
      <Logo isVisible={isVisible} />
    </>
  );
}

export default App;
