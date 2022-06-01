import React, { useState, useContext } from "react";
import { Button, TextField, Typography, Alert } from "@mui/material";
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
      .post("http://api.developer-studio.ir/api/auth/login", state, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.data.access_token });
        localStorage.setItem("token", res.data.access_token);
        if (res.data.user.role_id === 1) {
          navigate("/admin_panel");
        } else navigate("/landing");
      })
      .catch((err) => {
        switch (err.response.status) {
          case 401:
            setErrorMessage("رمز عبور یا نام کاربری اشتباه است");
            break;
          case 422:
            setErrorMessage("رمز عبور یا نام کاربری اشتباه است");
            break;
          case 500:
            setErrorMessage("سرور با مشکل مواجه است");
            break;
          default: {
            setErrorMessage("اینترنت خود را چک کنید");
          }
        }
      });
  };

  return (
    <div className={classes.form}>
      <Typography variant="h2" className={classes.title}>
        {constant.ACCOUNT_FORM.LOGIN.TITLE}
      </Typography>
      {errorMessage && (
        <Alert variant="outlined" severity="error">
          {errorMessage}
        </Alert>
      )}

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
  );
};

export default Login;
