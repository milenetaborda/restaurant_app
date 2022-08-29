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
    background-color: #FFFFFF;
    
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;

export const H1 = styled.h1`
  font-size: 32px;
  line-height: 140%;
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 15px;
  }
`;

export const H3 = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
`;

export const H4 = styled.h4`
  font-size: 17px;
  line-height: 140%;
`;

export const H5 = styled.h5`
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
`;

export const H6 = styled.h6`
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 15px;
  }
`;

export const Lead = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.darkDown};

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.darkDown};

  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
`;

export const Small = styled.small`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 12px;
    line-height: 18px;
  }
`;
