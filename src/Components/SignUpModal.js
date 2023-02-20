import React, { useState, useEffect, useContext } from "react";
import { ModalContext } from "./ModalContext";

export const SignUpNModal = () => {
  const { signUpModalIsOpen, toggleModalSignUp, toggleModalLogIn } =
    useContext(ModalContext);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handleUsernameChange = (e) => {
    setFormValues({ ...formValues, username: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.username) {
      errors.username = "Username is required";
    }
    return errors;
  };

  const handleSignUpChange = () => {
    toggleModalSignUp();
    toggleModalLogIn();
    console.log("Hello");
  };

  return (
    <div
      className="signUp__modal"
      style={{ display: signUpModalIsOpen ? "block" : "none" }}
      onClick={toggleModalSignUp}
    >
      <div
        className="signUp__modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="signUp__modal-header">
          <div className="signUp__modal-header-title">Welcome!</div>
          <div className="signUp__modal-header-subtitle">
            Sign up to get started.
          </div>
        </div>
        <span className="signUp__close-button" onClick={toggleModalSignUp}>
          &times;
        </span>
        <div className="signUp__modal-body">
          <form onSubmit={handleSubmit}>
            <div className="signUp__form-group">
              <label htmlFor="signUp__username">Username</label>
              <input
                type="signUp__username"
                id="username"
                value={formValues.username}
                onChange={handleUsernameChange}
                placeholder="Username"
                className="signUp__username"
              />
              {formErrors.username ? (
                <div className="signUp__error-message">
                  {formErrors.username}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="signUp__form-group">
              <label htmlFor="signUp__email">Email</label>
              <input
                type="signUp__email"
                id="email"
                value={formValues.email}
                onChange={handleEmailChange}
                placeholder="Email"
                className="signUp__email"
              />
              {formErrors.email ? (
                <div className="signUp__error-message">{formErrors.email}</div>
              ) : (
                ""
              )}
            </div>
            <div class="signUp__form-group">
              <label htmlFor="signUp__password">Password</label>
              <input
                type="signUp__password"
                id="password"
                value={formValues.password}
                onChange={handlePasswordChange}
                placeholder="*******"
                className="signUp__password"
              />
              {formErrors.password ? (
                <div className="signUp__error-message">
                  {formErrors.password}
                </div>
              ) : (
                ""
              )}
            </div>
            <button type="submit" className="signUp__submit">
              Sign Up
            </button>
            <div className="signUp__new-account">
              <div>Already have an account?</div>
              <div className="signUp__logIn" onClick={handleSignUpChange}>
                Log In
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
