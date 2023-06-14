import { useState } from "react";
import React from "react";
import "./styles/Login.css";
import { validateUser } from "../helpers/usersHelpers";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {

    event.preventDefault();

    validateUser(email, password).then((data) => {
      console.log(data);
    })
    console.log(password, email);
  }

  return (
    <div className="login-page"> 
      <div className="leftie" >
        <h2>Bestie Buddy</h2>
        <p>Login to connect to Kathy</p>
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
          <button type="submit" className="login-button">LOGIN</button>  
        </form>
      
    </div>
  );

};