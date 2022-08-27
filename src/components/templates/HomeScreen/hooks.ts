import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useContext, useState } from "react";
import { IRestaurantProp } from "~/@types/IRestaurants";
import { RestaurantContext } from "~/context/RestaurantContext";

export const useHomeScreen = () => {
  const {
    setRestaurantDatail,
    search,
    handleBackToHome,
    restaurants,
    setRestaurants,
  } = useContext(RestaurantContext);
  const router = useRouter();

  const [pagination, setPagination] = useState(2);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);

  const fetchRestaurantDatail = async (restaurant_id: string) => {
    try {
      const { data: response } = await axios.get(
        `https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants/${restaurant_id}`
      );

      setRestaurantDatail(response.data);
      router.push(`/detalhes`);
    } catch (error) {
      console.log(error);
    }
  };

  const filterRestaurants = restaurants?.filter((restaurant: any) => {
    return restaurant?.name?.toLowerCase().includes(search.toLowerCase());
  });

  const fetchMoreRestaurants = useCallback(() => {
    (async () => {
      const { data: response } = await axios.get(
        `https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants?page=${pagination}&limit=10`
      );

      if (response?.data?.length === 0) {
        setHasMoreData(false);
        return;
      }

      setRestaurants([...(restaurants as IRestaurantProp[]), ...response.data]);
      setPagination((prev) => prev + 1);
      setHasMoreData(true);
    })();
  }, [restaurants, setRestaurants, pagination, setHasMoreData]);

  const allRestaurants = filterRestaurants ? filterRestaurants : restaurants;

  return {
    fetchRestaurantDatail,
    isSearch: !!search,
    handleBackToHome,
    filterRestaurants,
    allRestaurants,
    search,
    setRestaurants,
    fetchMoreRestaurants,
    hasMoreData,
  };
};
