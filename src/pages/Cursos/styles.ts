import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 500ms;

  > p {
    margin-top: 40px;
    margin-bottom: 25px;
  }

  p {
    font-family: 'Anton', Helvetica, serif;
    font-size: 32px;
    text-transform: uppercase;
  }

  @media (max-width: 900px) {
    p {
      text-align: center;
    }
  }

  @media (max-width: 700px) {
    width: 90vw;
  }
`;

export const Thumbnail = styled.div`
  height: 180px;
  width: 320px;
  background-color: #717171;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;

  img {
    border-radius: 5px;
  }

  > p {
    color: #fff;
  }
`;

export const CourseList = styled.div`
  display: grid;
  gap: 30px 0;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1720px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const Course = styled.div`
  span {
    font-size: 18px;
  }
`;

export const Gold = styled.p`
  display: inline;
  color: #ebce00;
`;
