import React from "react";
import { Link } from "react-router-dom";

export const OrdersCard = ({ documents }) => {
  return (
    <div className="order__card_together">
      {documents.map((doc, index) => (
        <div className="order__card" key={index}>
          <div className="order__together">
            <div className="order__qty">
              <div>Number of Items</div>
              <div>{doc.CartQty}</div>
            </div>
            <div className={`order__status ${doc.status}`}>{doc.status}</div>
          </div>
          <div className="order__together">
            <div className="order__number">
              <div>Order Id</div>
              <div>{doc.order_id}</div>
            </div>
            <div className="order__amt">
              <div>Total Amount: </div>
              <div>₹{doc.CartPrice}</div>
            </div>
          </div>
          <div className="order__together">
            <div className="order__date">
              <div>Placed On</div>
              <div>{doc.orderDate}</div>
            </div>
            <div className="order__expected-date">
              <div>Expected Delivery Date</div>
              <div>{doc.dateDelivery}</div>
            </div>
          </div>
          <Link
            to={`/order-details/${doc.orderDetails}`}
            className="order__details__btn"
          >
            View Order Details
          </Link>
        </div>
      ))}
    </div>
  );
};
