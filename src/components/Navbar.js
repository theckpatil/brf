import React, { useState, useEffect } from 'react';

function Navbar() {
  // State to track if the navigation menu is open or closed
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle the navigation menu visibility
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    
  };

  // Close the navigation menu when a link is clicked
  const closeNavOnLinkClick = () => {
    setIsNavOpen(false);
  };

  // Close the navigation menu if clicked outside
  const handleOutsideClick = (event) => {
    const navLinks = document.querySelector(".nav-links");
    const navToggle = document.querySelector(".nav-toggle");

    if (
      navLinks && 
      navToggle &&
      !navLinks.contains(event.target) && 
      !navToggle.contains(event.target)
    ) {
      setIsNavOpen(false);
    }
  };

  // Set up and clean up the outside click event listener
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="assets/img/Logo/BRF-Logo-New-With-Bg.png" alt="BR Fashion" />
      </div>
      <div className={`nav-toggle ${isNavOpen ? "active" : ""}`}  onClick={toggleNav}>
        <span ></span>
        <span ></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
        <li><a href="" onClick={closeNavOnLinkClick}>Home</a></li>
        <li><a href="#about" onClick={closeNavOnLinkClick}>About</a></li>
        <li><a href="#capabilities" onClick={closeNavOnLinkClick}>Capabilities</a></li>
        <li><a href="#process" onClick={closeNavOnLinkClick}>Process</a></li>
        <li><a href="#contact" onClick={closeNavOnLinkClick}>Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
