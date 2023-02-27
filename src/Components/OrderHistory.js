import React from "react";
import { OrderHistoryCard } from "./OrderHistoryCard";
import { ShippingDetails } from "./ShippingDetails";

export const OrderHistory = () => {
  return (
    <>
      <OrderHistoryCard />
      <ShippingDetails />
    </>
  );
};
