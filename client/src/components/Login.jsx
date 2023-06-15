import { useState } from "react";
import React from "react";
import "./styles/Login.css";
import { validateUser } from "../helpers/usersHelpers";
import Signup from "./Signup";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validUser, setValidUser] = useState(true);

  const handleLogin = (event) => {

    event.preventDefault();

    validateUser(email, password).then((data) => {
      if(!(data['data'][0])) {
        setValidUser(data['data'][0]);
      }
      else {
        localStorage.setItem("user_id", data['data'][1][0].id);
        localStorage.setItem("loggedIn", (true));
        navigate("/about");
      }
    });
  };

  return (
    <div className="login-page"> 
      <div className="leftie" >
        <h2>Bestie Buddy</h2>
        <p>Login or signup to connect to Kathy</p>
      </div>
      
      <form onSubmit={handleLogin} className="login">
        <h1 className="form-title">Login</h1>
          <input 
            type="email" 
            className="login-field" 
            placeholder="example@gmail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input 
            type="password" 
            className="login-field" 
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="login-alert">
            {!validUser && (
              <div>Your email or password is incorrect!</div>
            )}
          </div>
          <button type="submit" className="login-button">LOGIN</button>
          <div className="signup-link">
            <Link to="/signup">Click here to register</Link>
          </div>
        </form>
    </div>
  );

};