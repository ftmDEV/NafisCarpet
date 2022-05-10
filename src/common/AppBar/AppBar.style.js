import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "12vh",
    borderRadius: "15px",
    backgroundColor: theme.palette.cream.dark,
    color: theme.palette.primary.main,
    marginBottom: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    fontSize: "40px",
    color: "#000",
    textDecoration: "none",
    margin: "0 15px",
  },
  icon: {
    color: theme.palette.cream.light,
  },
}));
