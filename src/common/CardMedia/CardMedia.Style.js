import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.cream.light,
    padding: "15px 0",
    height: "510px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    "& img": {
      width: "75%",
      marginTop: "24px",
    },
  },
  button: {
    width: "100px",
    height: "40px",
    margin: "0",
    padding: "2px 0",
    backgroundColor: "#d19335",
    borderRadius: "3px",
    textAlign: "center",
    color: "white",
    fontSize: "40px",
    curser: "pointer",
  },
  shoppingCart: {
    backgroundColor: "#d3d3d3",
    height: "220px",
    width: "70%",
    marginBottom: "20px",
    padding: "5px 20px",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "s",
    alignItems: "center",
    "& img": {
      width: "130px",
    },
  },
}));
