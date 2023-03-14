import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { auth, fs } from "../Config/Config";
import { ModalContext } from "./ModalContext";
import { useNavigate } from "react-router-dom";

import "remixicon/fonts/remixicon.css";

export const NavigationBar = (props) => {
  const [showIcon, setShowIcon] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [signedIn, isSignedin] = useState(false);
  const [User, setUser] = useState(null);

  const { toggleModalSignUp } = useContext(ModalContext);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        isSignedin(true);
        fs.collection("users")
          .doc(user.phoneNumber)
          .get()
          .then((snapshot) => {
            setUser(snapshot.data().Name);
          });
      } else {
        isSignedin(false);
      }
    });
  }, []);

  const showMenu = () => {
    setShowIcon(!showIcon);
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Succesfull");

        isSignedin(false);
      })
      .catch((error) => {
        isSignedin(true);
      });
  };

  const handleCartIconClick = () => {
    if (signedIn) {
      navigate("/cart");
    } else {
      toggleModalSignUp({ type: "Cart", prod_id: "" });
    }
  };

  return (
    <>
      <div className="navigationBar__header">
        <Link className="navigationBar__logo" to="/">
          <img src="https://imgur.com/AkgGUK4.jpg" alt="website-logo" />
        </Link>

        <ul className={`navigationBar__navbar ${isOpen ? "open" : ""}`}>
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/all-products">All Products</Link>
          </li>
          {signedIn ? (
            <>
              <li>
                <Link to="/my-orders">My Orders</Link>
              </li>
              <li>
                <div onClick={handleLogout}>Logout</div>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>

        <div className="navigationBar__main">
          {signedIn ? (
            <div className="navigationBar__user">{User}</div>
          ) : (
            <div
              onClick={() => toggleModalSignUp()}
              className="navigationBar__user"
            >
              Login
            </div>
          )}

          <div className="navlink" onClick={handleCartIconClick}>
            <i className="ri-shopping-cart-line cart-shopping"></i>
          </div>
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
