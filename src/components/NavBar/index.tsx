import React, { useState, useCallback } from 'react';
import { FiSun, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Background, Container, MenuDrawer } from './styles';

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(0);

  const handleOpen = useCallback(
    (close = false): void => {
      if (close) {
        setOpen(false);
        setTab(0);
      } else {
        setOpen(!open);
      }
    },
    [open],
  );

  const handleNewTab = useCallback((n: number): void => {
    setOpen(false);
    setTab(n);
  }, []);

  return (
    <Background>
      <Container tab={tab}>
        <Link to="/" onClick={(): void => handleOpen(true)}>
          <p>berg</p>
        </Link>
        <FiMenu size={28} color="#fff" onClick={(): void => handleOpen()} />
        <ul>
          <FiSun size={28} color="#D4AE8B" />
          <Link to="contato" onClick={(): void => handleNewTab(2)}>
            <li>cursos</li>
          </Link>
          <Link to="contato" onClick={(): void => handleNewTab(3)}>
            <li>portfolio</li>
          </Link>
          <Link to="contato" onClick={(): void => handleNewTab(4)}>
            <li>contato</li>
          </Link>
        </ul>
      </Container>
      <MenuDrawer isOpen={open} tab={tab}>
        <FiX size={28} color="#fff" onClick={(): void => handleOpen()} />
        <Link to="contato" onClick={(): void => handleNewTab(2)}>
          <li>cursos</li>
        </Link>
        <Link to="contato" onClick={(): void => handleNewTab(3)}>
          <li>portfolio</li>
        </Link>
        <Link to="contato" onClick={(): void => handleNewTab(4)}>
          <li>contato</li>
        </Link>
        <FiSun size={28} color="#D4AE8B" />
      </MenuDrawer>
    </Background>
  );
};

export default NavBar;
