import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  body {
    font-family: 'Mont', sans-serif;
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button {
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  #root {
    height: 100%;
  }
`;