import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tableToolbarContainer: {
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.main,
  },
  tableToolbarTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    lineHeight: "45px",
    color: "#fff",
  },
  tableToolbarSearchText: {
    width: "200px !important",
    color: "#fff !important",
  },
  tableHeader: {
    padding: 10,
    borderBottom: "2px solid #dee2e6",
  },
  tableBody: {
    overflow: "auto",
    padding: "0 10px",
  },
  tableRow: {
    padding: "10px 0",
    borderBottom: `1px solid #eee`,
    cursor: "pointer",
  },
  // editButton: {
  //   background: theme.palette.button.main,
  //   '&:hover': {
  //     background: `${theme.palette.button.hover} !important`,
  //   },
  // },
  avatar: {
    width: "auto !important",
  },
  avatarContainer: {
    width: "auto !important",
    display: "block !important",
  },
  searchFiled: {
    width: "21%",
    margin: 5,
    height: 30,
  },
}));
