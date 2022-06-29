import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "85%",
    height: "12vh",
    borderRadius: "0 0 15px 15px",
    backgroundColor: theme.palette.cream.dark,
    color: theme.palette.primary.main,
    marginBottom: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "0",
    zIndex: "9999",
  },
  link: {
    fontSize: "24px",
    color: "#000",
    textDecoration: "none",
    margin: "0 15px",
  },
  icon: {
    color: theme.palette.cream.light,
  },
}));
