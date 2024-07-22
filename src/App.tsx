import React from 'react';
import Navbar from './Components/Navbar';
import AppRoutes from './Router/Router';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;
