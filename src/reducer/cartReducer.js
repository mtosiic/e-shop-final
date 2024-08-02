import { v4 as uuidv4 } from "uuid";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        {
          product: action.payload,
          id: uuidv4(),
        },
      ];
    case "REMOVE_PRODUCT":
      return state.filter((product) => product.id !== action.id);
    case "EMPTY_CART":
      return [];

    default:
      return state;
  }
};
