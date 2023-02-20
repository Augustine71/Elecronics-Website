import React, { useState, useEffect, useContext } from "react";
import { ModalContext } from "./ModalContext";

export const LogInModal = () => {
  const { logInModalIsOpen, toggleModalLogIn, toggleModalSignUp } =
    useContext(ModalContext);

  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
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
    return errors;
  };

  const handleLoginChange = () => {
    toggleModalLogIn();
    toggleModalSignUp();
    console.log("Hello");
  };

  return (
    <div
      className="logIn__modal"
      style={{ display: logInModalIsOpen ? "block" : "none" }}
      onClick={toggleModalLogIn}
    >
      <div
        className="logIn__modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="logIn__modal-header">
          <div className="logIn__modal-header-title">Good to see you!</div>
          <div className="logIn__modal-header-subtitle">
            Let's continue the journey.
          </div>
        </div>
        <span className="logIn__close-button" onClick={toggleModalLogIn}>
          &times;
        </span>
        <div className="logIn__modal-body">
          <form onSubmit={handleSubmit}>
            <div className="logIn__form-group">
              <label htmlFor="logIn__email">Email</label>
              <input
                type="logIn__email"
                id="email"
                value={formValues.email}
                onChange={handleEmailChange}
                placeholder="Email"
                className="logIn__email"
              />
              {formErrors.email ? (
                <div className="logIn__error-message">{formErrors.email}</div>
              ) : (
                ""
              )}
            </div>
            <div class="logIn__form-group">
              <label htmlFor="logIn__password">Password</label>
              <input
                type="logIn__password"
                id="password"
                value={formValues.password}
                onChange={handlePasswordChange}
                placeholder="*******"
                className="logIn__password"
              />
              {formErrors.password ? (
                <div className="logIn__error-message">
                  {formErrors.password}
                </div>
              ) : (
                ""
              )}
            </div>
            <button type="submit" className="logIn__submit">
              Log In
            </button>
            <div className="logIn__new-account">
              <div>Don’t have an account?</div>
              <div className="logIn__signUp" onClick={handleLoginChange}>
                Sign Up
              </div>
            </div>
          </form>
          <a href="#" className="logIn__forgot-password">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};
