import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.primary.linear,
  },
  flex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  section1: {
    // backgroundColor: "red",
    padding: "50px 100px",
    color: theme.palette.cream.main,
    "& img": {
      width: "100%",
      boxShadow:
        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      outline: `2px solid ${theme.palette.cream.main}`,
      outlineOffset: "7px",
      overflow: "hidden",
      objectFit: "cover",
    },
  },
  button: {
    width: "200px",
    color: "#fff",
    backgroundColor: theme.palette.cream.dark,
  },
}));
