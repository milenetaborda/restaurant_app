import styled from "styled-components";
import { H1, Paragraph } from "~/styles/globals";

export const HeaderDetailContainer = styled.header`
  width: 100vw;
  height: 187px;

  background: url("assets/sala-a-restaurant.png") no-repeat center center;
  background-size: cover;
  border: 1px solid #000000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  margin: 0 auto;
  display: flex;
  padding: 40px 30px 28px;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 159px;
    position: relative;
  }
`;

export const HeaderDetailContent = styled.div`
  width: 1110px;
  max-width: 1110px;
  padding-left: 17px;

  button {
    margin-right: 218px;
  }

  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: start;
`;

export const RestaurantInformation = styled.div`
  display: flex;
  gap: 23px;

  img {
    width: 119px;
    height: 119px;
    border-radius: 50%;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
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
