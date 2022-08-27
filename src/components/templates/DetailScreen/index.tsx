import { useContext } from "react";
import { RestaurantContext } from "~/context/RestaurantContext";
import * as S from "./styles";

export const DetailScreen = () => {
  const { restaurantDatail } = useContext(RestaurantContext);

  return (
    <S.DetailContainer>
      <S.DetailScreenContainer>
        <S.RestaurantName>{restaurantDatail?.name}</S.RestaurantName>

        <S.Description>Descrição</S.Description>
        <S.DescriptionText>{restaurantDatail?.description}</S.DescriptionText>

        <S.Description>Faixa de preço</S.Description>
        <S.Text>{restaurantDatail?.price_range}</S.Text>

        <S.EmptyDiv />

        <S.Description>Horários de Funcionamento</S.Description>
        <S.Text>{restaurantDatail?.opening_hours}</S.Text>

        <S.Description>Formas de pagamento</S.Description>
        <S.Text>{restaurantDatail?.payment_methods}</S.Text>
      </S.DetailScreenContainer>
    </S.DetailContainer>
  );
};
