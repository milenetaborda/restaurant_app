import styled, { css } from "styled-components";
import { H2, Lead } from "~/styles/globals";

export const HeaderContainer = styled.header<{ isHeightVariant?: boolean }>`
  height: ${({ isHeightVariant }) => (isHeightVariant ? "265px" : "375px")};
  background: url("assets/background.png") no-repeat center;
  padding: 30px 33px 60px;

  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(0, 65px)) 1fr;
  gap: 30px;

  ${({ isHeightVariant }) =>
    isHeightVariant &&
    css`
      padding-bottom: 38px;
      background-position: bottom;
    `}

  ${({ theme }) => theme.breakpoints.down("sm")} {
    background-image: url("assets/background-mobile.svg");
    background-size: cover;

    grid-template-columns: 1fr repeat(12, minmax(0, 20px)) 1fr;
    gap: 8px;

    padding-top: 40px;
    height: 274px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    ${({ isHeightVariant }) =>
      isHeightVariant &&
      css`
        display: none;
      `};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column: 2 / span 12;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-column: 1 / span 15;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div<{ isVisibilityHidden?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;

  ${({ isVisibilityHidden }) =>
    isVisibilityHidden &&
    css`
      visibility: hidden;
    `}

  ${({ theme }) => theme.breakpoints.down("md")} {
    align-items: flex-start;
    text-align: start;
  }
`;

export const HeaderTitle = styled(H2)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-width: 230px;
  }
`;

export const HeaderSubtitle = styled(Lead)`
  color: #676666;
  margin-top: 6px;
  max-width: 350px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-top: 20px;
    max-width: 315px;
  }
`;

export const LogoImage = styled.div`
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
