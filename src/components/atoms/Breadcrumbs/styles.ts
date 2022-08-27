import styled from "styled-components";
import { Small } from "~/styles/globals";

export const BreadcrumbsContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;

  border: none;
  background: transparent;
  cursor: pointer;
`;

export const BreadcrumbText = styled(Small)`
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`;
