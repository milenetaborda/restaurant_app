import styled, { css } from "styled-components";

export const SearchContainer = styled.div<{ isInputInHeader?: boolean }>`
  display: none;

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: block;
    width: 100%;
    margin-bottom: 30px;
  }

  ${({ isInputInHeader }) =>
    isInputInHeader &&
    css`
      display: block;
      min-width: 540px;
      max-width: 540px;
      margin: 0 auto;

      ${({ theme }) => theme.breakpoints.down("md")} {
        display: none;
      }
    `}
`;
