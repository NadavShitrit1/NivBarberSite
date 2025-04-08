import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import logo from "../assets/blackLogo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <img src={logo} alt="לוגו ניב" className="navbar-logo" />
        <h1 className="logo">✂️ ניב</h1>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? "bar rotate" : "bar"}></div>
          <div className={isOpen ? "bar fade" : "bar"}></div>
          <div className={isOpen ? "bar rotate-reverse" : "bar"}></div>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={toggleMenu}>דף הבית</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>אודות</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>שירותים</Link></li>
          <li><Link to="/courses" onClick={toggleMenu}>קורסים</Link></li>
          <li><Link to="/booking" onClick={toggleMenu}>קביעת תור</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>צור קשר</Link></li>
        </ul>
      </div>
    </nav>
  );
}
