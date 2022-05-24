import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { constant } from "../../utils/constant";
// import Tooltip from "@mui/material/Tooltip";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useStyles } from "./AppBar.style";
const pages = constant.MENU;

const account = constant.ACCOUNT;

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const classes = useStyles();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div position="static" className={classes.root}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h2"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            {constant.LOGO}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <NavLink
                  className={classes.link}
                  to={page.link}
                  key={page.label}
                >
                  <MenuItem onClick={handleCloseNavMenu}></MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            {constant.LOGO}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mx: 5 }}>
            {pages.map((page) => (
              <NavLink
                className={classes.link}
                to={page.link}
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page.label}
              </NavLink>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavLink to="/wish_list" className={classes.link}>
              {/* <Tooltip title={constant.TOOLTIPS[0]}>
                <IconButton>
                  <FavoriteBorderIcon className={classes.icon} />
                </IconButton>
              </Tooltip> */}
              <Typography variant="h4">{constant.TOOLTIPS[0]}</Typography>
            </NavLink>
            <NavLink to="/account" className={classes.link}>
              {/* <Tooltip title={constant.TOOLTIPS[2]}>
                <IconButton onClick={handleOpenUserMenu}>
                  <AccountBoxIcon className={classes.icon} />
                </IconButton>
              </Tooltip> */}
              <Typography variant="h4">{constant.TOOLTIPS[2]}</Typography>
            </NavLink>
            <NavLink to="/basket" className={classes.link}>
              {/* <Tooltip title={constant.TOOLTIPS[1]}>
              <IconButton>
                <ShoppingBasketIcon className={classes.icon} />
                
              </IconButton>
              </Tooltip> */}
              <Typography variant="h4">{constant.TOOLTIPS[1]}</Typography>
            </NavLink>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {account.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </div>
  );
};
export default ResponsiveAppBar;
