import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav id="desktop-nav">
        <NavLink to='/' className="logo">
          Nunua <div> <img src="logo.png" alt="Cart" className=" logo_icon" /></div>
        </NavLink>
        <div>
          <ul className="nav-links">
            
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#search">
                <img src="search.png" alt="Cart" className="icon" />
              </a>
            </li>
            <li>
              <a href="/cart">
                <img src="cart.png" alt="Cart" className="icon" />
              </a>
            </li>
            <li>
              <a href="/login">
                <img src="login.png" alt="Login" className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Nunua <div> <img src="logo.png" alt="Cart" className=" logo_icon" /></div></div>
        <div className="hamburger-menu">
          <div className="cart-links">
          <li>
              <a href="#search">
                <img src="search.png" alt="Cart" className="icon" />
              </a>
            </li>
            <li>
              <a href="#cart">
                <img src="cart.png" alt="Cart" className="icon" />
              </a>
            </li></div>
            <div
            className={`hamburger-icon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#shop" onClick={toggleMenu}>
                Shop
              </a>
            </li>
            <li>
              <a href="/products" onClick={toggleMenu}>
                Products
              </a>
            </li>
            <li>
              <a href="/blog" onClick={toggleMenu}>
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact Us
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
