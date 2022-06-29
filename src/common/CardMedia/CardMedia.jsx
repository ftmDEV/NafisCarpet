//** react & react-router-dom */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//** Material Ui  */
import {
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
//** icons & images */
import image from "../../assets/images/carpet1.jpg";
import star from "../../assets/images/star.png";
//**styles */
import { useStyles } from "./CardMedia.Style";
//**Context */
import { ProductContext } from "../../context/context";
//**Custom Components */
import { constant } from "../../utils/constant";
import FormDialog from "../../common/dialog/Dialog";

const CommonCard = ({ product, fav, button }) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const { dispatch, store } = useContext(ProductContext);

  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      setOpenDialog(true);
    }
    if (fav) {
      dispatch({ type: "REMOVE_FROM_FAVS", payload: product.id });
    } else if (!store.basket.find((b) => b.id === product.id))
      dispatch({ type: "ADD_TO_BASKET", payload: product });
  };

  const handleFavs = () => {
    if (!localStorage.getItem("token")) {
      setOpenDialog(true);
    }
    if (!store.favorites.find((f) => f.id === product.id))
      dispatch({ type: "ADD_TO_FAVS", payload: product });
  };
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/detail/${product.slug}`, { param: product });
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };
  return (
    <div className={classes.card}>
      {product && (
        <>
          <div className={classes.star} onClick={() => handleFavs()}>
            <img alt="" src={star} />
          </div>
          <img alt="" src={image} />
          <div className={classes.flex}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CardContent onClick={() => goToDetail()}>
                <Typography variant="h4" className={classes.title}>
                  {product.short_name}
                </Typography>
                <Typography variant="subtitle1">{` ${product.price} ريال`}</Typography>
              </CardContent>
            </Box>
            {/* <CardActions> */}
            <Button>
              <Typography
                variant="body2"
                className={classes.button}
                onClick={() => handleClick()}
              >
                {button ? button : constant.BUTTONS.ADD_TO_BASKET}
              </Typography>
            </Button>
          </div>
          <div className={classes.hoverContainer} onClick={() => goToDetail()}>
            <Typography variant="subtitle1">
              {constant.BUTTONS.SEE_MORE}
            </Typography>
          </div>
          <FormDialog openStatus={openDialog} handleClose={closeDialog} />
        </>
      )}
    </div>
  );
};

export default CommonCard;
