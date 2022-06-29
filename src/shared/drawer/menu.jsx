import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {
  Divider,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  // ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import constant from 'src/utils/constant';
import logo from '../../../assets/images/logo.png';
import {useStyles} from './Drawer.Style';

const DrawerMenu = () => {
  const classes = useStyles();
  const location = useLocation();
  const [dropDownItem, setDropDownItem] = useState('');
  const [subMenu, setSubmenu] = useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleDropDownItems = item => {
    if (item.subs && subMenu) {
      setDropDownItem(item.name);
      setSubmenu(item.subs);
      setSelectedIndex(item.id);
    } else {
      setSubmenu([]);
    }
  };

  return (
    <div>
      <Toolbar className={classes.logo}>
        <div className={classes.logoImage}>
          <img src={logo} alt="" />
        </div>
        <div>
          <Typography variant="subtitle1">
            {constant.PROJECT_DETAIL.TITLE}
          </Typography>
          <Typography variant="caption">
            {constant.PROJECT_DETAIL.SUBTITLE}
          </Typography>
        </div>
      </Toolbar>
      <Divider />
      <List>
        {constant.DRAWER_MENU_ITEMS.map(item => {
          const {id, name, link} = item;
          return (
            <div key={id}>
              <ListItem
                component={Link}
                to={link}
                button
                key={item.id}
                className={classes.listItem}
                selected={selectedIndex === 0}
                onClick={() => handleDropDownItems(item)}
              >
                <ListItemIcon className={classes.icon}>
                  <img alt="" src={item.icon} />
                  <Divider />
                </ListItemIcon>
                <Typography variant="body2">{name}</Typography>
              </ListItem>
              {subMenu &&
                item.name === dropDownItem &&
                subMenu.map(subItem => (
                  <ListItem
                    // eslint-disable-next-line react/no-array-index-key
                    key={subItem.id}
                    component={Link}
                    to={link}
                    button
                    selected={location.pathname === link}
                    className={classes.subItem}
                  >
                    <ListItemIcon className={classes.icon}>
                      <Icon>
                        <AppsIcon />
                      </Icon>
                    </ListItemIcon>
                    <Typography variant="body2">{subItem.subname}</Typography>
                  </ListItem>
                ))}
            </div>
          );
        })}
      </List>
    </div>
  );
};
export default DrawerMenu;
