import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { ModalContext } from "./ModalContext";
import { useNavigate } from "react-router-dom";

import { fs } from "../Config/Config";

import { PdpDesktopFeatures } from "./PdpDesktopFeatures";
import firebaseFunction from "../Functions/firebaseFunction";
import firebaseUpdateFunction from "../Functions/firebaseUpdateFunction";

export const PdpDetails = (props) => {
  const { isSmallScreen, toggleModalSignUp, user } = useContext(ModalContext);
  const navigate = useNavigate();

  const addToCart = (product) => {
    if (user !== null) {
      // console.log(product);
      let type = "add";
      const cartRef = fs
        .collection("Cart " + user.phoneNumber)
        .doc(product.prod_id);
      cartRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Product already exists in cart:", doc.id);
            firebaseUpdateFunction(
              product,
              cartRef,
              doc,
              props.setOpenPopUp,
              type,
              navigate
            );
          } else {
            firebaseFunction(
              product,
              cartRef,
              props.setOpenPopUp,
              type,
              navigate
            );
          }
        })
        .catch((error) => {
          console.error("Error getting product from cart:", error);
        });
    } else {
      toggleModalSignUp({ type: "Add", prod_id: props.json.prod_id });
    }
  };

  const buyNow = (product) => {
    if (user !== null) {
      // console.log(product);
      let type = "buy";
      const cartRef = fs
        .collection("Cart " + user.phoneNumber)
        .doc(product.prod_id);
      cartRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Product already exists in cart:", doc.id);
            firebaseUpdateFunction(
              product,
              cartRef,
              doc,
              props.setOpenPopUp,
              type,
              navigate
            );
          } else {
            firebaseFunction(
              product,
              cartRef,
              props.setOpenPopUp,
              type,
              navigate
            );
          }
        })
        .catch((error) => {
          console.error("Error getting product from cart:", error);
        });
    } else {
      toggleModalSignUp({ type: "Buy", prod_id: props.json.prod_id });
    }
  };

  return (
    <div className="pdp__product-details-section">
      <div className="pdp__product-name">{props.json.name}</div>
      <div className="pdp__product-price-section">
        <span class="pdp__price-section__rupee">₹</span>
        <span class="pdp__price-section__discounted_price">
          {props.json.disc_price}
        </span>
        <span class="pdp__price-section__actual_price">
          ₹{props.json.actual_price}
        </span>
      </div>
      <div class="pdp__inclusive-of-taxes">MRP Inclusive of all Taxes</div>
      <div class="rating-section-pdp">
        <div class="rating-section__rating_container-pdp">
          <span class="rating-pdp">{props.json.rating}</span>
          <div className="rating-stars-pdp">
            <AiFillStar />
          </div>
        </div>
        <div class="rating-section__divider-pdp"></div>
        <span class="rating-section__review-pdp">
          {props.json.total_ratings} Reviewed
        </span>
      </div>
      <div className="pdp__details-partition-line"></div>
      {!isSmallScreen ? (
        <PdpDesktopFeatures features={props.json.features} />
      ) : (
        ""
      )}
      <div className="pdp__btns">
        <div className="pdp__add-to-cart" onClick={() => addToCart(props.json)}>
          Add to Cart
        </div>
        <div
          className={`pdp__buy-now ${props.prod_cat}`}
          onClick={() => buyNow(props.json)}
        >
          Buy Now
        </div>
      </div>
    </div>
  );
};
