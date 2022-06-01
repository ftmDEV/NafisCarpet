import React, { useState, useContext } from "react";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
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

const AddNewProduct = ({ isOpen, setOpenModal }) => {
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
    formData.append("slug", `slug_${values.name}`);
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

    setOpenModal(false);
  };
  return (
    <Dialog open={isOpen}>
      <DialogTitle variant="h2">
        <Typography variant="h5">
          {constant.ADMIN_PAGE.ADD_PRODUCT_TITLE}
        </Typography>
        <Typography>{errorMessage}</Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xl={6} md={6} sm={6}>
            <Typography variant="body1" className={classes.textField}>
              {constant.ADMIN_PAGE.NAME}
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              type="text"
              name="name"
              size="small"
              fullWidth
              className={classes.textField}
              variant="standard"
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item xl={6} md={6} sm={6}>
            <Typography variant="body1" className={classes.textField}>
              {constant.ADMIN_PAGE.SHORT_NAME}
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              id="short_name"
              type="text"
              name="short_name"
              size="small"
              fullWidth
              className={classes.textField}
              variant="standard"
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item xl={6} md={6} sm={6}>
            <Typography variant="body1" className={classes.textField}>
              {constant.ADMIN_PAGE.PRICE}
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              id="price"
              type="text"
              name="price"
              size="small"
              fullWidth
              className={classes.textField}
              variant="standard"
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item xl={6} md={6} sm={6}>
            <Typography variant="body1" className={classes.textField}>
              {constant.ADMIN_PAGE.NUMBER}
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              id="number"
              type="text"
              name="number"
              size="small"
              fullWidth
              className={classes.textField}
              variant="standard"
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item xl={6} md={6} sm={6}>
            <Typography variant="body1" className={classes.textField}>
              {constant.ADMIN_PAGE.CATEGORY}
            </Typography>
            <Select
              defaultValue="1"
              style={{ width: "100%", margin: "10px 0" }}
              name="category_id"
              size="small"
              onChange={handleChange}
            >
              {category.map((c) => (
                <MenuItem key={c.id} value={c.id}>
                  {c.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xl={6} md={6} sm={6}>
            <Typography variant="body1" className={classes.textField}>
              {constant.ADMIN_PAGE.MATERIAL}
            </Typography>
            <Select
              defaultValue="ابران"
              style={{ width: "100%", margin: "10px 0" }}
              name="material"
              size="small"
              onChange={handleChange}
            >
              {material.map((c) => (
                <MenuItem key={c.id} value={c.name}>
                  {c.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xl={6} md={6} sm={6}>
            <Typography variant="body1" className={classes.textField}>
              {constant.ADMIN_PAGE.ORIGIN}
            </Typography>
            <Select
              defaultValue="1"
              style={{ width: "100%", margin: "10px 0" }}
              name="origin_id"
              size="small"
              onChange={handleChange}
            >
              {origin.map((c) => (
                <MenuItem key={c.id} value={c.id}>
                  {c.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xl={6} md={6} sm={6}>
            <Typography variant="body1" className={classes.textField}>
              {constant.ADMIN_PAGE.UPLOUD_BTN}
            </Typography>
            <TextField
              name="thumbnail"
              variant="standard"
              onChange={(e) => handleChange(e)}
            />
          </Grid>
        </Grid>
        {/* <div>
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
            <Button
              variant="raised"
              component="span"
              className={classes.button}
            >
              {constant.ADMIN_PAGE.UPLOUD_BTN}
            </Button>
          </label>
        </div> */}

        <div>
          <Typography variant="body1" className={classes.textField}>
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
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleSubmit}>
          {constant.BUTTONS.SUBMIT}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewProduct;
