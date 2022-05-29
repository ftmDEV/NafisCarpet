import React, { useState, useContext } from "react";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { constant } from "../../utils/constant.js";
import { useStyles } from "./Admin.Style.js";
import { ProductContext } from "../../context/context";

const category = [
  { id: 1, name: "همدان", slug: "hamadan" },
  { id: 2, name: "همدان", slug: "hamadan" },
  { id: 3, name: "همدان", slug: "hamadan" },
  { id: 4, name: "همدان", slug: "hamadan" },
];

const origin = [
  { id: 1, name: "ایران", slug: "iran" },
  { id: 2, name: "ایران", slug: "iran" },
  { id: 3, name: "ایران", slug: "iran" },
  { id: 4, name: "ایران", slug: "iran" },
];
const material = [
  { id: 1, name: "ایران", slug: "iran" },
  { id: 2, name: "ایران", slug: "iran" },
  { id: 3, name: "ایران", slug: "iran" },
  { id: 4, name: "ایران", slug: "iran" },
];

const AddNewProduct = () => {
  const [values, setValues] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const { store, dispatch } = useContext(ProductContext);
  const classes = useStyles();

  const handleChange = (e) => {
    if (e.target.name === "price" || e.target.name === "number") {
      setValues({ ...values, [e.target.name]: parseInt(e.target.value) });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const handleImageUpload = (e) => {
    setValues({ ...values, thumbnail: e.target.files[0] });
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("short_name", values.short_name);
    formData.append("category_id", values.category_id);
    formData.append("origin_id", values.origin_id);
    formData.append("price", values.price);
    formData.append("number", values.number);
    formData.append("material", values.material);
    formData.append("description", values.description);
    formData.append("slug", "slug");
    formData.append("thumbnail", values.thumbnail);

    const token = localStorage.getItem("token");
    axios
      .post("http://api.developer-studio.ir/api/add-product", formData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // dispatch({ type: "ADD_PRODUCT", payload: res.data });
      })
      .catch((err) => {
        setErrorMessage(err.response.message);
      });
  };
  return (
    <div className={classes.root}>
      <Typography>{errorMessage}</Typography>
      <Grid container>
        <Grid item xl={4} md={4} sm={4}>
          <Typography variant="h5" className={classes.textField}>
            {constant.ADMIN_PAGE.NAME}
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            name="name"
            fullWidth
            className={classes.textField}
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xl={4} md={4} sm={4}>
          <Typography variant="h5" className={classes.textField}>
            {constant.ADMIN_PAGE.SHORT_NAME}
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
            {constant.ADMIN_PAGE.NUMBER}
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="number"
            type="text"
            name="number"
            fullWidth
            className={classes.textField}
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xl={4} md={4} sm={4}>
          <Typography variant="h5" className={classes.textField}>
            {constant.ADMIN_PAGE.CATEGORY}
          </Typography>
          <Select defaultValue="1" name="category_id" onChange={handleChange}>
            {category.map((c) => (
              <MenuItem key={c.id} value={c.id}>
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xl={4} md={4} sm={4}>
          <Typography variant="h5" className={classes.textField}>
            {constant.ADMIN_PAGE.MATERIAL}
          </Typography>
          <Select defaultValue="ابران" name="material" onChange={handleChange}>
            {material.map((c) => (
              <MenuItem key={c.id} value={c.name}>
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xl={4} md={4} sm={4}>
          <Typography variant="h5" className={classes.textField}>
            {constant.ADMIN_PAGE.ORIGIN}
          </Typography>
          <Select defaultValue="1" name="origin_id" onChange={handleChange}>
            {origin.map((c) => (
              <MenuItem key={c.id} value={c.id}>
                {c.name}
              </MenuItem>
            ))}
          </Select>
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
          name="thumbnail"
          onChange={(e) => handleImageUpload(e)}
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
      <Button onClick={handleSubmit}>{constant.BUTTONS.SUBMIT}</Button>
    </div>
  );
};

export default AddNewProduct;
