import styled from "styled-components";

export const SpinnerContainer = styled.svg`
  animation: loading-spinner 2s infinite linear;

  @keyframes loading-spinner {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
