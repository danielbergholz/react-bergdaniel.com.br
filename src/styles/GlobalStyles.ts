import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height:100%;
  }

  body{
    background-color: #444444;
    -webkit-font-smoothing: antialiased !important;
    color: #fafafa;
  }


  body, input, button {
    font-size: 14px;
    font-family: 'Roboto', Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;

  }

  svg {
    cursor: pointer
  }

  ul {
    list-style:none;
  }

  li {
    list-style-type: none;
    text-transform: uppercase;
    font-family: 'Anton', Helvetica, Arial;
    font-size: 30px;
  }

  a {
    text-decoration:none;
  }
`;
