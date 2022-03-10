import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { CartReducer } from "../Reducer/CartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
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

  const initialState = {
    products: products,
    cart: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const CartState = () => {
  return useContext(CartContext);
};
