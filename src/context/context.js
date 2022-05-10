import { createContext, useReducer } from "react";
import Reducer, { initialState } from "./reducer";
import { makeStyles } from "@mui/styles";
export const ProductContext = createContext(initialState);

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    minHeight: "100vh",
    padding: "15px 5%",
    // backgroundColor:"#E3C38A"
    background: "linear-gradient(10deg,#000,#163A0D )",
  },
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
