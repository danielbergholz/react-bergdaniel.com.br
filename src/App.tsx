import React from 'react';

import Home from './pages/Home';
import NavBar from './components/NavBar';
import { GlobalStyle } from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Home />
      <GlobalStyle />
    </>
  );
};

export default App;
