import React from 'react';
import { FaGithub, FaYoutube } from 'react-icons/fa';

import { Container, ButtonContainer } from './styles';
import bergDaniel from '../../../assets/berg.png';
import Button from '../../../components/Button';

const BergDaniel: React.FC = () => {
  return (
    <Container>
      <p>Berg Daniel</p>
      <img src={bergDaniel} alt="berg daniel" />
      <strong>
        - Projeto:
        <span> Desenvolvimento Web</span>
      </strong>
      <strong>
        - Função:
        <span> Desenvolvedor Frontend, Designer</span>
      </strong>
      <strong>
        - Tecnologias do Frontend:
        <span> React</span>
      </strong>
      <strong>
        - Hospedagem:
        <span> Netlify</span>
      </strong>
      <strong>
        - Descrição completa:
        <span>
          {' '}
          A principal função desse site era ser o meu portfolio, mas eu quis ir
          além disso. Eu sempre digo nas minhas redes sociais que o YouTube é um
          dos melhores recursos para se estudar um assunto novo, porém existem
          muitas distrações no site. Então coloquei aqui todos os meus cursos
          gratuitos publicados no YouTube, para assim, meus seguidores
          conseguirem ter melhor foco para estudar. E para tornar isso possível,
          tive que consumir a API do YouTube para pegar dados de playlists e
          vídeos.
        </span>
      </strong>
      <ButtonContainer>
        <Button link="https://github.com/danielbergholz/bergdaniel.com.br">
          <FaGithub size={25} color="#fff" />
          Código Fonte
        </Button>
        <Button link="https://www.youtube.com/playlist?list=PLbV6TI03ZWYWq8NlvpMGUwaVlzzfyZeld">
          <FaYoutube size={25} color="#fff" />
          Tutorial
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default BergDaniel;
