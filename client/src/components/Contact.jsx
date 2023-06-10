import { useState } from "react";
import React from "react";
import "./styles/Contact.css";

export default function Contact() {

  return (
    <div className="contact-page"> 
      
      
      <form method="post" className="contact">
        <h1 className="form-title">Contact</h1>
          <input type="text" className="field" placeholder="Enter Name"/>
          <input type="email" className="field" placeholder="example@gmail.com"/>
          <input type="phone" className="field" placeholder="+1"/>
          <textarea name="message" className="message" cols="30" rows="10" placeholder="message" />
          <button type="submit">send</button>  
        </form>
      
    </div>
  );

};