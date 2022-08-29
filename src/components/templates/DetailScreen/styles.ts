import styled from "styled-components";
import { H3, H6, Paragraph, Small } from "~/styles/globals";

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: calc(100vh - 127px);
  }
`;

export const DetailScreenContainer = styled.div`
  max-width: 539px;
  min-width: 539px;
  padding: 30px 0 172px;

  img {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 0;
    min-width: -webkit-fill-available;
    min-height: 466px;

    position: absolute;
    top: 127px;
    background: ${({ theme }) => theme.colors.white};

    box-shadow: 0px -25px 16px -20px rgba(0, 0, 0, 0.15);
    border-radius: 32px 32px 0px 0px;
    padding: 47px 30px 172px;

    img {
      display: block;
      width: 119px;
      height: 119px;
      border-radius: 50%;

      position: absolute;
      top: -90px;
      left: calc(50% - 119px / 2);
    }
  }
`;

export const EmptyDiv = styled.hr`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  margin: 10px 0 30px;
`;

export const DescriptionText = styled(Paragraph)`
  margin-bottom: 20px;
  font-size: 22px !important;
  line-height: 33px;
  color: #676666;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 14px !important;
    line-height: 21px;
    margin-bottom: 30px;
  }
`;

export const Description = styled(H6)`
  margin-bottom: 3px;
`;

export const Text = styled(Small)`
  display: block;
  margin-bottom: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkUp} !important;
`;

export const RestaurantName = styled(H3)`
  display: none;

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: block;
    margin-bottom: 30px;
    text-align: center;
  }
`;

export const ContactContainer = styled.div`
  display: none;

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: block;
    margin-bottom: 30px;

    small {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      margin: 0;

      a {
        color: ${({ theme }) => theme.colors.darkUp};
        text-decoration: none;
      }
    }
  }
`;
