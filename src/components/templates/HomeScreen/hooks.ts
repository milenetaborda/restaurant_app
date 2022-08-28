import { useRouter } from "next/router";
import { useCallback, useContext } from "react";
import { IRestaurantProp } from "~/@types/IRestaurants";
import { RestaurantContext } from "~/context/RestaurantContext";
import { getRestaurants } from "~/services/listRestaurantsService";
import { showRestaurant } from "~/services/showRestaurantService";

export const useHomeScreen = () => {
  const {
    setRestaurantDatail,
    search,
    handleBackToHome,
    restaurants,
    setRestaurants,
    setPagination,
    pagination,
    hasMoreData,
    setHasMoreData,
  } = useContext(RestaurantContext);
  const router = useRouter();

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

  const fetchMoreRestaurants = useCallback(() => {
    const pageAmount = pagination + 1;

    (async () => {
      const response = await getRestaurants({ page: pageAmount });

      if (typeof response !== "string") {
        if (response?.data?.length === 0) {
          setHasMoreData(false);
          setPagination(1);
          return;
        }

        setRestaurants([
          ...(restaurants as IRestaurantProp[]),
          ...response.data,
        ]);
        setPagination((prev) => prev + 1);
        setHasMoreData(true);
      }
    })();
  }, [restaurants, setRestaurants, pagination, setHasMoreData]);

  return {
    fetchRestaurantDatail,
    isSearch: !!search,
    handleBackToHome,
    allRestaurants: restaurants,
    search,
    setRestaurants,
    fetchMoreRestaurants,
    hasMoreData,
  };
};
