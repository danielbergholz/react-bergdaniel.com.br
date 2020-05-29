import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyles';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Cursos from './pages/Cursos';
import Portfolio from './pages/Portfolio';

const Routes: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contato" component={Contato} />
      <Route path="/cursos" component={Cursos} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
