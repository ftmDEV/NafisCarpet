import React, { useContext, useEffect, useState } from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import ShoppingCart from "../../common/CardMedia/shoppingCart";
import { ProductContext } from "../../context/context";
import { constant } from "../../utils/constant";

const Basket = () => {
  const [rugsCost, setCost] = useState(0);
  const { store, dispatch } = useContext(ProductContext);
  const basketList = store.basket;

  useEffect(() => {
    basketList.forEach((p) => {
      console.log(p.price, rugsCost);
      setCost(rugsCost + p.price);
    });
  }, [store]);

  return (
    <>
      {basketList.length > 0 ? (
        <Grid container spacing={4}>
          <Grid item xs={7}>
            {basketList.map((product) => (
              <ShoppingCart product={product} />
            ))}
          </Grid>
          <Grid item xs={5}>
            <Paper
              style={{
                padding: "25px",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h3"
                style={{
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                {constant.BASKET.BILL}{" "}
              </Typography>
              <Typography
                variant="h4"
                style={{
                  padding: "8px",
                  textAlign: "start",
                }}
              >
                {constant.BASKET.PRICE} : {rugsCost + "ريال"}
              </Typography>
              <Typography
                variant="h4"
                style={{
                  padding: "8px",
                  textAlign: "start",
                }}
              >
                {constant.BASKET.DELIVERY} :{"200,000ريال "}
              </Typography>
              <Typography
                variant="h4"
                style={{
                  padding: "25px",
                  textAlign: "start",
                }}
              >
                {constant.BASKET.TOTAL_PRICE} :{rugsCost + 200000 + "ريال"}
              </Typography>
              <Button>
                <Typography
                  variant="h4"
                  style={{
                    backgroundColor: "#D19335",
                    borderRadius: "5px",
                    width: "200px",
                  }}
                >
                  {constant.BASKET.PAY}
                </Typography>
              </Button>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Typography
          variant="h3"
          style={{
            textAlign: "center",
            color: "#F5B85B",
          }}
        >
          {constant.BASKET.MESSAGE}
        </Typography>
      )}
    </>
  );
};

export default Basket;
