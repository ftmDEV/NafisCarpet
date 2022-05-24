import React from "react";
import { Typography, TextField, Button, Grid } from "@mui/material";
import { constant } from "../../utils/constant.js";
import { useStyles } from "./Admin.Style.js";

// category: {id: 3, name: "همدان", slug: "hamadan"}

// origin: {id: 1, name: "ایران", slug: "iran"}

const AddNewProduct = () => {
  const classes = useStyles();
  const handleChange = (e) => {};
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xl={4} md={4} sm={4}>
          <Typography variant="h5" className={classes.textField}>
            {constant.ADMIN_PAGE.NAME}
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="short_name"
            type="text"
            name="short_name"
            fullWidth
            className={classes.textField}
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xl={4} md={4} sm={4}>
          <Typography variant="h5" className={classes.textField}>
            {constant.ADMIN_PAGE.PRICE}
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="price"
            type="text"
            name="price"
            fullWidth
            className={classes.textField}
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xl={4} md={4} sm={4}>
          <Typography variant="h5" className={classes.textField}>
            {constant.ADMIN_PAGE.DISCOUNT}
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="discount"
            type="text"
            name="discount"
            fullWidth
            className={classes.textField}
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
      </Grid>
      <div>
        <input
          accept="image/*"
          className={classes.input}
          style={{ display: "none" }}
          id="raised-button-file"
          multiple
          type="file"
        />
        <label htmlFor="raised-button-file">
          <Button variant="raised" component="span" className={classes.button}>
            {constant.ADMIN_PAGE.UPLOUD_BTN}
          </Button>
        </label>
      </div>
      <div>
        <Typography variant="h5" className={classes.textField}>
          {constant.ADMIN_PAGE.DESCRIPTION}
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="description"
          type="textarea"
          name="description"
          fullWidth
          className={classes.textField}
          variant="standard"
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default AddNewProduct;
