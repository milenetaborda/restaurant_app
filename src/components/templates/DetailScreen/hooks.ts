import { useContext, useEffect } from "react";
import { RestaurantContext } from "~/context/RestaurantContext";

export const useDetailScreen = () => {
  const { restaurantDatail, setRestaurantDatail } =
    useContext(RestaurantContext);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("restaurantDatail") || "");

    setRestaurantDatail(data);
  }, [setRestaurantDatail]);

  return {
    restaurantDatail,
  };
};
