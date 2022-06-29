import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "85%",
    minHeight: "200vh",
    padding: "50px 70px",
    margin: "0",
    overflow: "hidden",
    backgroundColor: theme.palette.cream.light,
    borderRadius: "18px",
    opacity: "0.9",
    position: "absolute",
    top: "100px",
    right: "50px",
    backdropFilter: "brightness(60%)",
  },
}));
