import InfiniteScroll from "react-infinite-scroll-component";
import { IRestaurantProp } from "~/@types/IRestaurants";
import { Breadcrumbs } from "~/components/atoms/Breadcrumbs";
import { InputSearchRestaurant } from "~/components/molecules/InputSearchRestaurant";
import { Loading } from "~/components/molecules/Loading";
import { useHomeScreen } from "./hooks";
import * as S from "./styles";

interface IHomeScreenProps {
  ssrRestaurants: IRestaurantProp[];
}

export const HomeScreen = ({ ssrRestaurants }: IHomeScreenProps) => {
  const {
    fetchRestaurantDatail,
    isTextWasSearched,
    handleBackToHome,
    searchedText,
    fetchMoreRestaurants,
    hasMoreData,
    restaurants,
  } = useHomeScreen({ ssrRestaurants });

  return (
    <S.RestaurantContainer isPositionVariant={isTextWasSearched}>
      <S.HomeTitleContainer isFlexVariant={isTextWasSearched}>
        {isTextWasSearched && (
          <S.SearchDescriptionContainer>
            <Breadcrumbs
              text="Voltar"
              hrefUrl="/"
              themeColor="#333333"
              onClick={handleBackToHome}
            />

            <S.SearchDescription aria-label={`Resultados para ${searchedText}`}>
              Resultados para
              <S.SearchedTerm>{searchedText}</S.SearchedTerm>
            </S.SearchDescription>
          </S.SearchDescriptionContainer>
        )}

        <InputSearchRestaurant isInputInHeader={false} />

        <S.TitleHome>Restaurantes</S.TitleHome>
      </S.HomeTitleContainer>

      <InfiniteScroll
        loader={<Loading />}
        hasMore={hasMoreData}
        dataLength={restaurants?.length || 0}
        next={fetchMoreRestaurants}
        style={{ overflow: "none" }}
      >
        <S.RestaurantsList>
          {restaurants?.map((restaurant: IRestaurantProp) => (
            <S.RestaurantCard
              key={restaurant.id}
              onClick={() => fetchRestaurantDatail(restaurant.id)}
              imageUrl={restaurant.image}
            >
              <S.RestaurantName>{restaurant?.name}</S.RestaurantName>
            </S.RestaurantCard>
          ))}
        </S.RestaurantsList>
      </InfiniteScroll>
    </S.RestaurantContainer>
  );
};
