import React, { useState, useEffect } from "react";
import { OrderHistoryCard } from "./OrderHistoryCard";
import { ShippingDetails } from "./ShippingDetails";

import { fs, auth } from "../Config/Config";

export const OrderHistory = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        const docRef = fs
          .collection("Order " + user.phoneNumber)
          .doc(props.orderId);
        docRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              setData(doc.data());
            } else {
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      } else {
        console.log("User is not signed in!");
      }
    });
  }, [props.orderId]);

  return (
    <>
      <OrderHistoryCard data={data} />
      <ShippingDetails />
    </>
  );
};
