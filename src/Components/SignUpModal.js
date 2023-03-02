import React, { useState, useContext } from "react";
import { ModalContext } from "./ModalContext";
import { auth, fs } from "../Config/Config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import { PhoneNumber } from "./PhoneNumber";
import { SignUpDetails } from "./SignUpDetails";
import { Otp } from "./Otp";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";

export const SignUpNModal = () => {
  const [phoneDetails, setPhoneDetails] = useState(true);
  const [showOtp, setShowOtp] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [OTP, setOTP] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [otpValid, setOtpValid] = useState(false);
  const [isOtpTouched, setIsOtpTouched] = useState(false);
  const [isInputTouched, setIsInputTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [firstTimeUser, setFirstImeUser] = useState(false);

  const { signUpModalIsOpen, toggleModalSignUp, toggleModalLogIn } =
    useContext(ModalContext);

  const generateReCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log(response);
        },
      },
      auth
    );
  };

  const requestOtp = (e) => {
    e.preventDefault();
    generateReCaptcha();
    let appVerifier = window.recaptchaVerifier;
    const formattedNum = "+91" + phoneNumber;
    const docRef = fs.collection("users").doc(formattedNum);
    docRef.get().then((doc) => {
      if (doc.exists) {
        console.log("User exists in Firestore collection!");
        setPhoneDetails(false);
        setShowOtp(true);
      } else {
        console.log("User does not exist in Firestore collection.");
        setPhoneDetails(false);
        setShowDetails(true);
        setFirstImeUser(true);
      }
    });
    signInWithPhoneNumber(auth, formattedNum, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
      });
  };

  const navigate = useNavigate();

  const VerifyOTP = (e) => {
    let confirmationResult = window.confirmationResult;
    console.log(email);
    confirmationResult
      .confirm(OTP)
      .then((result) => {
        // User signed in successfully.
        if (firstTimeUser) {
          fs.collection("users")
            .doc("+91" + phoneNumber)
            .set({
              phoneNumber: phoneNumber,
              Name: firstName,
              last: lastName,
              email: email,
            })
            .then(() => {
              console.log("success");
            })
            .catch((error) => console.log(error.message));
        }
        setPhoneDetails(true);
        setShowOtp(false);
        setShowDetails(false);
        setOTP("");
        setPhoneNumber("");
        setIsPhoneNumberValid(false);
        setOtpValid(false);
        setIsOtpTouched(false);
        setIsInputTouched(false);
        setEmail("");
        setFirstName("");
        setLastName("");
        setIsValidEmail(true);
        setIsButtonDisabled(false);
        setFirstImeUser(false);
        toggleModalSignUp();
        navigate("/");
        toast.success("You have been logged in successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });

        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        setOtpValid(true);
        console.log("Phone Number failure");
      });
  };

  const isValidIndianPhoneNumber = (phoneNumber) => {
    const regex = /^[6-9]\d{9}$/; // matches a 10-digit Indian phone number starting with 6, 7, 8, or 9
    return regex.test(phoneNumber);
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;

    setPhoneNumber(value);
    setIsPhoneNumberValid(isValidIndianPhoneNumber(value));
    setIsInputTouched(true);
  };

  const handleOtp = (e) => {
    let otp = e.target.value;
    setOTP(otp);
  };

  const validateEmail = (email) => {
    // regex to match email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(validateEmail(email));
    setIsButtonDisabled(true);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit the form if email is valid

    setShowDetails(false);
    setShowOtp(true);
  };

  return (
    <div
      className="signUp__modal"
      style={{ display: signUpModalIsOpen ? "block" : "none" }}
      onClick={toggleModalSignUp}
    >
      <div id="recaptcha-container"></div>
      <div
        className="signUp__modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="signUp__close-button" onClick={toggleModalSignUp}>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IiNFODY2NjkiLz4KPHBhdGggZD0iTTMyLjUgMTcuNUwxNy40OTk5IDMyLjUwMDEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNC41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTMyLjUgMzIuNUwxNy40OTk5IDE3LjQ5OTkiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNC41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg=="
            alt="close-btn"
            lazy
          />
        </span>
        <div className="signUp__modal-body">
          {phoneDetails && (
            <PhoneNumber
              handlePhoneNumberChange={handlePhoneNumberChange}
              isPhoneNumberValid={isPhoneNumberValid}
              isInputTouched={isInputTouched}
              requestOtp={requestOtp}
            />
          )}
          {showDetails && (
            <SignUpDetails
              isValidEmail={isValidEmail}
              handleEmailChange={handleEmailChange}
              email={email}
              onSubmit={handleSubmit}
              firstName={firstName}
              lastName={lastName}
              handleFirstNameChange={handleFirstNameChange}
              handleLastNameChange={handleLastNameChange}
              isButtonDisabled={isButtonDisabled}
            />
          )}
          {showOtp && (
            <Otp
              VerifyOTP={VerifyOTP}
              OTP={OTP}
              isOtpTouched={isOtpTouched}
              otpValid={otpValid}
              handleOtp={handleOtp}
            />
          )}
        </div>
      </div>
    </div>
  );
};
