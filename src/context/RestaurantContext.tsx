import { createContext, ReactNode, useCallback, useState } from "react";
import { IRestaurantProp } from "~/@types/IRestaurants";

interface IRestaurantProvider {
  children: ReactNode;
}

interface IRestaurantContext {
  restaurants: IRestaurantProp[] | null;
  setRestaurants: React.Dispatch<
    React.SetStateAction<IRestaurantProp[] | null>
  >;
  restaurantDatail: IRestaurantProp | null;
  setRestaurantDatail: React.Dispatch<
    React.SetStateAction<IRestaurantProp | null>
  >;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleBackToHome: () => void;
  setPagination: React.Dispatch<React.SetStateAction<number>>;
  pagination: number;
  setHasMoreData: React.Dispatch<React.SetStateAction<boolean>>;
  hasMoreData: boolean;
}

export const RestaurantContext = createContext({} as IRestaurantContext);

export function RestaurantProvider({ children }: IRestaurantProvider) {
  const [restaurants, setRestaurants] = useState<IRestaurantProp[] | null>(
    null
  );
  const [restaurantDatail, setRestaurantDatail] =
    useState<IRestaurantProp | null>(null);

  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState(1);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);

  const handleBackToHome = useCallback(() => {
    setSearch("");
  }, [setSearch]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        setRestaurants,
        restaurantDatail,
        setRestaurantDatail,
        handleBackToHome,
        search,
        setSearch,
        pagination,
        setPagination,
        hasMoreData,
        setHasMoreData,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}
