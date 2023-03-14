import { BsFillCheckCircleFill } from "react-icons/bs";

function firebaseFunction(product, cartRef, popUp, type, navigate) {
  let Product;
  Product = product;
  Product["qty"] = 1;
  Product["TotalProductPrice"] =
    Product.qty * parseInt(Product.disc_price.replace(/,/g, ""), 10);
  Product["SuTotal"] =
    Product.qty * parseInt(Product.actual_price.replace(/,/g, ""), 10);
  Product["Discount"] =
    Product.qty * parseInt(Product.actual_price.replace(/,/g, ""), 10) -
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
        setTimeout(() => {
          navigate(`/cart`);
        }, 1000);
      }
    })
    .catch((error) => {
      console.error("Error adding product to cart:", error);
    });
}

export default firebaseFunction;
