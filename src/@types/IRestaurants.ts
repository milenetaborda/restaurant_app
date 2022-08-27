export interface IRestaurantProp {
  id: string;
  description: string;
  image: string;
  logo: string;
  name: string;
  opening_hours: string;
  payment_methods: string;
  price_range: string;
  telephone: string;
  website: string;
}

export interface IReadRestaurants {
  restaurantsData: IRestaurantProp[];
}
