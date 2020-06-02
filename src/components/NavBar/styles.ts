import styled from 'styled-components';

interface MenuDrawerProps {
  isOpen: boolean;
  tab: number;
}

interface ContainerProps {
  tab: number;
}

export const Background = styled.div`
  position: relative;
  background-color: #272727;
  color: #fff;

  a {
    color: #fff;
  }
`;

export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  a:nth-child(${(props): number => props.tab}) {
    color: #bb9878;
  }

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

  a:nth-child(${(props): number => props.tab}) {
    color: #bb9878;
  }

  svg:first-child {
    height: 44px;
    color: #fafafa;
    margin-left: calc(90% - 24px);
  }

  li {
    padding: 10px 0 10px 25px;
    border-bottom: solid 1px #737373;
  }

  svg:last-child {
    margin: 20px 0 0 25px;
  }

  @media (max-width: 700px) {
    width: 50vw;
    animation-name: menuDrawerAnimation700;
    animation-duration: 200ms;
  }

  @media (max-width: 460px) {
    width: 70vw;
    animation-name: menuDrawerAnimation460;
    animation-duration: 200ms;
  }

  @keyframes menuDrawerAnimation700 {
    0% {
      width: 0;
    }

    100% {
      width: 50vw;
    }
  }

  @keyframes menuDrawerAnimation460 {
    0% {
      width: 0;
    }

    100% {
      width: 70vw;
    }
  }
`;
