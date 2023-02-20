import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { Link } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "boxicons";

export const NavigationBar = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setShowIcon(!showIcon);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navigationBar__header">
        <div className="navigationBar__logo">
          <img src="https://imgur.com/AkgGUK4.jpg" />
        </div>

        <ul className={`navigationBar__navbar ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="navigationBar__main">
          <a href="#" className="navigationBar__user">
            Sign In
          </a>
          <a href="#">Register</a>
          <Link className="navlink" to="/cart">
            <i className="ri-shopping-cart-line cart-shopping"></i>
          </Link>
          <div className="navigationBar__menu-icon" onClick={showMenu}>
            {!showIcon && (
              <i
                className="ri-menu-line"
                onClick={() => setShowIcon(!showIcon)}
              ></i>
            )}
            {showIcon && (
              <i
                className="ri-close-fill"
                onClick={() => setShowIcon(!showIcon)}
              ></i>
            )}
          </div>
        </div>
      </div>
      <div className="navigationBar__partition"></div>
    </>
  );
};
