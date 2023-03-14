import React, { createContext, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { auth, fs } from "../Config/Config";

export const ModalContext = createContext({
  logInModalIsOpen: false,
  signUpModalIsOpen: false,
  ratingModalIsOpen: false,
  isSmallScreen: false,
  toggleModalLogIn: () => {},
  toggleModalSignUp: () => {},
  toggleModalRating: () => {},
  user: null,
  totalProducts: 0,
  modalProps: null,
});

export const ModalProvider = ({ children }) => {
  const [logInModalIsOpen, setLogInModalIsOpen] = useState(false);
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);
  const [ratingModalIsOpen, setRatingModalIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [totalProducts, setTotalProducts] = useState(0);
  const [modalProps, setModalProps] = useState(null);

  const toggleModalLogIn = () => {
    setLogInModalIsOpen(!logInModalIsOpen);
  };

  const toggleModalSignUp = (props) => {
    setSignUpModalIsOpen(!signUpModalIsOpen);
    setModalProps(props);
  };

  const toggleModalRating = () => {
    setRatingModalIsOpen(!ratingModalIsOpen);
  };

  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart " + user.phoneNumber).onSnapshot((snapshot) => {
          const qty = snapshot.docs.length;
          setTotalProducts(qty);
        });
      }
      setUser(user);
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
        totalProducts,
        modalProps,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
