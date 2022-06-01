import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.linear,
  },
  form: {
    width: "35%",
    height: "94vh",
    backgroundColor: theme.palette.cream.light,
    padding: " 40px 50px",
    margin: "0 auto",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: 0,
      // backgroundColor: "red",
    },
  },
  title: {
    textAlign: "center",
  },
  link: {
    color: "blue",
    cursor: "pointer",
  },
  btn: {
    width: "100%",
    height: "7vh",
    marginTop: "20px",
  },
}));
