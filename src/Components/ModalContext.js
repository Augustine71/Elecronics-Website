import React, { createContext, useState } from "react";

export const ModalContext = createContext({
  logInModalIsOpen: false,
  signUpModalIsOpen: false,
  toggleModalLogIn: () => {},
  toggleModalSignUp: () => {},
});

export const ModalProvider = ({ children }) => {
  const [logInModalIsOpen, setLogInModalIsOpen] = useState(false);
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);

  const toggleModalLogIn = () => {
    setLogInModalIsOpen(!logInModalIsOpen);
  };

  const toggleModalSignUp = () => {
    setSignUpModalIsOpen(!signUpModalIsOpen);
  };

  return (
    <ModalContext.Provider
      value={{
        logInModalIsOpen,
        signUpModalIsOpen,
        toggleModalLogIn,
        toggleModalSignUp,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
