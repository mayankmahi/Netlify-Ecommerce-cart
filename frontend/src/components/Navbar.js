import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({click}) => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <h1>Netlify Shopping Cart</h1>
      </div>
      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className='cart__link'>
            {/* Icon */}
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartLogo__badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      {/* hamburger menu */}
      <div className="hamburger__menu" onClick={click} >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
