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

  const [dropdowns, setDropdowns] = useState({
    dropdown1: { isOpen: window.innerWidth <= 768 ? true : false },
    dropdown2: { isOpen: window.innerWidth <= 768 ? true : false },
  });

  const handleDropdownClick = (name) => {
    setDropdowns((prevState) => {
      return {
        ...prevState,
        [name]: { isOpen: !prevState[name].isOpen },
      };
    });
  };

  const handleDropdownMouseEnter = (name) => {
    if (window.innerWidth >= 768) {
      setDropdowns((prevState) => {
        return {
          ...prevState,
          [name]: { isOpen: true },
        };
      });
    }
  };

  const handleDropdownMouseLeave = (name) => {
    if (window.innerWidth >= 768) {
      setDropdowns((prevState) => {
        return {
          ...prevState,
          [name]: { isOpen: false },
        };
      });
    }
  };

  const { toggleModalSignUp, totalProducts } = useContext(ModalContext);
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

        <div className={`navigationBar__navbar ${isOpen ? "open" : ""}`}>
          <div className="nav__item">
            <Link className="active" to="/">
              Home
            </Link>
          </div>
          <div
            class="navbar__dropdown"
            onClick={() => handleDropdownClick("dropdown1")}
            onMouseEnter={() => handleDropdownMouseEnter("dropdown1")}
            onMouseLeave={() => handleDropdownMouseLeave("dropdown1")}
          >
            <div class="navbar__label-container navv__item">
              <div
                class={`navbar__dropdown-arrow-two ${
                  dropdowns.dropdown1.isOpen ? "show" : ""
                }`}
              ></div>
              <div class="navbar__dropdown-title">All Products</div>
            </div>
            {dropdowns.dropdown1.isOpen && (
              <div className="navbar__dropdown-linksWrapper">
                <Link class="navbar__dropdown-linkItem" to="/all-products">
                  <div class="dropdown-link">
                    <div class="dropdown-description">
                      <div class="dropdown-label-tag">
                        <div class="dropdown-label">Tablets</div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link class="navbar__dropdown-linkItem" to="/all-products">
                  <div class="dropdown-link">
                    <div class="dropdown-description">
                      <div class="dropdown-label-tag">
                        <div class="dropdown-label">Mobile</div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link class="navbar__dropdown-linkItem" to="/all-products">
                  <div class="dropdown-link">
                    <div class="dropdown-description">
                      <div class="dropdown-label-tag">
                        <div class="dropdown-label">Laptops</div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link class="navbar__dropdown-linkItem" to="/all-products">
                  <div class="dropdown-link">
                    <div class="dropdown-description">
                      <div class="dropdown-label-tag">
                        <div class="dropdown-label">Acne Control</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
          {signedIn ? (
            <div
              class="navbar__dropdown"
              onClick={() => handleDropdownClick("dropdown2")}
              onMouseEnter={() => handleDropdownMouseEnter("dropdown2")}
              onMouseLeave={() => handleDropdownMouseLeave("dropdown2")}
            >
              <div class="navbar__label-container navv__item">
                <div
                  class={`navbar__dropdown-arrow ${
                    dropdowns.dropdown2.isOpen ? "show" : ""
                  }`}
                ></div>
                <div class="navbar__dropdown-title">Hi, {User}</div>
              </div>
              {dropdowns.dropdown2.isOpen && (
                <div className="navbar__dropdown-linksWrapper">
                  <Link class="navbar__dropdown-linkItem" to="/my-orders">
                    <div class="dropdown-link">
                      <div class="dropdown-description">
                        <div class="dropdown-label-tag">
                          <div class="dropdown-label">My Orders</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div
                    className="navbar__dropdown-linkItem"
                    onClick={handleLogout}
                  >
                    <div class="dropdown-link">
                      <div class="dropdown-description">
                        <div class="dropdown-label-tag">
                          <div class="dropdown-label">Logout</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>

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
            <span className="cart-indicator">{totalProducts}</span>
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
        <div
          className={`navigationBar__overlay ${isOpen ? "open" : ""}`}
          onClick={showMenu}
        ></div>
      </div>
      <div className="navigationBar__partition"></div>
    </>
  );
};
