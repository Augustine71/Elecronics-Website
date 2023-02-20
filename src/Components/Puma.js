import React from "react";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/feather/plus";
import { minus } from "react-icons-kit/feather/minus";

export const Puma = () => {
  return (
    <div class="checkout-container">
      <div class="col-md-3 pr5 pl0 checkout-box">
        <div class="payment-method-box sticky-contents">
          <nav class="dc-container-box">
            <ul class="payment-sidebar-nav">
              <li class="undefined active ">Checkout</li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="col-md-5 ipad-second-col">
        <div class="saved-address-container open">
          <div class="address-inner-box prl20">
            <div class="heading remove-space pb10">Address</div>
            <form>
              <div class="shipping-address-wrap">
                <div class="form-field  ">
                  <div class="inner-wrap desktop-checkout-namespace">
                    <input
                      type="text"
                      autocomplete="false"
                      name="name"
                      value=""
                      class="input-element  "
                      id="name"
                    />
                    <label for="name" class="floating-label">
                      Name<span class="asterisk"></span>
                    </label>
                  </div>
                </div>
                <div class="form-field  ">
                  <div class="inner-wrap">
                    <input
                      type="text"
                      autocomplete="off"
                      name="email"
                      value=""
                      class="input-element  "
                      id="email"
                    />
                    <label for="email" class="floating-label">
                      Email<span class="asterisk"></span>
                    </label>
                  </div>
                </div>
                <div class="input-dropdown-inline">
                  <div class="country-code-dropdown">+91</div>
                  <div class="form-field  ">
                    <div class="inner-wrap">
                      <input
                        type="tel"
                        autocomplete="false"
                        name="phoneNumber"
                        value=""
                        class="input-element  "
                        id="phone"
                      />
                      <label for="phone" class="floating-label">
                        Phone Number<span class="asterisk"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="form-field  ">
                  <div class="inner-wrap">
                    <input
                      type="tel"
                      autocomplete="false"
                      name="pinCode"
                      value=""
                      class="input-element  "
                      id="pin"
                    />
                    <label for="pin" class="floating-label">
                      Postal Code<span class="asterisk"></span>
                    </label>
                  </div>
                </div>
                <div class="input-row">
                  <fieldset class="edit-address-fieldset ">
                    <legend class="title">Address</legend>
                    <textarea
                      name=""
                      id=""
                      class="textarea-control prl10"
                      rows="3"
                    ></textarea>
                  </fieldset>
                </div>
                <div class="input-row clearfix">
                  <div class="row no-gutters mtb10"></div>
                </div>
              </div>
              <button type="submit" class="btn full fill no-radius proceed big">
                SHIP TO THIS ADDRESS
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-4  pr0 pl5 order-details-box">
        <div class="dc-container-box sticky-contents">
          <div class="shipping-items-details-section">
            <div>
              <div class="heading prl20 open">3 Items in your Bag</div>
              <div class="bag-details-box-container">
                <div class="bag-details-box">
                  <div class="media item">
                    <img
                      src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8904245712297_1.jpg"
                      class="image"
                      alt="product"
                    />
                    <div class="media-body details">
                      <div class="product-name">
                        <div class="product-name">
                          Nykaa Skin Secrets Exotic Indulgence Snail Sheet Mask
                          For Fi...
                        </div>
                      </div>
                      <div class="pb5">20ml</div>
                      <div class="product-qty-price">
                        <div class="product-quantity float-left">
                          <div className="action-btns minus">
                            <Icon icon={minus} size={12} />
                          </div>
                          Qty : &nbsp;<span>1</span>
                          <div className="action-btns plus">
                            <Icon icon={plus} size={12} />
                          </div>
                        </div>
                        <div class="product-price float-right">
                          <span class="selling-price"></span>
                          <span class="actual-price">₹100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="media item">
                    <img
                      src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/7/27f972a8904245704865_1.jpg"
                      class="image"
                      alt="product"
                    />
                    <div class="media-body details">
                      <div class="product-name">
                        <div class="product-name">
                          Nykaa Skin Secrets Active Solutions Pearl + Hyaluronic
                          Acid ...
                        </div>
                      </div>
                      <div class="pb5">20ml</div>
                      <div class="product-qty-price">
                        <div class="product-quantity float-left">
                          Qty : &nbsp;<span>1</span>
                        </div>
                        <div class="product-price float-right">
                          <span class="selling-price"></span>
                          <span class="actual-price">₹100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="media item">
                    <img
                      src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8904245712280_1.jpg"
                      class="image"
                      alt="product"
                    />
                    <div class="media-body details">
                      <div class="product-name">
                        <div class="product-name">
                          Nykaa Skin Secrets Exotic Indulgence Gold Sheet Mask
                          For Rev...
                        </div>
                      </div>
                      <div class="pb5">20ml</div>
                      <div class="product-qty-price">
                        <div class="product-quantity float-left">
                          Qty : &nbsp;<span>1</span>
                        </div>
                        <div class="product-price float-right">
                          <span class="selling-price"></span>
                          <span class="actual-price">₹100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="payment-details-container open">
              <div class="cart-payment-details mrl20">
                <div class="payment-details-tbl">
                  <div class="name">Sub Total</div>
                  <div class="value">
                    ₹<span>300</span>
                  </div>
                </div>
                <div class="payment-details-tbl">
                  <div class="name">Shipping Charge</div>
                  <div class="value light-green">
                    <span>₹70</span>
                  </div>
                </div>
                <div class="payment-details-tbl">
                  <div class="name light-green">Discount</div>
                  <div class="value light-green">
                    - ₹<span>0</span>
                  </div>
                </div>
              </div>
              <div class="payment-details-tbl grand-total-cell prl20">
                <div class="name">Grand Total</div>
                <div class="value">
                  ₹<span>370</span>
                  <i class="icon">
                    <svg
                      width="12"
                      height="7"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 1.0192L10.9775 0 6 4.9728 1.0112 0 0 1.008l5.4944 5.4768L6 7l.5056-.5152z"
                        fill="#FC2779"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                  </i>
                </div>
              </div>
              <div class="payment-details-tbl prl20 payment-reward-row"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
