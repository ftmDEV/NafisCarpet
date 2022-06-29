import { useContext, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Select,
  MenuItem,
  Button,
  Typography,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ProductList from "../../components/list";
import { ProductContext } from "../../context/context";
import axios from "axios";
import { constant } from "../../utils/constant";
import Navbar from "../../components/navbar";

const useStyles = makeStyles((theme) => ({
  categories: {
    width: "20%",
    minHeight: "85vh",
    padding: "30px 40px",
    margin: " 0",
    overflow: "hidden",
    backgroundColor: theme.palette.cream.dark,
    borderRadius: "18px",
    opacity: "0.9",
    position: "fixed",
    top: "110px",
  },
  list: {
    position: "relative",
    top: "100px",
    scrollBehavior: "smooth",
  },
  listItem: {
    display: "flex",
    justifyContent: "start",
  },
}));

const Store = () => {
  const { store, dispatch } = useContext(ProductContext);

  const classes = useStyles();

  useEffect(() => {
    axios
      .get("http://api.developer-studio.ir/api/products")
      .then((res) => dispatch({ type: "GET_DATA_LIST", payload: res.data }));
  }, []);

  const handleChange = (e) => {
    axios
      .post(
        `http://api.developer-studio.ir/api/products?sort=${e.target.value}`
      )
      .then((res) => dispatch({ type: "GET_DATA_LIST", payload: res.data }))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar className={classes.navbar} />
      <Grid container spacing={3}>
        <Grid item xs={0} sm={3}>
          <Box sx={{ dispaly: "flex", mb: 3 }} className={classes.categories}>
            <Typography variant="h5">{constant.FILTER_BY.LABEL}</Typography>
            <Divider />
            <List component="nav">
              {constant.FILTER_BY.FILTERS.map((f) => (
                <ListItem button key={f.id}>
                  <ListItemText primary={f.name} className={classes.listItem} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} sm={9} className={classes.list}>
          <ProductList products={store.products} />
        </Grid>
      </Grid>
    </>
  );
};

export default Store;
