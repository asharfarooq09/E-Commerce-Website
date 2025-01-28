import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import "./Drawer.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const { login, setLogin } = React.useContext(ShopContext);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List className="list">
        <ListItem className="list-btn" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Link style={{ textDecoration: "none" }} to="/">
                Shop
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className="list-btn">
          <ListItemButton>
            <ListItemIcon>
              <Link style={{ textDecoration: "none" }} to="/mens">
                Men
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className="list-btn">
          <ListItemButton>
            <ListItemIcon>
              <Link style={{ textDecoration: "none" }} to="/womens">
                Women
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className="list-btn">
          <ListItemButton>
            <ListItemIcon>
              <Link style={{ textDecoration: "none" }} to="/kids">
                Kids
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
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
      <Button className="btn" onClick={toggleDrawer(true)}>
        <MenuIcon className="menu"></MenuIcon>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
