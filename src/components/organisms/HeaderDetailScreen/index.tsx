import { useContext } from "react";
import { RestaurantContext } from "~/context/RestaurantContext";
import { Breadcrumbs } from "../../atoms/Breadcrumbs";
import * as S from "./styles";

export const HeaderDetailScreen = () => {
  const { restaurantDatail } = useContext(RestaurantContext);

  return (
    <S.HeaderDetailContainer>
      <S.HeaderDetailContent>
        <Breadcrumbs text="Voltar" hrefUrl="/" />

        <S.RestaurantInformation>
          <img src={restaurantDatail?.logo} alt="Logo do restaurante" />

          <S.ContactsRestaurant>
            <S.RestaurantName>{restaurantDatail?.name}</S.RestaurantName>
            <S.RestaurantContact>
              {restaurantDatail?.telephone}
            </S.RestaurantContact>
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
