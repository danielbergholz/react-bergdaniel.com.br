import React from 'react';
import { FaAndroid } from 'react-icons/fa';

import { Container, ButtonContainer } from './styles';
import astroMuri from '../../../assets/astro_muri.png';
import Button from '../../../components/Button';

const AstroMuri: React.FC = () => {
  return (
    <Container>
      <p>Astro Muri</p>
      <img src={astroMuri} alt="astro muri" />
      <strong>
        - Projeto:
        <span> Desenvolvimento de aplicativo mobile híbrido</span>
      </strong>
      <strong>
        - Função:
        <span> Desenvolvedor Frontend</span>
      </strong>
      <strong>
        - Equipe:
        <span> 5 estagiários graduandos em Engenharia na UnB</span>
      </strong>
      <strong>
        - Tecnologias do Frontend:
        <span> React Native, Redux</span>
      </strong>
      <strong>
        - Tecnologias do backend:
        <span> Firebase, Google Cloud</span>
      </strong>
      <strong>
        - Descrição completa:
        <span>
          {' '}
          Esse projeto foi um desafio do início ao fim. Fomos contratados como
          estagiários de TI em uma empresa de marketing digital que não tinha
          experiência prévia com desenvolvimento de software, ou seja, não
          haviam desenvolvedores mais experientes para mentorar a gente, fizemos
          tudo sozinhos.
        </span>
      </strong>
      <ButtonContainer>
        <Button link="https://play.google.com/store/apps/details?id=com.AstroMuri">
          <FaAndroid size={25} color="#fff" />
          Download
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default AstroMuri;
