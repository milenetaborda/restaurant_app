import { IRestaurantProp } from "~/@types/IRestaurants";
import { api } from "./api";

interface IParams {
  page?: number;
  search?: string;
}

interface IListRestaurantsService {
  data: IRestaurantProp[];
}

export const getRestaurants = async (
  params: IParams
): Promise<IListRestaurantsService | string> => {
  try {
    const requestParams: IParams = {};

    if (params?.page) {
      requestParams.page = params.page;
    }

    if (params?.search) {
      requestParams.search = params.search;
    }

    const response = await api.get(`/restaurants?limit=10`, {
      params: requestParams,
    });

    return response.data;
  } catch (error) {
    return error as string;
  }
};
