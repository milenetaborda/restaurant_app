import styled from "styled-components";

export const LoadingCardContainer = styled.div`
  height: 170px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 160px;
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
