import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../../Context/ShopContext";

const Login = () => {
  const { login, setLogin } = useContext(ShopContext);
  return (
    <div className="nav-login-cart">
      {login && login.islogin === true ? (
        <p className="nav-login" onClick={() => setLogin(false)}>
          <Link style={{ textDecoration: "none" }} to="/login">
            Logout
          </Link>
        </p>
      ) : (
        <p className="nav-login">
          <Link style={{ textDecoration: "none" }} to="/login">
            Login
          </Link>
        </p>
      )}
    </div>
  );
};

export default Login;
