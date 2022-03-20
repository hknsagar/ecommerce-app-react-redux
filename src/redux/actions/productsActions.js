import { ActionTypes } from "./actionTypes";

export const setAllProducts = () => {
  return {
    type: ActionTypes.SET_ALL_PRODUCTS,
  };
};

export const sortByAsc = () => {
  return {
    type: ActionTypes.SORT_BY_ASC,
  };
};

export const sortByDesc = () => {
  return {
    type: ActionTypes.SORT_BY_DESC,
  };
};
