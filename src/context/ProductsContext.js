import { createContext, useState } from "react";
import { productsReducer } from "../reducer/productsReducer";
import { useReducer } from "react";
import { initialState } from "../reducer/productsReducer";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
