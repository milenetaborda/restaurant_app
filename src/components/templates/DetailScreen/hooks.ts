import { useContext, useEffect } from "react";
import { RestaurantContext } from "~/context/RestaurantContext";

export const useDetailScreen = () => {
  const { restaurantDatail, setRestaurantDatail } =
    useContext(RestaurantContext);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("restaurantDatail") || "");

    setRestaurantDatail(data);
  }, [setRestaurantDatail]);

  const phoneFormatted = restaurantDatail?.telephone
    .replace(/\D+/g, "")
    .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

  return {
    restaurantDatail,
    phoneFormatted,
  };
};
