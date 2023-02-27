import React from "react";

export const OrderHistoryCard = () => {
  return (
    <div className="order__history-container">
      <div className="order__history-together">
        <div className="order__history-number">
          <div>Order Id</div>
          <div>#6062840</div>
        </div>
        <div className="order__status on-hold">ON-HOLD</div>
      </div>
      <div className="order__history-items">
        <div className="order__history-item">
          <img
            src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664421780/Croma%20Assets/Computers%20Peripherals/Laptop/Images/259160_0_lufigp.png/mxw_600,s_jp2,s_videoimg,ns_atwebp,f_auto"
            className="order__history-item-img"
          />
          <div className="order__history-item-details">
            <div className="order__history-item-name">
              ASUS ROG Flow X13 AMD Ryzen 7
            </div>
            <div className="order__history-item-price">₹649.00</div>
          </div>
        </div>
      </div>
      <div className="order__history-details">
        <div className="order__history-header">Order Details</div>
        <div className="order__history-payment">
          <div className="order__history-category">
            <div className="order__history-subtotal">Subtotal</div>
            <div className="order__history-subtotal-amt">₹699.00</div>
          </div>
          <div className="order__history-category">
            <div className="order__history-discount">Discount</div>
            <div className="order__history-subtotal-disamt">- ₹50.00</div>
          </div>
          <div className="order__history-category">
            <div className="order__history-shipping">Shipping</div>
            <div className="order__history-subtotal-free">Free!</div>
          </div>
        </div>
        <div className="order__history-total-payment">
          <div className="order__history-total">Total</div>
          <div className="order__history-total-amt">₹1.00</div>
        </div>
      </div>
      <div className="order__history-continue-btn">Continue Shopping</div>
    </div>
  );
};
