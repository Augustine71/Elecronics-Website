import React, { createContext, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { auth } from "../Config/Config";

export const ModalContext = createContext({
  logInModalIsOpen: false,
  signUpModalIsOpen: false,
  ratingModalIsOpen: false,
  isSmallScreen: false,
  toggleModalLogIn: () => {},
  toggleModalSignUp: () => {},
  toggleModalRating: () => {},
  user: null,
});

export const ModalProvider = ({ children }) => {
  const [logInModalIsOpen, setLogInModalIsOpen] = useState(false);
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);
  const [ratingModalIsOpen, setRatingModalIsOpen] = useState(false);
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

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
        user,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
