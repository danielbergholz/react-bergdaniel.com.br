import React from 'react';

import Routes from './routes';
import { ThemeProvider } from './context/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
