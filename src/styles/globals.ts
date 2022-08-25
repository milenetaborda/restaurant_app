import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  body {
    max-width: 100vw;
    margin: 0 auto;
    background-color: #E5E5E5;
    font-family: Montserrat, sans-serif;
  }
`;

export default GlobalStyles;
