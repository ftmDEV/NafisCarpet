import React from "react";
import CommonCard from "../../common/CardMedia/CardMedia";
import Grid from "@mui/material/Grid";
const ProductList = ({ products }) => {
  return (
    <Grid container spacing={3}>
      {products &&
        products.map((product, index) => (
          <Grid item key={index} xl={2} md={3} sm={6}>
            <CommonCard key={product.id} product={product} />
          </Grid>
        ))}
    </Grid>
  );
};

export default ProductList;
