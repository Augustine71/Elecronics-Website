import React from "react";

export const PhoneNumber = (props) => {
  return (
    <div className="phone__number-container">
      <div className="phone__number-header">Login or SignUp</div>
      <div className="phone__number-subheading">
        Enter your phone number to verify yourself
      </div>
      <input
        class={`phone__number-form_input ${
          !props.isPhoneNumberValid && props.isInputTouched ? "active" : ""
        }`}
        type="tel"
        placeholder="Enter Phone Number *"
        onChange={props.handlePhoneNumberChange}
      />
      {!props.isPhoneNumberValid && props.isInputTouched && (
        <div class="phone__number-form_error_message">
          Enter a valid Phone Number
        </div>
      )}
      <div class="phone__number-form_message">
        A verification OTP will be sent to this number
      </div>
      <div
        class={`phone__number-submit-button ${
          !props.isPhoneNumberValid === true ? "active" : ""
        }`}
        onClick={props.requestOtp}
      >
        Submit
      </div>
    </div>
  );
};
