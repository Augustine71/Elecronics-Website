import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { fs, auth } from "../Config/Config";

export const OrdersCard = () => {
  const [documents, setDocuments] = useState([]);

  function getStatus(date) {
    const orderDate = new Date(date);
    const currentDate = new Date();

    const diffInDays = Math.ceil(
      (currentDate - orderDate) / (1000 * 60 * 60 * 24)
    );

    switch (true) {
      case diffInDays < 10:
        return "processing";
      case diffInDays < 15:
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

              const deliveryDate = date.setDate(date.getDate() + 15);
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
    <div className="order__card_together">
      {documents.map((doc, index) => (
        <div className="order__card" key={index}>
          <div className="order__together">
            <div className="order__qty">
              <div>Number of Items</div>
              <div>{doc.CartQty}</div>
            </div>
            <div className={`order__status ${doc.status}`}>{doc.status}</div>
          </div>
          <div className="order__together">
            <div className="order__number">
              <div>Order Id</div>
              <div>{doc.order_id}</div>
            </div>
            <div className="order__amt">
              <div>Total Amount: </div>
              <div>₹{doc.CartPrice}</div>
            </div>
          </div>
          <div className="order__together">
            <div className="order__date">
              <div>Placed On</div>
              <div>{doc.orderDate}</div>
            </div>
            <div className="order__expected-date">
              <div>Expected Delivery Date</div>
              <div>{doc.dateDelivery}</div>
            </div>
          </div>
          <Link
            to={`/order-details/${doc.orderDetails}`}
            className="order__details__btn"
          >
            View Order Details
          </Link>
        </div>
      ))}
    </div>
  );
};
