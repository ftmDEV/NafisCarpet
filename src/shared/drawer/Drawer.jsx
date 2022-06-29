import React, { useState } from "react";
import {
  Grid,
  Hidden,
  Drawer,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import ClosedMenu from "./ClosedMenu";
import CustomMenu from "../Menu";
import CustomButton from "../button/Button";
import { constant } from "../../utils/constant";
import menuIcon from "../../assets/icons/menu.png";
import phoneIcon from "../../assets/icons/phone.png";
import AlertIcon from "../../assets/icons/alert.png";
import { useStyles } from "./Drawer.Style";

const CustomDrawer = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Grid container>
      <Grid
        item
        xs={0}
        sm={0}
        md={openDrawer ? 2.8 : 1.2}
        lg={openDrawer ? 2 : 1}
      >
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.openDrawer,
            }}
            anchor={theme.direction === "rtl" ? "left" : "right"}
          >
            <ClosedMenu openDrawer />
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={
              openDrawer
                ? { paper: classes.openDrawer }
                : {
                    paper: classes.closedDrawer,
                  }
            }
            variant="permanent"
            anchor={theme.direction === "rtl" ? "left" : "right"}
            open
          >
            <ClosedMenu openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          </Drawer>
        </Hidden>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={openDrawer ? 9 : 10.8}
        lg={openDrawer ? 10 : 11}
      >
        <div className={classes.appBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <img alt="" src={menuIcon} />
          </IconButton>
          <div className={classes.appBarContent}>
            <CustomMenu />
            <div>
              <CustomButton
                // label={constant.METER_MANAGEMENT.METER_LIST.VERIFY_BUTTON}
                className={classes.verifyBtn}
              />
              <IconButton>
                <img alt="" src={AlertIcon} />
              </IconButton>
              <IconButton>
                <img alt="" src={phoneIcon} />
              </IconButton>
            </div>
          </div>
        </div>
        <main className={classes.content}>
          {children}
          <footer className={classes.footer}>
            <Typography>©2022 Beta Chain. All Rights Reserved</Typography>
          </footer>
        </main>
      </Grid>
    </Grid>
  );
};

export default CustomDrawer;
