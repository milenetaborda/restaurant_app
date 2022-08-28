import axios from "axios";
import { IReadRestaurants } from "~/@types/IRestaurants";
import { HeaderHomeScreen } from "~/components/organisms/HeaderHomeScreen";
import { HomeScreen } from "../components/templates/HomeScreen";

export default function Index({ restaurantsData }: IReadRestaurants) {
  return (
    <main>
      <HeaderHomeScreen />
      <HomeScreen ssrRestaurants={restaurantsData ?? []} />
    </main>
  );
}

export const getServerSideProps = async () => {
  const { data: response } = await axios.get(
    "https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants?page=1&limit=10"
  );

  return {
    props: {
      restaurantsData: response.data ?? [],
    },
  };
};
