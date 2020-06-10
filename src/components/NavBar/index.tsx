import React, { useState, useCallback } from 'react';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useTheme } from '../../context/theme';
import { Background, Container, MenuIcon, MenuBar } from './styles';

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(0);

  const { changeTheme, theme, lock } = useTheme();

  const handleOpen = useCallback(
    (close = false): void => {
      if (close) {
        setOpen(false);
        setTab(0);
      } else {
        setOpen(!open);
      }
      lock();
    },
    [open, lock],
  );

  const handleNewTab = useCallback(
    (n: number): void => {
      setOpen(false);
      setTab(n);
      lock();
    },
    [lock],
  );

  return (
    <Background>
      <Container tab={tab} isOpen={open}>
        <Link to="/" onClick={(): void => handleOpen(true)}>
          <p>berg</p>
        </Link>
        <MenuIcon onClick={(): void => handleOpen()} isOpen={open} tab={tab}>
          <MenuBar />
          <MenuBar />
          <MenuBar />
        </MenuIcon>
        <ul>
          {theme === 'dark' ? (
            <FiSun size={28} color="#D4AE8B" onClick={changeTheme} />
          ) : (
            <FaMoon size={22} color="#D4AE8B" onClick={changeTheme} />
          )}
          <li>
            <Link to="/cursos" onClick={(): void => handleNewTab(2)}>
              cursos
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={(): void => handleNewTab(3)}>
              portfolio
            </Link>
          </li>
          <li>
            <Link to="/contato" onClick={(): void => handleNewTab(4)}>
              contato
            </Link>
          </li>
        </ul>
      </Container>
    </Background>
  );
};

export default NavBar;
