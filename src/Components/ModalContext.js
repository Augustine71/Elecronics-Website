import React, { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const ModalContext = createContext({
  logInModalIsOpen: false,
  signUpModalIsOpen: false,
  ratingModalIsOpen: false,
  isSmallScreen: false,
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

  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <ModalContext.Provider
      value={{
        logInModalIsOpen,
        signUpModalIsOpen,
        ratingModalIsOpen,
        isSmallScreen,
        toggleModalLogIn,
        toggleModalSignUp,
        toggleModalRating,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
