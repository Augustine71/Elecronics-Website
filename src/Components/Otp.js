import React from "react";

export const Otp = (props) => {
  return (
    <div className="phone__number-container">
      <div className="phone__number-header">Login Or SignUp</div>
      <div className="phone__number-subheading">
        Enter your phone number to verify yourself
      </div>
      <input
        class="phone__number-form_input form_otp"
        type="text"
        placeholder="000000"
        maxLength="6"
        value={props.OTP}
        onChange={props.handleOtp}
      ></input>

      {!props.otpValid && props.isOtpTouched && (
        <div class="phone__number-form_error_message">Incorrect OTP</div>
      )}
      <span class="phone__number-form_message form_opacity">
        Didn't receive OTP?
      </span>
      <button class="phone__number-form-resend">Resend </button>
      <div
        class={`phone__number-submit-button ${
          !props.otpValid === true ? "active" : ""
        }`}
        onClick={props.VerifyOTP}
      >
        Submit
      </div>
    </div>
  );
};
