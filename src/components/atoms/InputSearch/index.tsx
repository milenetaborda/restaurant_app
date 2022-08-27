import { useContext, useState } from "react";
import { RestaurantContext } from "~/context/RestaurantContext";
import * as S from "./styles";

export interface InputSearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export const InputSearch = ({
  placeholder = "Pesquisar",
}: InputSearchProps) => {
  const { setSearch } = useContext(RestaurantContext);
  const [text, setText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmitButton = () => {
    setSearch(text);
    setText("");
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setSearch(event.target.value);
      setText("");
    }
  };

  return (
    <S.InputContainer>
      <button type="button" onClick={handleSubmitButton}>
        <img src="assets/search-icon.svg" alt="pesquisar" />
      </button>
      <input
        type="text"
        value={text}
        placeholder={placeholder}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          handleInputKeyDown(e)
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e)
        }
      />
    </S.InputContainer>
  );
};
