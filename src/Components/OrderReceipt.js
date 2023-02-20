import React from 'react'

export const OrderReceipt = () => {
    const subTotalColor ={
        "color": "rgb(250, 104, 99)",
    };
    const discountColor ={
        "color":  "rgb(66, 182, 130)",
    };
    const shippingColor ={
        "color": "rgb(0, 0, 0)",
    };
    const totalColor ={
        "color": "rgb(0, 0, 0)",
         "font-weight": "800",
    };
    return (
        
              <div class="OrderReceiptContainer">
                <h3>Order Receipt</h3>
                <div class="order-receipt__list">
                        <div class="order-receipt__item"> 
                            <span class="order-receipt__item-key" style={subTotalColor}>Subtotal</span>
                            <span class="order-receipt__item-value" style={subTotalColor}>₹629.00</span>
                        </div>
                        <div class="order-receipt__item">
                            <span class="order-receipt__item-key" style={discountColor}>Discount</span>
                            <span class="order-receipt__item-value" style={discountColor}>-₹0.00</span>
                        </div>
                        <div class="order-receipt__item">
                            <span class="order-receipt__item-key" style={shippingColor}>Shipping</span>
                            <span class="order-receipt__item-value" style={shippingColor}>FREE</span>
                        </div>
                        <hr/>
                        <div class="order-receipt__item">
                            <span class="order-receipt__item-key" style={totalColor}>Total</span>
                            <span class="order-receipt__item-value" style={totalColor}>₹129.00</span>
                        </div>
                </div>
            </div>
       
    );
}