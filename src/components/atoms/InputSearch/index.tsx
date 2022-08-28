import * as S from "./styles";

export interface InputSearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  handleSubmitButton?: () => void;
}

export const InputSearch = ({
  placeholder = "Pesquisar",
  handleSubmitButton,
  ...rest
}: InputSearchProps) => {
  return (
    <S.InputContainer>
      <button type="button" onClick={handleSubmitButton}>
        <img src="assets/search-icon.svg" alt="pesquisar" />
      </button>
      <input type="text" placeholder={placeholder} {...rest} />
    </S.InputContainer>
  );
};
