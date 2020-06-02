import React from 'react';

import { Container, Course, Thumbnail, CourseList, Gold } from './styles';

const Cursos: React.FC = () => {
  return (
    <Container>
      <p>Cursos gratuitos</p>
      <CourseList>
        <Course>
          <Thumbnail>
            <img
              src="https://i.ytimg.com/vi/pL9nX6Ac2Lc/mqdefault.jpg"
              alt="Javascript"
            />
          </Thumbnail>
          <span> Curso de Javascript</span>
        </Course>
        <Course>
          <Thumbnail>
            <img
              src="https://i.ytimg.com/vi/VRR3V42EdSg/mqdefault.jpg"
              alt="Terminal Linux"
            />
          </Thumbnail>
          <span> Curso de Terminal Linux</span>
        </Course>
        <Course>
          <Thumbnail>
            <img
              src="https://i.ytimg.com/vi/ck7WWHaAgpU/mqdefault.jpg"
              alt="Trello"
            />
          </Thumbnail>
          <span> Curso de Trello</span>
        </Course>
        <Course>
          <Thumbnail>
            <p> em breve</p>
          </Thumbnail>
          <span> Curso de CSS</span>
        </Course>
      </CourseList>

      <p>
        Cursos <Gold> premium</Gold>
      </p>
      <CourseList>
        <Course>
          <Thumbnail>
            <p> em breve</p>
          </Thumbnail>
          <span> Curso de React</span>
        </Course>
        <Course>
          <Thumbnail>
            <p> em breve</p>
          </Thumbnail>
          <span> Curso de React Native</span>
        </Course>
        <Course>
          <Thumbnail>
            <p> em breve</p>
          </Thumbnail>
          <span> Curso de Node</span>
        </Course>
      </CourseList>
    </Container>
  );
};

export default Cursos;
