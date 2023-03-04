import { BsFillCheckCircleFill } from "react-icons/bs";

function firebaseUpdateFunction(product, cartRef, doc, popUp, type, navigate) {
  const currentQty = doc.data().qty;
  const newQty = currentQty + 1;
  const newPrice = newQty * parseInt(product.disc_price.replace(/,/g, ""), 10);
  cartRef
    .update({ qty: newQty, TotalProductPrice: newPrice })
    .then(() => {
      console.log("successfully updated cart");
      popUp({
        text: "Added to Cart",
        icon: <BsFillCheckCircleFill className="green-check" />,
      });
      if (type === "buy") {
        navigate("/cart");
      }
    })
    .catch((error) => {
      console.error("Error updating cart:", error);
    });
}

export default firebaseUpdateFunction;
