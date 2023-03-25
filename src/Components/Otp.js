import React from "react";

export const Otp = (props) => {
  return (
    <div className="phone__number-container">
      <div className="phone__number-header">Login or SignUp</div>
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

      {props.otpValid && (
        <div class="phone__number-form_error_message">Incorrect OTP</div>
      )}
      <span class="phone__number-form_message form_opacity">
        Didn't receive OTP?
      </span>
      <button class="phone__number-form-resend">Resend </button>
      <button
        class="phone__number-submit-button"
        onClick={props.VerifyOTP}
        disabled={props.OTP.length < 6}
      >
        Submit
      </button>
    </div>
  );
};
