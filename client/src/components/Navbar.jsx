import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBone } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {

  const [expandNavbar, setExpandNavbar] = useState(false);
  const navigate = useNavigate();
  const loggedIn = (localStorage.getItem("loggedIn"));

  console.log(loggedIn);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user_id");
    navigate("/login");
  };

  return (

    <div className="navbar" >
      <div className="bestie">
          <Link to='/' >
            bestie <FontAwesomeIcon icon={faBone}/>       
            BUDDY
          </Link>
      </div>
      <div className="links">
        <div>
          <Link to="/about">ABOUT</Link>
        </div>
        {loggedIn ? (
          <div>
            <Link to="/contact"> CONTACT </Link>  
            <Link to="/login" onClick={handleLogout}>LOGOUT</Link>  
          </div>
            ) : ( 
          <div>
            <Link to="/login">LOGIN</Link>
            <Link to="/signup">SIGNUP</Link>
          </div>
        )}
      </div>
    </div>
  );
};