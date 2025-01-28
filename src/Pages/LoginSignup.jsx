import React, { useContext, useRef } from "react";
import "./CSS/LoginSignup.css";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const { action, setAction } = useContext(ShopContext);
  const Navigate = useNavigate();
  const nameElement = useRef(null);
  const emailElement = useRef(null);
  const passwordElement = useRef(null);

  const HandleSubmit = () => {
    const name = nameElement.current?.value || "";
    const email = emailElement.current?.value || "";
    const password = passwordElement.current?.value || "";

    if (!email || !password || (action === "Signup" && !name)) {
      alert("Please fill out all required fields!");
      return;
    }

    const userData = { name, email, password, islogin: true };
    if (action === "Signup") {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser.email === email && storedUser.password === password) {
        console.log("Login successful!");
        Navigate("/");
        window.location.reload();
      } else {
        console.log("Invalid credentials.");
      }
    }

    if (nameElement.current) nameElement.current.value = "";
    if (emailElement.current) emailElement.current.value = "";
    if (passwordElement.current) passwordElement.current.value = "";
  };

  return (
    <div className="container">
      <div className="login">
        <h2 className="title">{action}</h2>
        {action === "Signup" && (
          <input
            ref={nameElement}
            className="input"
            placeholder="Name"
            type="text"
          />
        )}
        <input
          ref={emailElement}
          className="input"
          placeholder="Email address"
          type="email"
        />
        <input
          ref={passwordElement}
          className="input"
          placeholder="Password"
          type="password"
        />
        <button className="btn" onClick={HandleSubmit}>
          Continue
        </button>
        {action === "Login" ? (
          <p className="new-account">
            Don't have an account?{" "}
            <span className="link" onClick={() => setAction("Signup")}>
              Sign up here
            </span>
          </p>
        ) : (
          <p className="new-account">
            Already have an account?{" "}
            <span className="link" onClick={() => setAction("Login")}>
              Login here
            </span>
          </p>
        )}
        <div className="checkbox">
          <input className="check" type="checkbox" required />
          <p>
            By continuing, I agree to the{" "}
            <span className="link">Terms of Use</span> &{" "}
            <span className="link">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
