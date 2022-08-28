import { InputSearch } from "~/components/atoms/InputSearch";
import * as S from "./styles";

interface IInputSearchRestaurantProps {
  isInputInHeader: boolean;
}

export const InputSearchRestaurant = ({
  isInputInHeader,
}: IInputSearchRestaurantProps) => {
  return (
    <S.SearchContainer isInputInHeader={isInputInHeader}>
      <InputSearch placeholder="Encontre um restaurante" />
    </S.SearchContainer>
  );
};
