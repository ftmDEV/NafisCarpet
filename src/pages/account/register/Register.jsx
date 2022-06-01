import React, { useState, useContext } from "react";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { useStyles } from "../Account.styles";
import { constant } from "../../../utils/constant";
import { ProductContext } from "../../../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { store, dispatch } = useContext(ProductContext);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const classes = useStyles();
  const navigate = useNavigate();

  const handleLink = () => {
    navigate("/login");
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    axios
      .post("http://api.developer-studio.ir/api/auth/register", state, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        dispatch({ type: "REGISTER", payload: res.data.access_token });
        localStorage.setItem("token", res.data.access_token);
        navigate("/landing");
      })
      .catch((err) => {
        switch (err.response.status) {
          case 401:
            setErrorMessage("رمز عبور یا نام کاربری اشتباه است");
            break;
          case 422:
            setErrorMessage("فیلد ها را کامل پر کنید");
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
      <Typography variant="h3" className={classes.title}>
        {constant.ACCOUNT_FORM.REGISTER.TITLE}
      </Typography>
      {errorMessage && (
        <Alert variant="outlined" severity="error">
          {errorMessage}
        </Alert>
      )}
      <div className={classes.input} style={{ marginTop: "20px" }}>
        <Typography variant="h6" className={classes.textField}>
          {constant.ACCOUNT_FORM.REGISTER.USER_NAME}
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="username"
          name="name"
          type="text"
          fullWidth
          className={classes.textField}
          variant="standard"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={classes.input}>
        <Typography variant="h6" className={classes.textField}>
          {constant.ACCOUNT_FORM.REGISTER.EMAIL}
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
        <Typography variant="h6" className={classes.textField}>
          {constant.ACCOUNT_FORM.REGISTER.PASSWORD}
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
      <div>
        <Typography variant="h6" className={classes.textField}>
          {constant.ACCOUNT_FORM.REGISTER.CONFIRM_PASSWORD}
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="password_confirmation"
          type="password"
          name="password_confirmation"
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
        <Typography variant="h6">
          {constant.ACCOUNT_FORM.REGISTER.TITLE}
        </Typography>
      </Button>
      <Typography
        variant="h6"
        className={classes.link}
        onClick={() => handleLink()}
      >
        {constant.ACCOUNT_FORM.REGISTER.LOGED_IN}
      </Typography>
    </div>
  );
};

export default Register;
