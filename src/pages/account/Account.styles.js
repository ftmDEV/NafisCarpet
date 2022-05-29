import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.linear,
  },
  form: {
    width: "100%",
    height: "94vh",
    backgroundColor: theme.palette.cream.light,
    padding: " 40px 50px",
    borderRadius: "10px",
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
