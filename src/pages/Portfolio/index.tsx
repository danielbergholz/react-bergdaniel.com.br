import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Project, Text } from './styles';
import Button from '../../components/Button';
import berg from '../../assets/berg.png';
import astroMuri from '../../assets/astro_muri.png';
import upwork from '../../assets/upwork.png';
import logoBgRoxo from '../../assets/logo_bg_roxo.png';
import bossaBox from '../../assets/bossabox.jpeg';

const Portfolio: React.FC = () => {
  return (
    <Container>
      <p>Experiência</p>
      <strong>
        - Graduação:
        <span> Graduando em Engenharia de Redes de Comunicações na UnB</span>
      </strong>
      <strong>
        - Estágio:
        <span>
          {' '}
          6 meses de experiência em desenvolvimento mobile com React Native
        </span>
      </strong>

      <p>Projetos</p>

      <Project>
        <img src={bossaBox} alt="BossaBox" />
        <Text>
          <strong>
            - Função:
            <span> Desenvolvedor Fullstack</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span>
              {' '}
              Estou disponível como freelancer na plataforma Bossabox.
            </span>
          </strong>

          <Button link="https://app.bossabox.com/u/daniel-bergholz">
            Ver mais
          </Button>
        </Text>
      </Project>

      <Project>
        <img src={upwork} alt="Upwork" />
        <Text>
          <strong>
            - Função:
            <span> Desenvolvedor Fullstack</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span> Estou disponível como freelancer na plataforma Upwork.</span>
          </strong>

          <Button link="https://www.upwork.com/o/profiles/users/~01d7d71fa714d6ce9d/">
            Ver mais
          </Button>
        </Text>
      </Project>

      <Project>
        <img src={astroMuri} alt="Astro Muri" />
        <Text>
          <strong>
            - Função:
            <span> Desenvolvedor Frontend</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span>
              {' '}
              Ricardo Muri é um astrólogo famoso e influencer, e “Astro Muri” é
              um aplicativo mobile híbrido que faz streaming do seu conteúdo. Eu
              desenvolvi tudo relacionado à tela de login, o processo de
              pagamento (usando o pagseguro), e conectei todas as páginas ao
              backend (firebase).
            </span>
          </strong>
          <Link to="/portfolio/astromuri">
            <Button>Ver mais</Button>
          </Link>
        </Text>
      </Project>

      <Project>
        <img src={berg} alt="BERG" />
        <Text>
          <strong>
            - Função:
            <span> Desenvolvedor Frontend, Designer</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span>
              {' '}
              bergdaniel.com.br é o site que você está acessando. Eu o criei do
              completo zero, desde a concepção da arquitetura e navegação de
              páginas no whimsical e o design no Figma até o desenvolvimento com
              React.
            </span>
          </strong>
          <Link to="/portfolio/bergdaniel">
            <Button>Ver mais</Button>
          </Link>
        </Text>
      </Project>

      <Project>
        <img src={logoBgRoxo} alt="BERG" />
        <Text>
          <strong>
            - Função:
            <span> Fundador, Desenvolvedor Fullstack</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span> Mais detalhes em breve</span>
          </strong>
        </Text>
      </Project>
    </Container>
  );
};

export default Portfolio;
