import styled, { createGlobalStyle } from "styled-components";

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
    
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
  }
`;

export default GlobalStyles;

export const H1 = styled.h1`
  font-size: 32px;
  line-height: 140%;
`;

export const H2 = styled.h2`
  font-size: 24px;
  line-height: 140%;
`;

export const H3 = styled.h3`
  font-size: 20px;
  line-height: 140%;
`;

export const H4 = styled.h4`
  font-size: 17px;
  line-height: 140%;
`;
