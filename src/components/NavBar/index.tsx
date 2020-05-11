import React from 'react';
import { FiSun } from 'react-icons/fi';

import { Background, Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Background>
      <Container>
        <p>berg</p>
        <ul>
          <FiSun size={28} color="#D4AE8B" />
          <li>cursos</li>
          <li>portfolio</li>
          <li>contato</li>
        </ul>
      </Container>
    </Background>
  );
};

export default NavBar;
