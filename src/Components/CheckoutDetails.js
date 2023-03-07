import React from "react";

export const CheckoutDetails = ({
  formValues,
  handleChange,
  handleSubmit,
  errors,
}) => {
  return (
    <div class="col-md-5 payment-second-col">
      <div class="saved-address-container open">
        <div class="address-inner-box prl20">
          <div class="heading remove-space pb10">Address</div>
          <form onSubmit={handleSubmit}>
            <div class="shipping-address-wrap">
              <div class="input-dropdown-inline">
                <div class="form-field  ">
                  <div class="inner-wrap desktop-checkout-namespace">
                    <input
                      type="text"
                      name="name"
                      class="input-element  "
                      id="name"
                      value={formValues.name}
                      onChange={handleChange}
                    />
                    <label for="name" class="floating-label">
                      Name<span class="asterisk"></span>
                    </label>
                    {errors.name && (
                      <div class="phone__number-form_error_message">
                        {errors.name}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div class="input-dropdown-inline">
                <div class="form-field  ">
                  <div class="inner-wrap">
                    <input
                      type="text"
                      name="phoneNumber"
                      class="input-element phone"
                      id="phone"
                      value={formValues.phoneNumber}
                      onChange={handleChange}
                    />
                    <label for="phone" class="floating-label">
                      Phone Number<span class="asterisk"></span>
                    </label>
                    {errors.phoneNumber && (
                      <div class="phone__number-form_error_message">
                        {errors.phoneNumber}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div class="input-dropdown-inline">
                <div class="form-field  ">
                  <div class="inner-wrap">
                    <input
                      type="text"
                      autocomplete="false"
                      name="pincode"
                      class="input-element  "
                      id="pincode"
                      value={formValues.pincode}
                      onChange={handleChange}
                    />
                    <label for="pin" class="floating-label">
                      Postal Code<span class="asterisk"></span>
                    </label>
                    {errors.pincode && (
                      <div class="phone__number-form_error_message">
                        {errors.pincode}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div class="input-row">
                <fieldset class="edit-address-fieldset ">
                  <legend class="title">Address</legend>
                  <textarea
                    id="address"
                    name="address"
                    class="textarea-control prl10"
                    rows="3"
                    value={formValues.address}
                    onChange={handleChange}
                  ></textarea>
                </fieldset>
                {errors.address && (
                  <div class="phone__number-form_error_message">
                    {errors.address}
                  </div>
                )}
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
  );
};
