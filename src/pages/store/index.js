import { useContext, useEffect } from "react";
import { Box, Select, MenuItem, Button, Typography } from "@mui/material";

import ProductList from "../../components/list";
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

  const handleChange = (e) => {
    console.log(e.target.value);
    axios
      .post(
        `http://api.developer-studio.ir/api/products?sort=${e.target.value}`
      )
      .then((res) => dispatch({ type: "GET_DATA_LIST", payload: res.data }))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Navbar />
      <Box sx={{ dispaly: "flex", mb: 3 }}>
        <Typography variant="subtitle1">{constant.FILTER_BY.LABEL}</Typography>
        <Select
          placeholder={constant.FILTER_BY.LABEL}
          style={{ width: "20%", margin: "10px 0", backgroundColor: "white" }}
          name="category_id"
          size="small"
          onChange={handleChange}
        >
          {constant.FILTER_BY.FILTERS.map((c) => (
            <MenuItem key={c.id} value={c.link}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
        {/* <Select
          placeholder={constant.FILTER_BY.SIZE}
          style={{ width: "20%", margin: "10px", backgroundColor: "white" }}
          name="category_id"
          size="small"
          // onChange={handleChange}
        >
          {constant.FILTER_BY.SIZES.map((c) => (
            <MenuItem key={c.id} value={c.id}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
        <Button variant="contained">{constant.FILTER_BY.BUTTON}</Button> */}
      </Box>
      <ProductList products={store.products} />
    </>
  );
};

export default Store;
