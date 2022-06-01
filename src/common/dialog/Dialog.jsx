import React, { useState } from "react";

import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  InputLabel,
} from "@mui/material";
import { constant } from "../../utils/constant";
//**styles */
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "30px",
    backgroundColor: "red",
  },
  textField: {
    fontSize: "2rem",
    color: "red",
  },
  input: {
    margin: "15px 0",
  },
  link: {
    cursor: "pointer",
    color: "blue",
  },
  button: {
    fontSize: "5rem",
  },
}));

const FormDialog = ({ openStatus, handleClose }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleUnSubmited = () => {
    navigate("/register");
  };
  return (
    <div className={classes.root} style={{ backgroundColor: "red" }}>
      <Dialog open={openStatus} onClose={handleClose}>
        <DialogTitle variant="h2">
          {constant.ACCOUNT_FORM.LOGIN.TITLE}
        </DialogTitle>
        <DialogContent style={{ margin: "10px" }}>
          <DialogContentText variant="h4">
            {constant.ACCOUNT_FORM.LOGIN.GUID_LINE}
          </DialogContentText>
          <div className={classes.input}>
            <InputLabel className={classes.textField}>
              {constant.ACCOUNT_FORM.LOGIN.USER_NAME}
            </InputLabel>
            <TextField
              autoFocus
              margin="dense"
              id="username"
              // label={constant.ACCOUNT_FORM.LOGIN.USER_NAME}
              type="text"
              fullWidth
              className={classes.textField}
              variant="standard"
            />
          </div>
          <div>
            <InputLabel className={classes.textField}>
              {constant.ACCOUNT_FORM.LOGIN.PASSWORD}
            </InputLabel>
            <TextField
              autoFocus
              margin="dense"
              id="password"
              // label={constant.ACCOUNT_FORM.LOGIN.PASSWORD}
              type="password"
              fullWidth
              className={classes.textField}
              variant="standard"
            />
          </div>
          <Typography
            variant="h5"
            mt={3}
            className={classes.link}
            onClick={handleUnSubmited}
          >
            {constant.ACCOUNT_FORM.LOGIN.SIGNED_UP}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.button}>
            <Typography variant="h4">{constant.BUTTONS.CANCLE}</Typography>
          </Button>
          <Button onClick={handleClose} className={classes.button}>
            <Typography variant="h4">{constant.BUTTONS.SUBMIT}</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
