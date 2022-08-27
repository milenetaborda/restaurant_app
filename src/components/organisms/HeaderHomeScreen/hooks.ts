import { useContext } from "react";
import { RestaurantContext } from "~/context/RestaurantContext";

export const useHeaderHomeScreen = () => {
  const { handleBackToHome, search } = useContext(RestaurantContext);
  const isSearch = !!search;

  return {
    handleBackToHome,
    isSearch,
  };
};
