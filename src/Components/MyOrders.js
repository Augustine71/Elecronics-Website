import React from "react";
import { OrdersCard } from "./OrdersCard";
import { MyOrdersBanner } from "./MyOrdersBanner";
import { OrderHistory } from "./OrderHistory";

export const MyOrders = () => {
  return (
    <div className="myorders__container">
      <MyOrdersBanner />
      <OrderHistory />
    </div>
  );
};
