import styled from 'styled-components';

interface MenuDrawerProps {
  isOpen: boolean;
}

export const Background = styled.div`
  position: relative;
  background-color: #272727;
  color: #fff;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  p {
    text-transform: uppercase;
    font-family: 'Anton', Arial, Helvetica, sans-serif;
    font-size: 30px;
    color: #bb9878;
  }

  li {
    margin-left: 25px;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  > svg {
    display: none;
  }

  @media (max-width: 700px) {
    width: 90vw;

    > svg {
      display: block;
    }

    ul {
      display: none;
    }
  }
`;

export const MenuDrawer = styled.ul<MenuDrawerProps>`
  position: absolute;
  background-color: #272727;
  top: 0px;
  height: 100vh;
  right: 0;
  display: ${(props): string => (props.isOpen ? 'block' : 'none')};

  svg:first-child {
    height: 44px;
    margin-left: calc(90% - 24px);
  }

  li {
    padding: 10px 0 10px 25px;
    border-bottom: solid 1px #737373;

    & + svg {
      margin: 20px 0 0 25px;
    }
  }

  @media (max-width: 700px) {
    width: 50vw;
  }
  @media (max-width: 460px) {
    width: 70vw;
  }
`;
