import styled from "styled-components";
import { Paragraph } from "~/styles/globals";

export const LoadingContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const LoadingText = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.darkUp};
`;
