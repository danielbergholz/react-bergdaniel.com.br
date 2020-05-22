import React from 'react';

import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import FotoPerfil from '../../assets/foto_perfil.png';
import { Container, SocialMedia, CopyToClipBoard } from './styles';

const Contato: React.FC = () => {
  return (
    <Container>
      <img src={FotoPerfil} alt="" />
      <SocialMedia>
        <CopyToClipBoard>
          <GrMail size={30} color="#fff" />
          <p id="clipboard">bergholz.daniel@gmail.com</p>
        </CopyToClipBoard>
        <a
          href="https://www.linkedin.com/in/daniel-gobbi-bergholz-752379149"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} color="#fff" />
          <p>Daniel Gobbi Bergholz</p>
        </a>
        <a
          href="https://www.github.com/danielbergholz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} color="#fff" />
          <p>danielbergholz</p>
        </a>
        <a
          href="https://www.youtube.com/channel/UCnmbV9eyMwIl50Ji1ObFxqg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={30} color="#fff" />
          <p>Daniel Berg</p>
        </a>
        <a
          href="https://www.instagram.com/berg.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} color="#fff" />
          <p>@berg.dev</p>
        </a>
      </SocialMedia>
    </Container>
  );
};

export default Contato;
