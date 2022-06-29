import React, { useState, useEffect, useContext } from "react";

import { Typography, Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import CommonCard from "../../common/CardMedia/CardMedia";
import { constant } from "../../utils/constant";
import image from "../../assets/images/carpet1.jpg";
import Navbar from "../../components/navbar";
import { useStyles } from "./Detail.Style";
import { ProductContext } from "../../context/context";
import { useParams } from "react-router-dom";
import axios from "axios";
import BasicBreadcrumbs from "../../common/BreadScrumbs/BreadScrumbs";

const Detail = () => {
  const { id } = useParams();
  const classes = useStyles();
  const [value, setValue] = useState(2);
  const [openDialog, setOpenDialog] = useState(false);

  const { store, dispatch } = useContext(ProductContext);

  const detail = store.productDetail;
  useEffect(() => {
    axios
      .get(`http://api.developer-studio.ir/api/product/${id}`)
      .then((res) => {
        dispatch({ type: "GET_PRODUCT_DETAIL", payload: res.data });
      });
  }, []);
  const handleAddToBasket = () => {
    if (!localStorage.getItem("token")) {
      setOpenDialog(true);
    }
    dispatch({ type: "ADD_TO_BASKET", payload: value });
  };

  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <BasicBreadcrumbs product={detail.short_name} />
        <Grid container>
          <Grid item xs={12} sm={6}>
            {/* <BasicBreadcrumbs /> */}
            <img
              alt=""
              src={image}
              style={{ width: "75%", height: "600px", m: "30px" }}
            />
          </Grid>
          <Grid item xs={12} sm={5} sx={{ height: "85vh" }}>
            <Typography variant="h3">{detail.short_name}</Typography>
            <br />
            <Typography variant="h6">{detail.price}ريال</Typography>

            {/* <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <br />
          <Button variant="contained" size="large" onClick={handleAddToBasket}>
            {constant.BUTTONS.ADD_TO_BASKET}
          </Button> */}
            {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Typography style={{ marginTop: "30px" }} variant="h6">
              دسته بندی : {detail.category.name}
            </Typography>

            <Typography style={{ marginTop: "30px" }} variant="h6">
              اصالت : {detail.origin.name}
            </Typography>

            <Typography style={{ marginTop: "30px" }} variant="h6">
              مواد ساخت : {detail.material}
            </Typography>
          </div> */}
            <br />
            <Typography style={{ marginTop: "30px" }} variant="h5">
              ابعاد فرش : 150 × 102
            </Typography>
            <Typography style={{ marginTop: "30px" }} variant="h5">
              نوع : عشایری (قشقایی، بختیاری، ترکمن و...)
            </Typography>
            <Typography style={{ marginTop: "30px" }} variant="h5">
              اصالت طرح : بختیاری
            </Typography>
            <Typography style={{ marginTop: "30px" }} variant="h5">
              جنس : تمام پشم
            </Typography>
            <Typography style={{ marginTop: "30px" }} variant="h5">
              رنگ حاشیه : قرمز پر رنگ / لاکی
            </Typography>
            <Typography style={{ marginTop: "30px" }} variant="h5">
              شکل : مستطیل
            </Typography>
            <Typography style={{ marginTop: "30px" }} variant="h5">
              وزن تقریبی (کیلوگرم) : 4
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7} spacing={5}>
            <Typography style={{ margin: "30px 0" }} variant="h4">
              {constant.PRODUCT_DESCRIPTION}
            </Typography>
            <Typography
              className={classes.text}
              variant="h5"
              sx={{ lineHeight: "3.5rem", paddingLeft: "50px" }}
            >
              فرش دستباف قشقایی را می توان یکی از نمادهای اصالت و زیبایی هنر
              قالی بافی در بین ایرانیان معرفی کرد که توانسته بخاطر ویژگی ها و
              مشخصات ساختاری خاص خود، توجه بسیاری از مردم ایران و حتی جهان را به
              خود جلب کند. در بین خصوصیات قالی قشقایی تنوع طرحی بسیار بالا و
              استفاده از رنگ های طبیعی جز اصلی ترین گزینه ها می باشد.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} sx={{ height: "95vh" }}>
            <Typography style={{ marginTop: "30px" }} variant="h4">
              {constant.RELATED_PRODUCTS}
            </Typography>
            <Grid container spacing={3}>
              {store.products.map((p) => (
                <Grid item sm={6}>
                  <CommonCard product={p} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Detail;
