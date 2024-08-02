import { createContext, useState } from "react";
import { cartReducer } from "../reducer/cartReducer";
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
// import { initialProducts } from "../reducer/cartReducer";

export const CartContext = createContext();

const initialProducts = [];

const CartContextProvider = ({ children }) => {
  const [products, productsDispatch] = useReducer(cartReducer, initialProducts);
  return (
    <CartContext.Provider value={{ products, productsDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
