import { ActionTypes } from "./actionTypes";

export const sort = (sortAction) => {
  return {
    type: ActionTypes.SORT,
    payload: sortAction,
  };
};

export const fastDelivery = (isChecked) => {
  return {
    type: ActionTypes.FAST_DELIVERY,
    isChecked: isChecked,
  };
};

export const excludeOutOfStock = (isChecked) => {
  return {
    type: ActionTypes.EXCLUDE_OUT_OF_STOCK,
    isChecked: isChecked,
  };
};

export const rating = (rating) => {
  return {
    type: ActionTypes.RATING,
    rating: rating,
  };
};

export const reset = () => {
  return {
    type: ActionTypes.RESET,
  };
};
