import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fs } from "../Config/Config";
import { ModalContext } from "./ModalContext";
import { useNavigate } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import firebaseFunction from "../Functions/firebaseFunction";
import firebaseUpdateFunction from "../Functions/firebaseUpdateFunction";
import { PdpPopUp } from "./PdpPopUp";

export const AddToCart = () => {
  const { user } = useContext(ModalContext);
  const { productId } = useParams();
  const navigate = useNavigate();
  const [openPopUp, setOpenPopUp] = useState({
    text: "",
    icon: null,
  });

  useEffect(() => {
    const hash = window.location.hash.substring(1);

    const jsonFile = require(`../Json/${productId}.json`);
    const jsonData = jsonFile;
    console.log(jsonData.name);

    if (user) {
      if (hash === "buy" && user) {
        let type = "buy";
        const cartRef = fs
          .collection("Cart " + user.phoneNumber)
          .doc(productId);
        cartRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              console.log("Product already exists in cart:", doc.id);
              firebaseUpdateFunction(
                jsonData,
                cartRef,
                doc,
                setOpenPopUp,
                type,
                navigate
              );
            } else {
              firebaseFunction(jsonData, cartRef, setOpenPopUp, type, navigate);
            }
          })
          .catch((error) => {
            console.error("Error getting product from cart:", error);
          });
      } else {
        let type = "add";
        const cartRef = fs
          .collection("Cart " + user.phoneNumber)
          .doc(productId);
        cartRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              console.log("Product already exists in cart:", doc.id);
              firebaseUpdateFunction(
                jsonData,
                cartRef,
                doc,
                setOpenPopUp,
                type,
                navigate
              );
              setTimeout(() => {
                navigate(`/dp/${productId}`);
              }, 1500);
            } else {
              firebaseFunction(jsonData, cartRef, setOpenPopUp, type, navigate);
              setTimeout(() => {
                navigate(`/dp/${productId}`);
              }, 1500);
            }
          })
          .catch((error) => {
            console.error("Error getting product from cart:", error);
          });
      }
    }
  }, []);

  return (
    <>
      <div>
        <div>Adding {productId} to cart</div>
      </div>
      <PdpPopUp setOpenPopUp={setOpenPopUp} openPopUp={openPopUp} />
    </>
  );
};
