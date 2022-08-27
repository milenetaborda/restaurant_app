import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 50px;
  position: relative;

  input {
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.lightMedium};
    padding: 13px 20px 13px 53px;
    border-radius: 8px;

    ::placeholder {
      color: ${({ theme }) => theme.colors.dark};
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }

    :focus {
      outline: none;
    }
  }

  > button {
    position: absolute;
    position: absolute;
    top: 13px;
    left: 20px;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;
