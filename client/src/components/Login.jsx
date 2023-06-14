import { useState } from "react";
import React from "react";
import "./styles/Login.css";

export default function Login() {

  return (
    <div className="login-page"> 
      <div className="leftie" >
        <h2>Bestie Buddy</h2>
        <p>Login to connect to Kathy</p>
      </div>
      
      <form method="post" className="login">
        <h1 className="form-title">Login</h1>
          <input type="email" className="login-field" placeholder="example@gmail.com"/>
          <input type="password" className="login-field" placeholder="Password"/>
          <button type="submit" className="login-button">LOGIN</button>  
        </form>
      
    </div>
  );

};