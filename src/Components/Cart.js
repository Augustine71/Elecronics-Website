import React, { useContext, useState, useEffect } from "react";
import { ModalContext } from "./ModalContext";

import { fs, auth } from "../Config/Config";

import { CheckoutHeader } from "./CheckoutHeader";
import { CheckoutDetails } from "./CheckoutDetails";
import { CheckoutItems } from "./CheckoutItems";
import { useNavigate } from "react-router-dom";
import shortid from "shortid";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Cart = () => {
  const navigate = useNavigate();

  const { totalProducts, user } = useContext(ModalContext);

  // state of cart products
  const [cartProducts, setCartProducts] = useState([]);

  // getting cart products from firestore collection and updating the state
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart " + user.phoneNumber).onSnapshot((snapshot) => {
          const newCartProduct = snapshot.docs.map((doc) => ({
            ID: doc.product_id,
            ...doc.data(),
          }));
          setCartProducts(newCartProduct);
        });
      } else {
        console.log("user is not signed in to retrieve cart");
      }
    });
  }, []);

  console.log(cartProducts);

  // cart product increase function
  const cartProductIncrease = (cartProduct) => {
    // console.log(cartProduct);
    const newQty = cartProduct.qty + 1;
    const newPrice =
      newQty * parseInt(cartProduct.disc_price.replace(/,/g, ""), 10);
    const subTotal =
      newQty * parseInt(cartProduct.actual_price.replace(/,/g, ""), 10);
    const newDiscount =
      newQty * parseInt(cartProduct.actual_price.replace(/,/g, ""), 10) -
      newQty * parseInt(cartProduct.disc_price.replace(/,/g, ""), 10);
    // updating in database
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart " + user.phoneNumber)
          .doc(cartProduct.prod_id)
          .update({
            qty: newQty,
            TotalProductPrice: newPrice,
            SuTotal: subTotal,
            Discount: newDiscount,
          })
          .then(() => {
            console.log("increment added");
          });
      } else {
        console.log("user is not logged in to increment");
      }
    });
  };

  // cart product decrease functionality
  const cartProductDecrease = (cartProduct) => {
    if (cartProduct.qty === 1) {
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("Cart " + user.phoneNumber)
            .doc(cartProduct.prod_id)
            .delete()
            .then(() => {
              console.log("successfully deleted");
            });
        }
      });
    } else {
      const newQty = cartProduct.qty - 1;
      const newPrice =
        newQty * parseInt(cartProduct.disc_price.replace(/,/g, ""), 10);
      const subTotal =
        newQty * parseInt(cartProduct.actual_price.replace(/,/g, ""), 10);
      const newDiscount =
        newQty * parseInt(cartProduct.actual_price.replace(/,/g, ""), 10) -
        newQty * parseInt(cartProduct.disc_price.replace(/,/g, ""), 10);
      // updating in database
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("Cart " + user.phoneNumber)
            .doc(cartProduct.prod_id)
            .update({
              qty: newQty,
              TotalProductPrice: newPrice,
              SuTotal: subTotal,
              Discount: newDiscount,
            })
            .then(() => {
              console.log("decrement added");
            });
        } else {
          console.log("user is not logged in to increment");
        }
      });
    }
  };

  const [discount, setDiscount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const collectionRef = fs.collection("Cart +919743904207");

  collectionRef.get().then((querySnapshot) => {
    let Discount = 0;
    let SubTotal = 0;
    let TotalPrice = 0;

    querySnapshot.forEach((doc) => {
      Discount += doc.data().Discount;
      SubTotal += doc.data().SuTotal;
      TotalPrice += doc.data().TotalProductPrice;
    });
    setDiscount(Discount);
    setSubTotal(SubTotal);
    setTotalPrice(TotalPrice);
  });

  //CheckOutDetails
  const initialFormValues = {
    name: "",
    phoneNumber: "",
    pincode: "",
    address: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formValues.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formValues.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formValues.phoneNumber)) {
      errors.phoneNumber = "Phone number should be 10 digits";
      isValid = false;
    }

    if (!formValues.pincode) {
      errors.pincode = "Pincode is required";
      isValid = false;
    } else if (!/^[0-9]{6}$/.test(formValues.pincode)) {
      errors.pincode = "Pincode should be 6 digits";
      isValid = false;
    }

    if (!formValues.address) {
      errors.address = "Address is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Submit form
      console.log("Form is valid");
      const amount = totalPrice > 500000 ? 500000 : totalPrice;
      const data = await fetch("http://localhost:3001/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          amount,
        }),
      }).then((t) => t.json());

      console.log(data);

      const options = {
        key: "rzp_test_Ba6En9M6HuVKxc",
        currency: "INR",
        amount: data.amount,
        name: "E-Commerce",
        description: "Wallet Transaction",
        order_id: data.id,
        handler: async function (response) {
          console.log(response);
          const userRef = user.phoneNumber;
          const orderId = shortid.generate();
          console.log(orderId);
          const cartData = await fs.collection("Cart " + userRef).get();
          const cartItems = [];
          cartData.forEach((doc) => {
            const data = doc.data();
            cartItems.push(data);
            doc.ref
              .delete()
              .then(() => {
                console.log("Document successfully deleted!");
              })
              .catch((error) => {
                console.error("Error removing document: ", error);
              });
          });

          await fs
            .collection("Order " + userRef)
            .doc(response.razorpay_order_id)
            .set({
              paymentId: response.razorpay_payment_id,
              order_id: orderId,
              name: formValues.name,
              phoneNumber: formValues.phoneNumber,
              pincode: formValues.pincode,
              address: formValues.address,
              CartPrice: totalPrice,
              CartDiscount: discount,
              CartSubTotal: subTotal,
              CartQty: totalProducts,
              orderDate: new Date().toISOString().slice(0, 10),
              cartValues: cartItems,
            });
          navigate("/");
          toast.success("Your order has been placed successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          });
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      console.log(paymentObject);
    } else {
      console.log("Form is invalid");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div class="checkout-container">
      <CheckoutHeader />
      <CheckoutDetails
        formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
      <CheckoutItems
        cartProducts={cartProducts}
        cartProductIncrease={cartProductIncrease}
        cartProductDecrease={cartProductDecrease}
        Discount={discount}
        SubTotal={subTotal}
        TotalPrice={totalPrice}
        totalItems={totalProducts}
      />
    </div>
  );
};
