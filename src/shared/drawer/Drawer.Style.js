import { makeStyles } from "@mui/styles";
import { constant } from "../../utils/constant";

const drawerWidth = constant.DRAWER_WIDTH;

export const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appBar: {
    width: "99%",
    height: "85px",
    padding: "6px 15px",
    margin: "11px 0",
    backgroundColor: "#FFF",
    boxShadow: " 0px 2px 8px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "5px",
    position: "-webkit-sticky",
    position: "sticky",
    top: "11px",
    zIndex: "3",
    [theme.breakpoints.down("md")]: {
      height: "50px",
      top: 0,
    },
  },
  appBarContent: {
    width: "100%",
    display: "flex",
    padding: "8px 0",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  verifyBtn: {
    width: "auto !important",
    backgroundColor: `${theme.palette.cream.main} !important`,
    color: "#000",
    "&:hover": {
      backgroundColor: `${theme.palette.cream.light} !important`,
      color: "#000",
    },
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  welcomeMessage: {
    color: theme.palette.grey.dark,
  },

  openDrawer: {
    direction: "rtl",
    width: drawerWidth,
    minHeight: "100%",
    margin: "10px",
    padding: "10px ",
    borderRadius: "5px",
    background: theme.palette.primary.linear,
    boxShadow: "4px 8px 4px 0px rgba(84, 84, 84, 0.1)",
    color: "#fff",
    overflow: "visible",
    flexShrink: 0,
    right: 0,
    left: "auto",
    zIndex: "10000",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  closedDrawer: {
    width: "80px",
    minHeight: "100%",
    margin: "10px",
    padding: "10px 15px",
    borderRadius: "5px",
    background: theme.palette.primary.linear,
    boxShadow: "4px 8px 4px 0px rgba(84, 84, 84, 0.1)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    overflow: "visible",
    flexShrink: 0,
    right: 0,
    left: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "50px",
      margin: "0",
    },
  },

  item: {
    height: "50px",
  },
  flexCenter: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "0",
    height: "50px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    overflow: "visible",
    flexShrink: 0,
    right: 0,
    left: "auto",
  },

  // flexCenter: {
  //   width: '100%',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   margin: '0',
  //   padding: '10px 0',
  // },

  icon: {
    minWidth: 50,
    display: "flex",
    justifyContent: "center",
    color: "#fff",
  },
  content: {
    width: "99%",
    margin: "11px auto",

    [theme.breakpoints.down("md")]: {
      padding: "15px 25px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "15px 30px",
    },
    [theme.breakpoints.down("ft")]: {
      padding: "0",
    },
  },
  footer: {
    position: "fixed",
    bottom: "0px",
    left: "0px",
  },
}));
