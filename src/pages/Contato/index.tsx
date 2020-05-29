import React, { useCallback } from 'react';

import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import FotoPerfil from '../../assets/foto_perfil.png';
import {
  Container,
  SocialMedia,
  CopyToClipBoard,
  Contact,
  Form,
} from './styles';

const Contato: React.FC = () => {
  const onHandleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <Container>
      <Contact>
        <img src={FotoPerfil} alt="" />
        <SocialMedia>
          <CopyToClipBoard>
            <GrMail size={30} />
            <p id="clipboard">bergholz.daniel@gmail.com</p>
          </CopyToClipBoard>
          <a
            href="https://www.linkedin.com/in/daniel-gobbi-bergholz-752379149"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
            <p>Daniel Gobbi Bergholz</p>
          </a>
          <a
            href="https://www.github.com/danielbergholz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
            <p>danielbergholz</p>
          </a>
          <a
            href="https://www.youtube.com/channel/UCnmbV9eyMwIl50Ji1ObFxqg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={30} />
            <p>Daniel Berg</p>
          </a>
          <a
            href="https://www.instagram.com/berg.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
            <p>@berg.dev</p>
          </a>
        </SocialMedia>
      </Contact>
      <Form onSubmit={onHandleSubmit}>
        <h1>Entre em contato</h1>
        <input type="text" name="name" placeholder="Nome" />
        <br />
        <input type="email" name="email" placeholder="E-mail" />
        <br />
        <input type="text" name="subject" placeholder="Assunto" />
        <br />
        <textarea name="description" placeholder="Descrição" cols={120} />
        <br />
        <button type="submit">enviar</button>
      </Form>
    </Container>
  );
};

export default Contato;
