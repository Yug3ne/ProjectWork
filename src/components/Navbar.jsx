import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'
import "./styles/Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <span className="brand-name">BookShelf</span>
        </Link>
        <div className={`menu ${isOpen ? "open" : ""}`}>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className="nav-links">
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li>
            <li><Link to='/contactUs'>Contact Us</Link></li>
            <li><Link to="/cart" className="fa fa-shopping-cart" style={{ "fontSize": "36px" }}></Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
