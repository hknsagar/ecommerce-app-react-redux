import { ActionTypes } from "../actions/actionTypes";

const initialState = {
  sort: "",
  fastDelivery: false,
  excludeOutOfStock: false,
  rating: 0,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case ActionTypes.FAST_DELIVERY:
      return {
        ...state,
        fastDelivery: action.isChecked,
      };
    case ActionTypes.EXCLUDE_OUT_OF_STOCK:
      return {
        ...state,
        excludeOutOfStock: action.isChecked,
      };
    case ActionTypes.RATING:
      return {
        ...state,
        rating: action.rating,
      };
    case ActionTypes.RESET:
      return initialState;
    default:
      return state;
  }
};
