//** react & react-router-dom */
import React, { useContext } from "react";
//** Material Ui  */
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
//** icons & images */
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import image from "../../assets/images/carpet1.jpg";
//**styles */
import { useStyles } from "./CardMedia.Style";
//**Context */
import { ProductContext } from "../../context/context";
//**Custom Components */
import { constant } from "../../utils/constant";

const ShoppingCart = ({ product }) => {
  const classes = useStyles();
  const { dispatch, store } = useContext(ProductContext);

  const handleRemove = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: product.id });
  };
  console.log(store, product);
  return (
    <Card className={classes.shoppingCart}>
      {product && (
        <>
          <img alt="" src={image} />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CardContent style={{ width: "100%" }}>
              <Typography variant="h4">{product.short_name}</Typography>
              <Typography variant="subtitle1">{` ${product.price} ريال`}</Typography>
              <Typography variant="h4">{product.category.name}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                className={classes.button}
                onClick={() => handleRemove()}
              >
                <Typography variant="h5" className={classes.button}>
                  {" "}
                  {constant.BASKET.REMOVE}
                </Typography>
              </Button>
            </CardActions>
          </Box>
        </>
      )}
    </Card>
  );
};

export default ShoppingCart;
