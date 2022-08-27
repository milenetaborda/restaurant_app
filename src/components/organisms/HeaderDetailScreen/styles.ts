import styled from "styled-components";
import { H1, Paragraph } from "~/styles/globals";

export const HeaderDetailContainer = styled.header`
  width: 100vw;
  height: 187px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("assets/sala-a-restaurant.png") center;

  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(0, 80px)) 1fr;
  padding: 40px 30px 28px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 159px;
    position: relative;
  }
`;

export const HeaderDetailContent = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: start;

  grid-column: 2 / span 8;
`;

export const RestaurantInformation = styled.div`
  display: flex;
  gap: 23px;

  img {
    width: 119px;
    height: 119px;
    border-radius: 50%;
    z-index: 1;
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
