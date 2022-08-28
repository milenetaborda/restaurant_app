import { useContext } from "react";
import { RestaurantContext } from "~/context/RestaurantContext";

export const useHeaderHomeScreen = () => {
  const { handleBackToHome, searchedText } = useContext(RestaurantContext);
  const isTextWasSearched = !!searchedText;

  return {
    handleBackToHome,
    isTextWasSearched,
  };
};
