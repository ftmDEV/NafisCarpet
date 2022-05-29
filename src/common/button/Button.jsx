import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    width: "90%",
    height: "7vh",
    backgroundColor: theme.palette.cream.main,
  },
}));
const CustomButton = ({ label }) => {
  const classes = useStyles();

  return <Button className={classes.btn}>{label}</Button>;
};

export default CustomButton;
