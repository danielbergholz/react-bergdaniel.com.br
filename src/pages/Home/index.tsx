import React from 'react';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

import FotoPerfil from '../../assets/foto_perfil.png';
import { Container, Hello, Section, SocialMedia } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Hello>
        <img src={FotoPerfil} alt="" />
        <h1>Olá!</h1>
      </Hello>
      <Section>
        <p>
          Meu nome é Daniel Bergholz, sou Desenvolvedor Fullstack com foco nas
          tecnologias: React JS, React Native e Node JS
        </p>
        <SocialMedia>
          <a
            href="https://www.youtube.com/channel/UCnmbV9eyMwIl50Ji1ObFxqg/videos?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={36} color="#fff" />
            <p>Daniel Berg</p>
          </a>

          <a
            href="https://www.instagram.com/berg.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={36} color="#fff" />
            <p>@berg.dev</p>
          </a>
          <a
            href="https://www.github.com/danielbergholz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={36} color="#fff" />
            <p>danielbergholz</p>
          </a>
        </SocialMedia>
      </Section>
    </Container>
  );
};

export default Home;
