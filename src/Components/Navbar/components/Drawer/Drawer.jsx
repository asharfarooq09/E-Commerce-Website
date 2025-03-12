import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import "./Drawer.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../../Context/ShopContext";
import { useState } from "react";
import { useContext } from "react";
import { menuItem } from "../../Constant";

const TemporaryDrawer = () => {
  const [open, setOpen] = useState(false);
  const { login, setLogin } = useContext(ShopContext);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List className="list">
        {menuItem.map((item, index) => {
          return (
            <ListItem key={index} className="list-btn" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Link style={{ textDecoration: "none" }} to={item.route}>
                    {item.name}
                  </Link>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem className="list-btn" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {login && login.islogin === true ? (
                <p onClick={() => setLogin(false)}>
                  <Link style={{ textDecoration: "none" }} to="/login">
                    Logout
                  </Link>
                </p>
              ) : (
                <p>
                  <Link style={{ textDecoration: "none" }} to="/login">
                    Login
                  </Link>
                </p>
              )}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className="drawer">
      <MenuIcon className="menu" onClick={toggleDrawer(true)}></MenuIcon>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
