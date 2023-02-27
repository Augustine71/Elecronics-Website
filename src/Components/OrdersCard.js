import React from "react";

export const OrdersCard = () => {
  return (
    <div className="order__card_together">
      <div className="order__card">
        <div className="order__together">
          <div className="order__qty">
            <div>Number of Items</div>
            <div>12</div>
          </div>
          <div className="order__status on-hold">ON-HOLD</div>
        </div>
        <div className="order__together">
          <div className="order__number">
            <div>Order Id</div>
            <div>102923sadddddddddddddd</div>
          </div>
          <div className="order__amt">
            <div>Total Amount: </div>
            <div>₹2134</div>
          </div>
        </div>
        <div className="order__together">
          <div className="order__date">
            <div>Placed On</div>
            <div>05-12-2013</div>
          </div>
          <div className="order__expected-date">
            <div>Expected Delivery Date</div>
            <div>05-12-2013</div>
          </div>
        </div>
        <div className="order__details__btn">View Order Details</div>
      </div>

      <div className="order__card">
        <div className="order__together">
          <div className="order__qty">
            <div>Number of Items</div>
            <div>12</div>
          </div>
          <div className="order__status shipped">SHIPPED</div>
        </div>
        <div className="order__together">
          <div className="order__number">
            <div>Order Id</div>
            <div>102923sadddddddddddddd</div>
          </div>
          <div className="order__amt">
            <div>Total Amount: </div>
            <div>₹2134</div>
          </div>
        </div>
        <div className="order__together">
          <div className="order__date">
            <div>Placed On</div>
            <div>05-12-2013</div>
          </div>
          <div className="order__expected-date">
            <div>Expected Delivery Date</div>
            <div>05-12-2013</div>
          </div>
        </div>
        <div className="order__details__btn">View Order Details</div>
      </div>

      <div className="order__card">
        <div className="order__together">
          <div className="order__qty">
            <div>Number of Items</div>
            <div>12</div>
          </div>
          <div className="order__status processing">PROCESSING</div>
        </div>
        <div className="order__together">
          <div className="order__number">
            <div>Order Id</div>
            <div>102923sadddddddddddddd</div>
          </div>
          <div className="order__amt">
            <div>Total Amount: </div>
            <div>₹2134</div>
          </div>
        </div>
        <div className="order__together">
          <div className="order__date">
            <div>Placed On</div>
            <div>05-12-2013</div>
          </div>
          <div className="order__expected-date">
            <div>Expected Delivery Date</div>
            <div>05-12-2013</div>
          </div>
        </div>
        <div className="order__details__btn">View Order Details</div>
      </div>
    </div>
  );
};
