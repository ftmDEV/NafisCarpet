import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Divider, List, ListItem, Toolbar, Typography } from "@mui/material";
import { constant } from "../../utils/constant";
import { useStyles } from "./Drawer.Style";
import logo from "../../assets/icons/userAvatar.png";

const ClosedMenu = ({ openDrawer, setOpenDrawer }) => {
  const classes = useStyles();
  const location = useLocation();
  const [dropDownItem, setDropDownItem] = useState("");
  const [subMenu, setSubmenu] = useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleDropDownItems = (item) => {
    if (item.subs && subMenu) {
      setDropDownItem(item.name);
      setSubmenu(item.subs);
      setSelectedIndex(item.id);
    } else {
      setSubmenu([]);
    }
  };
  return (
    <div style={{ width: "100%" }}>
      <Toolbar onClick={() => setOpenDrawer(!openDrawer)}>
        <div className={!openDrawer && classes.flexCenter}>
          <img src={logo} alt="" className={classes.animatedItem} />
        </div>
        {openDrawer && (
          <div>
            <Typography variant="subtitle1">{constant.LOGO}</Typography>
          </div>
        )}
      </Toolbar>
      <Divider />
      {openDrawer ? (
        <List className={classes.list}>
          {constant.DRAWER_MENU_ITEMS.map((item) => {
            const { id, name, link, icon } = item;
            return (
              <div key={id} className={classes.listItem}>
                <ListItem
                  component={Link}
                  to={link}
                  button
                  key={item.id}
                  className={classes.item}
                  selected={selectedIndex === 0}
                  onClick={() => handleDropDownItems(item)}
                >
                  <img alt="" src={icon} style={{ marginLeft: "10px" }} />
                  <Typography variant="subtitle2">{name}</Typography>
                </ListItem>
                {subMenu &&
                  item.name === dropDownItem &&
                  subMenu.map((subItem) => (
                    <ListItem
                      key={subItem.id}
                      component={Link}
                      to={link}
                      button
                      selected={location.pathname === link}
                      className={classes.subItem}
                    >
                      <Typography variant="body2">{subItem.subname}</Typography>
                    </ListItem>
                  ))}
              </div>
            );
          })}
        </List>
      ) : (
        <List className={classes.list}>
          {constant.DRAWER_MENU_ITEMS.map((item) => {
            const { id, link, icon } = item;
            return (
              <div key={id} className={classes.listItem}>
                <ListItem
                  component={Link}
                  to={link}
                  button
                  key={item.id}
                  className={classes.flexCenter}
                >
                  <img alt="" src={icon} />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      )}
    </div>
  );
};

export default ClosedMenu;
