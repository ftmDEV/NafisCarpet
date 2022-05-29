import React, { useContext } from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { ProductContext } from "../../context/context";
import { constant } from "../../utils/constant";
import CommonCard from "../../common/CardMedia/CardMedia";
import Navbar from "../../components/navbar";

const WishList = () => {
  const { store, dispatch } = useContext(ProductContext);
  const WishListList = store.favorites;

  return (
    <>
      <Navbar />
      {WishListList.length > 0 ? (
        <Grid container spacing={4}>
          {WishListList.map((product) => (
            <Grid item xs={12} sm={3}>
              <CommonCard
                product={product}
                button={constant.WishList.REMOVE}
                fav={true}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          variant="h3"
          style={{
            textAlign: "center",
            color: "#F5B85B",
          }}
        >
          {constant.WishList.MESSAGE}
        </Typography>
      )}
    </>
  );
};

export default WishList;
