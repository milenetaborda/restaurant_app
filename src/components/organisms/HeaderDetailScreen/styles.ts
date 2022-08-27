import styled from "styled-components";
import { H1, Paragraph } from "~/styles/globals";

export const HeaderDetailContainer = styled.header`
  width: 100vw;
  height: 187px;

  background: url("assets/sala-a-restaurant.png") no-repeat center center;
  background-size: cover;
  border: 1px solid #000000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(0, 80px)) 1fr;
  padding: 40px 30px 28px;
  gap: 30px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 159px;
    position: relative;
  }
`;

export const HeaderDetailContent = styled.div`
  max-width: 1110px;

  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: start;

  grid-column: 3 / span 6;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-column: 1 / span 12;
  }
`;

export const RestaurantInformation = styled.div`
  display: flex;
  gap: 23px;

  img {
    width: 119px;
    height: 119px;
    border-radius: 50%;
    z-index: 999 !important;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    position: absolute;

    top: 40px;
    left: calc(50% - 119px / 2);
  }
`;

export const ContactsRestaurant = styled.div`
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;

export const RestaurantName = styled(H1)``;

export const RestaurantContact = styled(Paragraph)`
  line-height: 21px;
  cursor: pointer;

  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`;
