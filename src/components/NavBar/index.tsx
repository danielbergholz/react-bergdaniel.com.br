import React, { useState, useCallback } from 'react';
import { FiSun, FiMenu, FiX } from 'react-icons/fi';

import { Background, Container, MenuDrawer } from './styles';

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback((): void => {
    setOpen(!open);
  }, [open]);

  return (
    <>
      <Background>
        <Container>
          <p>berg</p>
          <FiMenu size={28} color="#fff" onClick={handleOpen} />
          <ul>
            <FiSun size={28} color="#D4AE8B" />
            <li>cursos</li>
            <li>portfolio</li>
            <li>contato</li>
          </ul>
        </Container>
        <MenuDrawer isOpen={open}>
          <FiX size={28} color="#fff" onClick={handleOpen} />
          <li>cursos</li>
          <li>portfolio</li>
          <li>contato</li>
          <FiSun size={28} color="#D4AE8B" />
        </MenuDrawer>
      </Background>
    </>
  );
};

export default NavBar;
