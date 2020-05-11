import styled from 'styled-components';

export const Background = styled.div`
  background-color: #272727;
  color: #fff;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    text-transform: uppercase;
    font-family: 'Anton', Arial, Helvetica, sans-serif;
    font-size: 30px;
    color: #bb9878;
  }

  li {
    text-transform: uppercase;
    font-family: 'Anton', Arial, Helvetica, sans-serif;
    font-size: 30px;
    padding-left: 25px;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
