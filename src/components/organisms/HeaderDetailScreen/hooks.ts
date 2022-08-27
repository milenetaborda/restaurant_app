import { useContext } from "react";
import { RestaurantContext } from "~/context/RestaurantContext";

export const useHeaderDetailScreen = () => {
  const { restaurantDatail } = useContext(RestaurantContext);

  const phoneFormatted = restaurantDatail?.telephone
    .replace(/\D+/g, "")
    .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

  return {
    restaurantDatail,
    phoneFormatted,
  };
};
