import React from 'react';

import NavBar from './components/NavBar';
import { GlobalStyle } from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <h1>Bem vindos ao meu site!</h1>
      <p>Meu nome é Daniel Bergholz, me siga nas redes sociais!</p>
      <a
        href="https://www.instagram.com/berg.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        @berg.dev
      </a>
      <br />
      <a
        href="https://www.youtube.com/channel/UCnmbV9eyMwIl50Ji1ObFxqg/videos?view_as=subscriber"
        target="_blank"
        rel="noopener noreferrer"
      >
        Daniel Berg
      </a>
      <GlobalStyle />
    </>
  );
};

export default App;
