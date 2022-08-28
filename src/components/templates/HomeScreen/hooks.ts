import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { IRestaurantProp } from "~/@types/IRestaurants";
import { RestaurantContext } from "~/context/RestaurantContext";
import { showRestaurant } from "~/services/showRestaurantService";

interface IUseHomeScreen {
  ssrRestaurants: IRestaurantProp[];
}

export const useHomeScreen = ({ ssrRestaurants }: IUseHomeScreen) => {
  const {
    setRestaurantDatail,
    searchedText,
    handleBackToHome,
    restaurants,
    setRestaurants,
    hasMoreData,
    fetchMoreRestaurants,
  } = useContext(RestaurantContext);
  const router = useRouter();

  useEffect(() => {
    setRestaurants(ssrRestaurants);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ssrRestaurants]);

  const fetchRestaurantDatail = async (restaurant_id: string) => {
    try {
      const response = await showRestaurant({ restaurant_id });

      if (typeof response !== "string") {
        setRestaurantDatail(response.data);
        router.push(`/detalhes`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchRestaurantDatail,
    isTextWasSearched: !!searchedText,
    handleBackToHome,
    searchedText,
    setRestaurants,
    fetchMoreRestaurants,
    hasMoreData,
    restaurants,
  };
};
