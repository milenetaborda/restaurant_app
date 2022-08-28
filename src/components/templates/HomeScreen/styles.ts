import styled, { css } from "styled-components";
import { H5, Paragraph, Small } from "../../../styles/globals";

export const RestaurantContainer = styled.div<{ isPositionVariant?: boolean }>`
  max-width: 730px;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  padding-bottom: 185px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: fit-content;
    position: absolute;
    top: 215px;
    background: #fff;

    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
    border-radius: 32px 32px 0px 0px;
    padding: 32px 30px 30px;

    ${({ isPositionVariant }) =>
      isPositionVariant &&
      css`
        top: 0;
        margin-top: 0;
        border-radius: none;
        box-shadow: none;
        padding-top: 40px;
      `}
  }
`;

export const HomeTitleContainer = styled.div<{ isFlexVariant?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: start;

  ${({ isFlexVariant }) =>
    isFlexVariant &&
    css`
      flex-direction: row-reverse;
    `}

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;

export const TitleHome = styled(H5)`
  font-size: 24px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 15px;
  }
`;

export const SearchDescriptionContainer = styled.div`
  text-align: right;

  h5:last-child {
    font-weight: 700;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.darkDown};
  }

  button {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: center;
    padding-bottom: 30px;
    display: flex;
    align-items: flex-start;

    width: 100%;
    justify-content: space-between;

    button {
      display: block;
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    justify-content: flex-start;
  }
`;

export const SearchDescription = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.lightDown};
  font-weight: 400;
  font-size: 14px;
  text-align: end;

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-left: 54px;
  }
`;

export const SearchedTerm = styled(H5)``;

export const RestaurantsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 350px));

  gap: 30px;
  margin-top: 30px;
  margin-bottom: 20px;
  list-style-type: none;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    gap: 20px;
    margin-top: 15px;
  }
`;

export const RestaurantCard = styled.li<{ imageUrl: string }>`
  height: 170px;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ imageUrl }) => imageUrl}) no-repeat center center / cover;

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 160px;
  }
`;

export const RestaurantName = styled(Small)`
  padding: 10px;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
`;
