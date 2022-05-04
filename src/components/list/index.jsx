import React from 'react'
import CommonCard from "../../common/CardMedia/CardMedia";
import Grid from "@mui/material/Grid"

const ProductList = () => {
  return (
    <Grid container spacing={3}>
        <Grid item xs={3}>
            <CommonCard/>
        </Grid>
        <Grid item xs={3}>
            <CommonCard/>
        </Grid>
        <Grid item xs={3}>
            <CommonCard/>
        </Grid>
        <Grid item xs={3}>
            <CommonCard/>
        </Grid>
        <Grid item xs={3}>
            <CommonCard/>
        </Grid>
        <Grid item xs={3}>
            <CommonCard/>
        </Grid>
        <Grid item xs={3}>
            <CommonCard/>
        </Grid>
        <Grid item xs={3}>
            <CommonCard/>
        </Grid>
    </Grid>
  )
}

export default ProductList