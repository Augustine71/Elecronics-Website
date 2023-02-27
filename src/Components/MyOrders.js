import React from "react";
import { OrdersCard } from "./OrdersCard";
import { MyOrdersBanner } from "./MyOrdersBanner";

export const MyOrders = () => {
  return (
    <div className="myorders__container">
      <MyOrdersBanner />
      <OrdersCard />
    </div>
  );
};
