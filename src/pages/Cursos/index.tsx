import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Course, Thumbnail, CourseList, Gold } from './styles';

const Cursos: React.FC = () => {
  return (
    <Container>
      <p>Cursos gratuitos</p>
      <CourseList>
        <Course>
          <Link
            to={{
              pathname: '/cursos/javascript',
              state: {
                courseName: 'Curso de Javascript',
                playlistId: 'PLbV6TI03ZWYVP6EByYoUxZJeZaqitHi9r',
                slidesLink:
                  'https://mega.nz/folder/cCRglawa#xS4MEA4NrhBgplCCLxqFDA',
              },
            }}
          >
            <Thumbnail>
              <img
                src="https://i.ytimg.com/vi/pL9nX6Ac2Lc/maxresdefault.jpg"
                alt="Javascript"
              />
            </Thumbnail>
          </Link>
          <span> Curso de Javascript</span>
        </Course>
        <Course>
          <Link
            to={{
              pathname: '/cursos/linux',
              state: {
                courseName: 'Curso de Terminal Linux',
                playlistId: 'PLbV6TI03ZWYXXwbP2TNTbviUaFh6YqqVt',
                slidesLink:
                  'https://mega.nz/#F!AbAQEYBT!UYpnwXoXwjFcDhcf2ZXi3g',
              },
            }}
          >
            <Thumbnail>
              <img
                src="https://i.ytimg.com/vi/VRR3V42EdSg/maxresdefault.jpg"
                alt="Terminal Linux"
              />
            </Thumbnail>
          </Link>
          <span> Curso de Terminal Linux</span>
        </Course>
        <Course>
          <Link
            to={{
              pathname: '/cursos/trello',
              state: {
                courseName: 'Curso de Trello',
                playlistId: 'PLbV6TI03ZWYX0JAlemRNK6IXoeXscW5C8',
                slidesLink: '',
              },
            }}
          >
            <Thumbnail>
              <img
                src="https://i.ytimg.com/vi/ck7WWHaAgpU/maxresdefault.jpg"
                alt="Trello"
              />
            </Thumbnail>
          </Link>
          <span> Curso de Trello</span>
        </Course>
        <Course>
          <Thumbnail id="thumbnail">
            <p> em breve</p>
          </Thumbnail>
          <span> Curso de CSS</span>
        </Course>
      </CourseList>

      <p>
        Cursos
        <Gold> premium</Gold>
      </p>
      <CourseList>
        <Course>
          <Thumbnail id="thumbnail">
            <p> em breve</p>
          </Thumbnail>
          <span> Curso de React</span>
        </Course>
        <Course>
          <Thumbnail id="thumbnail">
            <p> em breve</p>
          </Thumbnail>
          <span> Curso de Node</span>
        </Course>
      </CourseList>
    </Container>
  );
};

export default Cursos;
