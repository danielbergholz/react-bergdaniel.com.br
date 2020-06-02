import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  background-color: #bb9878;
  color: #fff;
  font-family: 'Anton', Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: 21px;

  svg {
    margin-right: 10px;
  }

  @media (max-width: 700px) {
    font-size: 19px;
  }
`;
