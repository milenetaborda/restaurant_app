import { useDetailScreen } from "./hooks";
import * as S from "./styles";

export const DetailScreen = () => {
  const { restaurantDatail } = useDetailScreen();

  return (
    <S.DetailContainer>
      <S.DetailScreenContainer>
        <img src={restaurantDatail?.image} alt="Logo do restaurante" />

        <S.RestaurantName>{restaurantDatail?.name}</S.RestaurantName>

        <S.Description>Descrição</S.Description>
        <S.DescriptionText>{restaurantDatail?.description}</S.DescriptionText>

        <S.ContactContainer>
          <S.Description>Contato</S.Description>
          <S.Text>{restaurantDatail?.telephone}</S.Text>

          <S.Text>
            <a
              href={restaurantDatail?.website}
              target="_blank"
              rel="noreferrer"
            >
              {restaurantDatail?.website}
            </a>
          </S.Text>
        </S.ContactContainer>

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
