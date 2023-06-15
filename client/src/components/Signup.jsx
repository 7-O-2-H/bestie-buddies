import { useState } from "react";
import React from "react";
import "./styles/Signup.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function signup() {

  return (
    <div className="signup-page"> 
      <div className="leftie" >
        <h2>Bestie Buddy</h2>
        <p>Signup to connect to Kathy</p>
      </div>
      
      <form method="post" className="signup">
        <h1 className="form-title">Signup</h1>
          <input type="text" className="signup-field" placeholder="First Name"/>
          <input type="text" className="signup-field" placeholder="Last Name"/>
          <input type="email" className="signup-field" placeholder="example@gmail.com"/>
          <input type="password" className="signup-field" placeholder="Password"/>
          <input type="text" className="signup-field" placeholder="Verify Password"/>
          <button type="submit" className="signup-button">Signup</button>  
          <div className="signup-link">
            <Link to="/login">Click here to login</Link>
          </div>
        </form>
      
    </div>
  );

};