import { useEffect, useState } from "react";
import { OrdersCard } from "./OrdersCard";
import { MyOrdersBanner } from "./MyOrdersBanner";
import { fs, auth } from "../Config/Config";

import { Link } from "react-router-dom";

import { NavigationBar } from "./NavigationBar";

export const MyOrders = () => {
  const [documents, setDocuments] = useState([]);

  function getStatus(date) {
    const orderDate = new Date(date);
    const currentDate = new Date();

    const diffInDays = Math.ceil(
      (currentDate - orderDate) / (1000 * 60 * 60 * 24)
    );

    switch (true) {
      case diffInDays < 6:
        return "processing";
      case diffInDays < 11:
        return "shipped";
      default:
        return "delivered";
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const phoneNumber = user.phoneNumber;
        const collectionName = `Order ${phoneNumber}`;
        fs.collection(collectionName)
          .get()
          .then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => {
              const date = new Date(doc.data().orderDate);

              const deliveryDate = date.setDate(date.getDate() + 10);
              const formattedDate = new Date(
                doc.data().orderDate
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });
              const formattedDeliveryDate = new Date(
                deliveryDate
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });
              return {
                ...doc.data(),
                orderDate: formattedDate,
                dateDelivery: formattedDeliveryDate,
                orderDetails: doc.id,
                status: getStatus(doc.data().orderDate),
              };
            });
            setDocuments(data);
          });
      }
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <NavigationBar />
      {documents.length === 0 ? (
        <div className="no-poducts-main">
          <div className="no-products">
            No orders yet. Please make some orders.
          </div>
          <Link to="/" className="cart-continue-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="myorders__container">
          <MyOrdersBanner />
          <OrdersCard documents={documents} />
        </div>
      )}
    </>
  );
};
