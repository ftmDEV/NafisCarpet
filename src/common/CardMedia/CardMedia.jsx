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
} from "@mui/material";
//** icons & images */
import image from "../../assets/images/carpet1.jpg";
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
    if (fav) {
      dispatch({ type: "REMOVE_FROM_FAVS", payload: product.id });
    } else if (!store.basket.find((b) => b.id === product.id))
      dispatch({ type: "ADD_TO_BASKET", payload: product });
  };
  useEffect(() => {
    console.log(store);
  }, [store]);
  const handleFavs = () => {
    setOpenDialog(true);
    if (!store.favorites.find((f) => f.id === product.id))
      dispatch({ type: "ADD_TO_FAVS", payload: product });
  };
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/detail/${product.id}`, { param: product });
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };
  return (
    <div className={classes.card}>
      {product && (
        <>
          <img alt="" src={image} onClick={() => goToDetail()} />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CardContent onClick={() => goToDetail()}>
              <Typography variant="h4">{product.short_name}</Typography>
              <Typography variant="subtitle1">{` ${product.price} ريال`}</Typography>
            </CardContent>
          </Box>
          <CardActions style={{ display: "flex" }}>
            <Button>
              <Typography
                variant="h5"
                className={classes.button}
                onClick={() => handleClick()}
              >
                {button ? button : constant.BUTTONS.ADD_TO_BASKET}
              </Typography>
            </Button>
            {!fav && (
              <Button>
                <Typography
                  variant="h5"
                  className={classes.button}
                  style={{ width: "150px" }}
                  onClick={() => handleFavs()}
                >
                  {constant.BUTTONS.ADD_TO_FAVS}
                </Typography>
              </Button>
            )}
          </CardActions>
          <FormDialog openStatus={openDialog} handleClose={closeDialog} />
        </>
      )}
    </div>
  );
};

export default CommonCard;
