import { useContext } from "react";
import { InputSearch } from "~/components/atoms/InputSearch";
import { RestaurantContext } from "~/context/RestaurantContext";
import * as S from "./styles";

interface IInputSearchRestaurantProps {
  isInputInHeader: boolean;
}

export const InputSearchRestaurant = ({
  isInputInHeader,
}: IInputSearchRestaurantProps) => {
  const {
    setSearchedText,
    setPagination,
    fetchMoreRestaurants,
    enteredText,
    setEnteredText,
  } = useContext(RestaurantContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredText(e.target.value);
  };

  const handleSubmitButton = () => {
    setSearchedText(enteredText);
    fetchMoreRestaurants(enteredText);
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
        value={enteredText}
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
