import { createContext, ReactNode, useCallback, useState } from "react";
import { IRestaurantProp } from "~/@types/IRestaurants";
import { getRestaurants } from "~/services/listRestaurantsService";

interface IRestaurantProvider {
  children: ReactNode;
}

interface IRestaurantContext {
  restaurants: IRestaurantProp[];
  setRestaurants: React.Dispatch<React.SetStateAction<IRestaurantProp[]>>;
  restaurantDatail: IRestaurantProp | null;
  setRestaurantDatail: React.Dispatch<
    React.SetStateAction<IRestaurantProp | null>
  >;
  searchedText: string;
  setSearchedText: React.Dispatch<React.SetStateAction<string>>;
  handleBackToHome: () => void;
  setPagination: React.Dispatch<React.SetStateAction<number>>;
  pagination: number;
  setHasMoreData: React.Dispatch<React.SetStateAction<boolean>>;
  hasMoreData: boolean;
  fetchMoreRestaurants: (text?: string) => Promise<void>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  enteredText: string;
  setEnteredText: React.Dispatch<React.SetStateAction<string>>;
}

export const RestaurantContext = createContext({} as IRestaurantContext);

export function RestaurantProvider({ children }: IRestaurantProvider) {
  const [restaurants, setRestaurants] = useState<IRestaurantProp[]>([]);
  const [restaurantDatail, setRestaurantDatail] =
    useState<IRestaurantProp | null>(null);

  const [searchedText, setSearchedText] = useState("");
  const [pagination, setPagination] = useState(2);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [enteredText, setEnteredText] = useState("");

  const handleBackToHome = useCallback(() => {
    setIsLoading(true);
    setEnteredText("");
    setSearchedText("");

    (async () => {
      try {
        const response = await getRestaurants({ page: 1 });

        if (typeof response !== "string") {
          setRestaurants(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setSearchedText, setIsLoading, setRestaurants]);

  const fetchMoreRestaurants = useCallback(
    async (text?: string) => {
      setIsLoading(!!text);

      const response = await getRestaurants({
        page: text ? 1 : pagination,
        search: text || searchedText,
      });

      if (typeof response !== "string") {
        setRestaurants((prevRestaurants) =>
          text ? response.data : [...prevRestaurants, ...response.data]
        );
        setPagination((prevPagination) => prevPagination + 1);
        setHasMoreData(response.data.length > 0);
        setIsLoading(false);
      }
    },
    [
      pagination,
      setRestaurants,
      setIsLoading,
      setPagination,
      setHasMoreData,
      searchedText,
    ]
  );

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        setRestaurants,
        restaurantDatail,
        setRestaurantDatail,
        handleBackToHome,
        searchedText,
        setSearchedText,
        pagination,
        setPagination,
        hasMoreData,
        setHasMoreData,
        fetchMoreRestaurants,
        isLoading,
        setIsLoading,
        enteredText,
        setEnteredText,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}
