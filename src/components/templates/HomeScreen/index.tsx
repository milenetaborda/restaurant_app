import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IRestaurantProp } from "~/@types/IRestaurants";
import { Breadcrumbs } from "~/components/atoms/Breadcrumbs";
import { InputSearchRestaurant } from "~/components/molecules/InputSearchRestaurant";
import { Loading } from "~/components/molecules/Loading";
import { useHomeScreen } from "./hooks";
import * as S from "./styles";

interface IHomeScreenProps {
  restaurants: IRestaurantProp[];
}

export const HomeScreen = ({ restaurants }: IHomeScreenProps) => {
  const {
    fetchRestaurantDatail,
    isSearch,
    handleBackToHome,
    search,
    allRestaurants,
    setRestaurants,
    fetchMoreRestaurants,
    hasMoreData,
  } = useHomeScreen();

  useEffect(() => {
    setRestaurants(restaurants);
  }, []);

  return (
    <S.RestaurantContainer isPositionVariant={isSearch}>
      <S.HomeTitleContainer isFlexVariant={isSearch}>
        {isSearch && (
          <S.SearchDescriptionContainer>
            <Breadcrumbs
              text="Voltar"
              hrefUrl="/"
              themeColor="#333333"
              onClick={handleBackToHome}
            />

            <S.SearchDescription aria-label={`Resultados para ${search}`}>
              Resultados para
              <S.SearchedTerm>{search}</S.SearchedTerm>
            </S.SearchDescription>
          </S.SearchDescriptionContainer>
        )}

        <InputSearchRestaurant isInputInHeader={false} />

        <S.TitleHome>Restaurantes</S.TitleHome>
      </S.HomeTitleContainer>

      <InfiniteScroll
        loader={<Loading />}
        hasMore={hasMoreData}
        dataLength={allRestaurants?.length || 0}
        next={fetchMoreRestaurants}
        style={{ overflow: "none" }}
      >
        <S.RestaurantsList>
          {allRestaurants?.map((restaurant: IRestaurantProp) => (
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
