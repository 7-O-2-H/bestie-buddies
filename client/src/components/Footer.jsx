import React from "react";
import { useState } from "react";
import './styles/footer.css';

export default function Footer() {

  return (
    <div>
      <div className="breaker"></div>
      <div className="footer">
        <h3>Additional Information</h3>
        <p className="profur">Insured through PROfur</p>
      </div>
    </div>
  )
};