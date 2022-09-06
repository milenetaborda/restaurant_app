import InfiniteScroll from "react-infinite-scroll-component";
import { IRestaurantProp } from "~/@types/IRestaurants";
import { Breadcrumbs } from "~/components/atoms/Breadcrumbs";
import { InputSearchRestaurant } from "~/components/molecules/InputSearchRestaurant";
import { Loading } from "~/components/molecules/Loading";
import { LoadingCard } from "~/components/molecules/LoadingCard";
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
    isLoading,
    isEmptyRestaurants,
  } = useHomeScreen({ ssrRestaurants });

  const renderLoadingCard = () => {
    return Array.from({ length: 6 }, (_, index) => <LoadingCard key={index} />);
  };

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
        {isEmptyRestaurants ? (
          <S.EmptyRestaurantContent>
            <h3>Ops!</h3>
            <p>Não encontramos nenhum restaurante</p>
          </S.EmptyRestaurantContent>
        ) : (
          <S.RestaurantsList>
            {isLoading
              ? renderLoadingCard()
              : restaurants?.map((restaurant: IRestaurantProp) => (
                  <S.RestaurantCard
                    key={restaurant.id}
                    onClick={() => fetchRestaurantDatail(restaurant.id)}
                    imageUrl={restaurant.image}
                  >
                    <S.RestaurantName>{restaurant?.name}</S.RestaurantName>
                  </S.RestaurantCard>
                ))}
          </S.RestaurantsList>
        )}
      </InfiniteScroll>
    </S.RestaurantContainer>
  );
};
