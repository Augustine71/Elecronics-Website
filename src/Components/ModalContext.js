import React, { createContext, useState } from "react";

export const ModalContext = createContext({
  logInModalIsOpen: false,
  signUpModalIsOpen: false,
  ratingModalIsOpen: false,
  toggleModalLogIn: () => {},
  toggleModalSignUp: () => {},
  toggleModalRating: () => {},
});

export const ModalProvider = ({ children }) => {
  const [logInModalIsOpen, setLogInModalIsOpen] = useState(false);
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);
  const [ratingModalIsOpen, setRatingModalIsOpen] = useState(false);

  const toggleModalLogIn = () => {
    setLogInModalIsOpen(!logInModalIsOpen);
  };

  const toggleModalSignUp = () => {
    setSignUpModalIsOpen(!signUpModalIsOpen);
  };

  const toggleModalRating = () => {
    setRatingModalIsOpen(!ratingModalIsOpen);
  };

  return (
    <ModalContext.Provider
      value={{
        logInModalIsOpen,
        signUpModalIsOpen,
        ratingModalIsOpen,
        toggleModalLogIn,
        toggleModalSignUp,
        toggleModalRating,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
