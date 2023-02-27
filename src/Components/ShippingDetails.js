import React from "react";
import { Shipped } from "./Shipped";
import { Delivered } from "./Delivered";
import { Delivering } from "./Delivering";

export const ShippingDetails = () => {
  return (
    <div className="shipping__details-container">
      <Delivered />
      <Delivering />
      <Shipped />
    </div>
  );
};
