import styled from "styled-components";
import { H3, H6, Paragraph, Small } from "~/styles/globals";

export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(0, 80px)) 1fr;

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: calc(100vh - 127px);
  }
`;

export const DetailScreenContainer = styled.div`
  max-width: 539px;
  margin: 30px;
  grid-column: 4 / span 9;

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 0;
    min-width: -webkit-fill-available;
    height: inherit;

    position: absolute;
    top: 127px;
    background: ${({ theme }) => theme.colors.white};
    grid-column: 1 / span 15;

    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
    border-radius: 32px 32px 0px 0px;
    padding: 30px;
  }
`;

export const EmptyDiv = styled.hr`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  margin: 10px 0 30px;
`;

export const DescriptionText = styled(Paragraph)`
  margin-bottom: 20px;
  font-size: 22px;
  line-height: 33px;
  color: #676666;

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-bottom: 30px;
  }
`;

export const Description = styled(H6)`
  margin-bottom: 3px;
`;

export const Text = styled(Small)`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.darkUp};
`;

export const RestaurantName = styled(H3)`
  display: none;

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: block;
    margin-bottom: 30px;
    text-align: center;
  }
`;
