import { useContext, useEffect } from "react";
import { Grid, Box } from "@mui/material";

import ProductList from "../../components/list";
import SelectSmall from "../../common/Select/Select";
import { ProductContext } from "../../context/context";
import axios from "axios";
import { constant } from "../../utils/constant";
import Navbar from "../../components/navbar";

const Store = () => {
  const { store, dispatch } = useContext(ProductContext);
  console.log(store.products);
  useEffect(() => {
    axios
      .get("http://api.developer-studio.ir/api/products")
      .then((res) => dispatch({ type: "GET_DATA_LIST", payload: res.data }));
  }, []);
  return (
    <>
      <Navbar />
      <Grid container spacing={3} alignItems="stretch" sx={{ mx: 2 }}>
        <Grid item xs={12} sm={9}>
          <Box sx={{ dispaly: "flex", mb: 3 }}>
            {/* <Typography variant="subtitle1">
            {constant.FILTER_BY.LABEL}
          </Typography> */}
            <SelectSmall
              label={constant.FILTER_BY.LABEL}
              items={constant.FILTER_BY.FILTERS}
            />
            <SelectSmall
              label={constant.FILTER_BY.SIZE}
              items={constant.FILTER_BY.SIZES}
            />
          </Box>
          <ProductList products={store.products} />
        </Grid>
      </Grid>
    </>
  );
};

export default Store;
