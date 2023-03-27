import React from "react";
import { useParams } from "react-router-dom";

import { MyOrdersBanner } from "./MyOrdersBanner";
import { OrderHistory } from "./OrderHistory";

export const OrderDetails = () => {
  const { orderId } = useParams();

  return (
    <div className="myorders__container">
      <MyOrdersBanner />
      <OrderHistory orderId={orderId} />
    </div>
  );
};
