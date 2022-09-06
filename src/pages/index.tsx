import { IReadRestaurants } from "~/@types/IRestaurants";
import { HeaderHomeScreen } from "~/components/organisms/HeaderHomeScreen";
import { api } from "~/services/api";
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
  const { data: response } = await api.get("/restaurants?page=1&limit=10");

  return {
    props: {
      restaurantsData: response.data ?? [],
    },
  };
};
