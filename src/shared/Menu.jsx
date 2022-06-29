import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Avatar from "../assets/icons/userAvatar.png";
import { constant } from "../utils/constant";

const useStyles = makeStyles((theme) => ({
  profile: {
    width: "100%",
    display: "flex",
    curser: "pointer",
    "& img": {
      width: "100%",
      borderRadius: "10px",
      overflow: "hidden",
      objectFit: "cover",
      [theme.breakpoints.down("md")]: {
        outline: "2px solid #fff",
      },
    },
  },
  welcomeMessage: {
    color: "#000",
  },
}));
const CustomMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navagation = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleChoose = (link) => {
    navagation(link);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ display: "flex" }}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <div className={classes.profile}>
          <img alt="profile_image" src={Avatar} />
        </div>
      </Button>
      <div style={{ marginTop: "10px" }}>
        <Typography variant="subtitle1" className={classes.welcomeMessage}>
          {/* {constant.PROFILE.USER_NAME} */}
        </Typography>
        <Typography variant="caption" className={classes.welcomeMessage}>
          {/* {constant.PROFILE.WELCOME_MESSAGE} */}
        </Typography>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {constant.PROFILE.PROFILE_DROP_DOWN.map((item) => (
          <MenuItem key={item.id} onClick={() => handleChoose(item.link)}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CustomMenu;
