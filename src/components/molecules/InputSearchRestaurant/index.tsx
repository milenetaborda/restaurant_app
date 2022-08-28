import { useContext, useState } from "react";
import { InputSearch } from "~/components/atoms/InputSearch";
import { RestaurantContext } from "~/context/RestaurantContext";
import * as S from "./styles";

interface IInputSearchRestaurantProps {
  isInputInHeader: boolean;
}

export const InputSearchRestaurant = ({
  isInputInHeader,
}: IInputSearchRestaurantProps) => {
  const { setSearchedText, setPagination, fetchMoreRestaurants } =
    useContext(RestaurantContext);
  const [text, setText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmitButton = () => {
    setSearchedText(text);
    fetchMoreRestaurants(text);
    setPagination(1);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmitButton();
    }
  };

  return (
    <S.SearchContainer isInputInHeader={isInputInHeader}>
      <InputSearch
        value={text}
        placeholder="Encontre um restaurante"
        handleSubmitButton={handleSubmitButton}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          handleInputKeyDown(e)
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e)
        }
      />
    </S.SearchContainer>
  );
};
