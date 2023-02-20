import React, { useState } from 'react'
// import { OrderReceipt } from './OrderReceipt';
// import { Details } from './Details';
export const OrderDetails = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className='orderdetails__container'>
           <div className="shipping__accordion">
                <div className="shipping__accordion-item">
                    <div className="shipping__accordion-title"  onClick={() => setIsActive(!isActive)}>
                        <div>Shipping Details</div>
                        <div>{isActive ? '-' : '+'}</div>
                    </div>
                    <div className= {`shipping__accordion-content ${isActive ? "open" : ""}`}>
                        <h5 class="shipping-details__title">Deliver to</h5>
                        <div>
                             <p class="shipping-details__items">Augustine Menezes</p>
                             <p class="shipping-details__items">2-337 kinnikambla house and post Mangalore, Mangalore, Karnataka, IN. 574151</p>
                             <p class="shipping-details__items">9743904207</p>
                             <p class="shipping-details__items">amenezes927@gmail.com</p>
                        </div>
                        <hr class="shipping-details__hr"/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

<div class="accordion__body">
   
    </div>