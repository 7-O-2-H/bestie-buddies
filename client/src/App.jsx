import axios from 'axios';
axios.defaults.baseURL = `http://localhost:8080/api`;
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import './App.css';
import ReviewList from "./components/ReviewList";
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

export default function App() {

  return (
  
    <div className='App'>
      <Router>

        <Navbar />
        <i className="fa-regular fa-dog-leashed"></i>
        <Routes>
          <Route path='/' element = {<HomePage/>} />
          <Route path='/about' element = {<ReviewList/>} />
          <Route path='/contact' element = {<Contact/>} />
          <Route path='/login' element = {<Login/>} />
          <Route path='/signup' element = {<Signup/>} />
        </Routes>
      </Router>
        
    </div>
  )
};
