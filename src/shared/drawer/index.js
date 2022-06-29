import React from 'react';
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  useTheme,
  Typography,
  Grid,
} from '@mui/material';
import PropType from 'prop-types';
import ClosedMenu from './ClosedMenu';
import DrawerMenu from './menu';
import CustomMenu from '../Menu';
import CustomButton from '../button/Button';
import {useStyles} from './Drawer.Style';
import menuIcon from '../../../assets/icons/menu.png';
import phoneIcon from '../../../assets/icons/phone.png';
import AlertIcon from '../../../assets/icons/alert.png';
import Constant from '../../../utils/constant';

const CustomDrawer = props => {
  const {children} = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs="0" sm="0" md="1" xl="1">
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'left' : 'right'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <DrawerMenu />
            </Drawer>
          </Hidden>
          <Hidden mdDown implementation="css">
            <Drawer
              classes={{
                paper: classes.closedDrawerPaper,
              }}
              variant="permanent"
              anchor={theme.direction === 'rtl' ? 'left' : 'right'}
              open
            >
              <ClosedMenu />
            </Drawer>
          </Hidden>
        </nav>
      </Grid>
      <Grid item xs="12" sm="12" md="11" xl="11">
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
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
                  label={Constant.METER_MANAGEMENT.METER_LIST.VERIFY_BUTTON}
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
          </Toolbar>
        </AppBar>
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

CustomDrawer.propTypes = {
  children: PropType.node.isRequired,
};

export default CustomDrawer;
