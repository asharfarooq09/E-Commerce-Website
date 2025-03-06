import React from "react";
import { Link } from "react-router-dom";
import { menuItem } from "../../Constant";

const Menu = () => {
  return (
    <ul className="nav-items">
      {menuItem.map((item, index) => {
        return (
          <li key={index}>
            <Link style={{ textDecoration: "none" }} to={item.route}>
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
