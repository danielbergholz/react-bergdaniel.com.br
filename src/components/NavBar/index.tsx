import React, { useState, useCallback } from 'react';
import { FiSun, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Background, Container, MenuDrawer } from './styles';

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback(
    (close = false): void => {
      if (close) {
        setOpen(false);
      } else {
        setOpen(!open);
      }
    },
    [open],
  );

  return (
    <Background>
      <Container>
        <Link to="/" onClick={(): void => handleOpen(true)}>
          <p>berg</p>
        </Link>
        <FiMenu size={28} color="#fff" onClick={(): void => handleOpen()} />
        <ul>
          <FiSun size={28} color="#D4AE8B" />
          <li>cursos</li>
          <li>portfolio</li>
          <Link to="contato">
            <li>contato</li>
          </Link>
        </ul>
      </Container>
      <MenuDrawer isOpen={open}>
        <FiX size={28} color="#fff" onClick={(): void => handleOpen()} />
        <li>cursos</li>
        <li>portfolio</li>
        <Link to="contato" onClick={handleOpen}>
          <li>contato</li>
        </Link>
        <FiSun size={28} color="#D4AE8B" />
      </MenuDrawer>
    </Background>
  );
};

export default NavBar;
