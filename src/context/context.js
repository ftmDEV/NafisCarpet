import { createContext, useReducer } from "react";
import Reducer, { initialState } from "./reducer";

export const ProductContext = createContext(initialState);

const ProductProvider = ({ children }) => {
  const [store, dispatch] = useReducer(Reducer, initialState);

  return (
    <ProductContext.Provider value={{ store, dispatch }}>
      <div>{children}</div>
    </ProductContext.Provider>
  );
};
export default ProductProvider;
