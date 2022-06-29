import * as React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { constant } from "../../utils/constant";
import { useStyles } from "./AppBar.style";
import axios from "axios";
import { ProductContext } from "../../context/context";
const pages = constant.MENU;

const account = constant.ACCOUNT;

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { store, dispatch } = React.useContext(ProductContext);

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

  const handleLogout = () => {};

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h4">{constant.LOGO}</Typography>
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
                  <Typography variant="h6" onClick={handleCloseNavMenu}>
                    {page.label}
                  </Typography>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mx: 5 }}>
            {pages.map((page) => (
              <Typography
                variant="h5"
                key={page.label}
                onClick={handleCloseNavMenu}
              >
                <NavLink to={page.link} className={classes.link}>
                  {page.label}
                </NavLink>
              </Typography>
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
              <Badge badgeContent={store.favorites.length} color="primary">
                <Typography variant="h6">{constant.TOOLTIPS[0]}</Typography>
              </Badge>
            </NavLink>
            <NavLink to="/basket" className={classes.link}>
              <Badge badgeContent={store.basket.length} color="primary">
                <Typography variant="h6">{constant.TOOLTIPS[2]}</Typography>
              </Badge>
            </NavLink>
            <NavLink to="" className={classes.link}>
              <Button
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                variant="h6"
              >
                {constant.TOOLTIPS[1]}
              </Button>
            </NavLink>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleOpenUserMenu}
            >
              {pages.map((page) => (
                <NavLink
                  className={classes.link}
                  to={page.link}
                  key={page.label}
                >
                  <Typography variant="h6" onClick={handleCloseUserMenu}>
                    {page.label}
                  </Typography>
                </NavLink>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </div>
  );
};
export default ResponsiveAppBar;
