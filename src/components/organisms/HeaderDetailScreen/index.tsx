import { Breadcrumbs } from "../../atoms/Breadcrumbs";
import { useHeaderDetailScreen } from "./hooks";
import * as S from "./styles";

export const HeaderDetailScreen = () => {
  const { phoneFormatted, restaurantDatail, handleBackToHome } =
    useHeaderDetailScreen();

  return (
    <S.HeaderDetailContainer>
      <S.HeaderDetailContent>
        <Breadcrumbs text="Voltar" hrefUrl="/" onClick={handleBackToHome} />

        <S.RestaurantInformation>
          <img src={restaurantDatail?.logo} alt="Logo do restaurante" />

          <S.ContactsRestaurant>
            <S.RestaurantName>{restaurantDatail?.name}</S.RestaurantName>
            <S.RestaurantContact>{phoneFormatted}</S.RestaurantContact>
            <S.RestaurantContact
              as="a"
              href={restaurantDatail?.website}
              target="_blank"
            >
              {restaurantDatail?.website}
            </S.RestaurantContact>
          </S.ContactsRestaurant>
        </S.RestaurantInformation>
      </S.HeaderDetailContent>
    </S.HeaderDetailContainer>
  );
};
