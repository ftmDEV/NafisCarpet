import { createContext, useReducer } from "react";
import Reducer, { initialState } from "./reducer";
import { makeStyles } from "@mui/styles";

export const ProductContext = createContext(initialState);

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const ProductProvider = ({ children }) => {
  const [store, dispatch] = useReducer(Reducer, initialState);
  const classes = useStyles();

  return (
    <ProductContext.Provider value={{ store, dispatch }}>
      <div className={classes.container}>{children}</div>
    </ProductContext.Provider>
  );
};
export default ProductProvider;
