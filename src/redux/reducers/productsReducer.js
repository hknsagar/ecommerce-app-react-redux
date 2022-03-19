import faker from "@faker-js/faker";
import { ActionTypes } from "../actions/actionTypes";

faker.seed(2);
const products = Array.from({ length: 20 }).map(() => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.nature(),
    inStock: faker.random.arrayElement([0, 1, 2, 3, 4, 5]),
    deliverySpeed: faker.random.arrayElement([1, 2, 3, 4]),
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
  };
});

const initialState = { products: products };

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_ALL_PRODUCTS:
      return state;
    default:
      return state;
  }
};