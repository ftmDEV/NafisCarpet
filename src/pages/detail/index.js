import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import CommonCard from "../../common/CardMedia/CardMedia";
import { constant } from "../../utils/constant";
import image from "../../assets/images/carpet1.jpg";

const Detail = (props) => {
  console.log(props);
  const [value, setValue] = useState(2);
  return (
    <Grid container spacing={3} sx={{ p: "30px 100px", overflow: "hidden" }}>
      <Grid item xs={12} sm={6}>
        {/* <BasicBreadcrumbs /> */}
        <img
          alt=""
          src={image}
          style={{ width: "75%", height: "500px", m: "30px" }}
        />
      </Grid>
      <Grid item xs={12} sm={3} sx={{ height: "85vh", my: 5 }}>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography variant="h3">product name</Typography>
        <Typography variant="subtitle1">$ 4400</Typography>
        <Button variant="contained" size="small">
          {constant.BUTTONS.ADD_TO_BASKET}
        </Button>
        <Typography variant="subtitle1">
          {constant.SHOP_INFO.TEL.LABLE} : {constant.SHOP_INFO.TEL.CONTENT}
          <br />
          {constant.SHOP_INFO.PHONE_NUMBER.LABLE} :{" "}
          {constant.SHOP_INFO.PHONE_NUMBER.CONTENT}
          <br />
          {constant.SHOP_INFO.ADDRESS.LABLE} :{" "}
          {constant.SHOP_INFO.ADDRESS.CONTENT}
          <br />
          {constant.SHOP_INFO.EMAIL.LABLE} : {constant.SHOP_INFO.EMAIL.CONTENT}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h5">{constant.PRODUCT_DESCRIPTION}</Typography>
        <Typography variant="body1">
          Large Persian motifs call attention to the brilliant,
          <br /> earth-tone hues and vibrant blue highlights that fill the soft,
          <br /> ornate pile. The ideal floor coverings to accentuate living
          room or
          <br /> dining room decor.
        </Typography>
        <Typography variant="subtitle1">
          Size: 4’9 X 6'8
          <br />
          Style: Traditional
          <br />
          Type: Bijar
          <br />
          Origin: Persian
          <br />
          Age: New
          <br />
          Color: Red
          <br />
          Content: 100% Wool
          <br />
          Construction: Hand Knotted
          <br />
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ height: "95vh" }}>
        <Typography variant="h6">{constant.RELATED_PRODUCTS}</Typography>
        <Grid container spacing={3}>
          <Grid item>
            <CommonCard />
          </Grid>
          <Grid item>
            <CommonCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Detail;
