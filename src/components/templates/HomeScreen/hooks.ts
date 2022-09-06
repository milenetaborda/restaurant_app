import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
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
    setIsLoading,
    isLoading,
  } = useContext(RestaurantContext);
  const router = useRouter();

  const [isSendingData, setIsSendingData] = useState(true);

  useEffect(() => {
    if (ssrRestaurants.length) {
      setRestaurants(ssrRestaurants);
      setIsLoading(false);
      setIsSendingData(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ssrRestaurants, setIsLoading, setIsSendingData]);

  const fetchRestaurantDatail = async (restaurant_id: string) => {
    try {
      const response = await showRestaurant({ restaurant_id });

      if (typeof response !== "string") {
        setRestaurantDatail(response.data);
        sessionStorage.setItem(
          "restaurantDatail",
          JSON.stringify(response.data)
        );
        router.push(`/detalhes`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isEmptyRestaurants = restaurants?.length === 0 && !isSendingData;

  return {
    fetchRestaurantDatail,
    isTextWasSearched: !!searchedText,
    handleBackToHome,
    searchedText,
    setRestaurants,
    fetchMoreRestaurants,
    hasMoreData,
    restaurants,
    isLoading,
    isEmptyRestaurants,
  };
};
