import React from "react";

export const SignUpDetails = (props) => {
  return (
    <div className="phone__number-container">
      <div className="phone__number-header">SignUp</div>
      <div className="phone__number-subheading">Create Your Account</div>

      <input
        class="phone__number-form_input"
        type="text"
        placeholder="First Name *"
        value={props.firstName}
        onChange={props.handleFirstNameChange}
      />
      <input
        class="phone__number-form_input"
        type="text"
        placeholder="Last Name *"
        value={props.lastName}
        onChange={props.handleLastNameChange}
      />
      <input
        class="phone__number-form_input form_mt-10"
        type="email"
        placeholder="Email ID *"
        value={props.email}
        onChange={props.handleEmailChange}
      ></input>

      {!props.isValidEmail && props.isButtonDisabled && (
        <div class="phone__number-form_error_message">
          Enter a valid Email Address
        </div>
      )}

      <div
        class={`phone__number-submit-button ${
          props.firstName && props.lastName && props.email && props.isValidEmail
            ? ""
            : "active"
        }`}
        onClick={props.onSubmit}
      >
        Submit
      </div>
    </div>
  );
};
