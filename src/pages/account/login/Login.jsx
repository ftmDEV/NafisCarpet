import React, { useState, useContext } from "react";
import { Button, Grid, TextField, Typography, Alert } from "@mui/material";
import { useStyles } from "../Account.styles";
import { constant } from "../../../utils/constant";
import { ProductContext } from "../../../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { store, dispatch } = useContext(ProductContext);

  const [errorMessage, setErrorMessage] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const classes = useStyles();
  const navigate = useNavigate();
  const handleLink = () => {
    navigate("/register");
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    axios
      .post("http://api.developer-studio.ir/api/auth/Login", state, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.data.access_token });
        console.log(JSON.parse(localStorage.getItem("token")), "token");
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(err.response.message);
      });
  };

  return (
    <Grid container spacing={4}>
      <Grid item xl={4} md={4} sm={6}>
        <div className={classes.form}>
          <Typography variant="h2" className={classes.title}>
            {constant.ACCOUNT_FORM.LOGIN.TITLE}
          </Typography>

          <div className={classes.input} style={{ margin: "100px 0 0" }}>
            <Typography variant="h5" className={classes.textField}>
              {constant.ACCOUNT_FORM.LOGIN.EMAIL}
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              name="email"
              type="email"
              fullWidth
              className={classes.textField}
              variant="standard"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <Typography variant="h5" className={classes.textField}>
              {constant.ACCOUNT_FORM.LOGIN.PASSWORD}
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              id="password"
              type="password"
              name="password"
              fullWidth
              className={classes.textField}
              variant="standard"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <Button
            className={classes.btn}
            variant="contained"
            style={{ margin: "20px 0" }}
            onClick={() => handleSubmit()}
          >
            <Typography variant="h4">
              {constant.ACCOUNT_FORM.LOGIN.TITLE}
            </Typography>
          </Button>
          <Typography
            variant="h5"
            className={classes.link}
            onClick={() => handleLink()}
          >
            {constant.ACCOUNT_FORM.LOGIN.SIGNED_UP}
          </Typography>
        </div>
      </Grid>
      <Grid item xl={8} md={8} sm={6}>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </Grid>
    </Grid>
  );
};

export default Login;
