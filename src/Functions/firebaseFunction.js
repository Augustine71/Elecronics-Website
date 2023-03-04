import { BsFillCheckCircleFill } from "react-icons/bs";

function firebaseFunction(product, cartRef, popUp, type, navigate) {
  let Product;
  Product = product;
  Product["qty"] = 1;
  Product["TotalProductPrice"] =
    Product.qty * parseInt(Product.disc_price.replace(/,/g, ""), 10);
  cartRef
    .set(Product)
    .then(() => {
      console.log("successfully added to cart");
      popUp({
        text: "Added to Cart",
        icon: <BsFillCheckCircleFill className="green-check" />,
      });
      if (type === "buy") {
        navigate("/cart");
      }
    })
    .catch((error) => {
      console.error("Error adding product to cart:", error);
    });
}

export default firebaseFunction;
