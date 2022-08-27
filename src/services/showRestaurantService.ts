import { IRestaurantProp } from "~/@types/IRestaurants";
import { api } from "./api";

interface IParams {
  restaurant_id?: string;
}

interface IShowRestaurantService {
  data: IRestaurantProp;
}

export const showRestaurant = async (
  params: IParams
): Promise<IShowRestaurantService | string> => {
  try {
    const response = await api.get(`/restaurants/${params.restaurant_id}`);

    return response.data;
  } catch (error) {
    return error as string;
  }
};
