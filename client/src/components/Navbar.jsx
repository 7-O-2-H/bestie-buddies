import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBone } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {

  const [expandNavbar, setExpandNavbar] = useState(false);
  //const navigate = useNavigate();
  //const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  // const handleLogout = () => {
  //   localStorage.removeItem("loggedin");
  //   localStorage.removeItem("user_id");
  //   navigate("/login");
  // };

  return (

    <div className="navbar" >
      <div className="bestie">
          <Link to='/' >
            bestie <FontAwesomeIcon icon={faBone}/>       
            BUDDY
          </Link>
        </div>
      <div className="toggleButton">
        {/* <button onClick={() => {
          setExpandNavbar((prev) => !prev);
        }}>
        
        </button> */}
      </div>
      <div className="links">
        <Link to="/about"> ABOUT </Link>
        {/* {isLoggedIn && (
      <Link to="/sampleprojects">Portfolio</Link>
    )} */}
      <Link to="/contact"> CONTACT </Link>
      {/* {isLoggedIn ? (
      <button onClick={handleLogout}>Logout</button> */}
    {/* ) : ( */}
      <>
        <Link to="/login"> LOGIN </Link>
        <Link to="/signup">SIGNUP</Link>
      </>
      </div>
    </div>
  );
};