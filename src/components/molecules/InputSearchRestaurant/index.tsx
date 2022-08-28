import { useContext, useState } from "react";
import { InputSearch } from "~/components/atoms/InputSearch";
import { RestaurantContext } from "~/context/RestaurantContext";
import { getRestaurants } from "~/services/listRestaurantsService";
import * as S from "./styles";

interface IInputSearchRestaurantProps {
  isInputInHeader: boolean;
}

export const InputSearchRestaurant = ({
  isInputInHeader,
}: IInputSearchRestaurantProps) => {
  const {
    setSearch,
    setRestaurants,
    setPagination,
    pagination,
    setHasMoreData,
  } = useContext(RestaurantContext);
  const [text, setText] = useState("");

  const searchRestaurantsByName = (search: string) => {
    console.log("loading...");

    (async () => {
      const response = await getRestaurants({
        page: 1,
        search,
      });

      if (typeof response !== "string") {
        if (response?.data?.length === 0) {
          setHasMoreData(false);
          setPagination(1);
          return;
        }

        let newArray = response.data;

        if (pagination > 1) {
          // @ts-ignore
          newArray.push(response.data);
          return;
        }

        setRestaurants(newArray);
        setPagination((prev) => prev + 1);
        setHasMoreData(false);
        console.log("finally loaded");
      }
    })();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmitButton = () => {
    const searchWithoutSpaces = text.replace(/\s/g, "");

    setSearch(text);
    setText("");
    setPagination(1);
    searchRestaurantsByName(searchWithoutSpaces);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmitButton();
    }
  };

  return (
    <S.SearchContainer isInputInHeader={isInputInHeader}>
      <InputSearch
        value={text}
        placeholder="Encontre um restaurante"
        handleSubmitButton={handleSubmitButton}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          handleInputKeyDown(e)
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e)
        }
      />
    </S.SearchContainer>
  );
};
