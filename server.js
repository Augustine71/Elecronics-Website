const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const shortid = require("shortid");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_VxZfUQSS6HarLs",
  key_secret: "vTQVypYd7a7hLLTM6VuJZJNt",
});

app.get("/", (req, res) => {
  res.send("Welcome to our Ecommerce Store");
});

app.post("/razorpay", async (req, res) => {
  console.log(req.body);
  console.log(req.body.amount);
  const payment_capture = 1;
  const amount = req.body.amount;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
      success: "success",
    });
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`your app is running on port no ${port}`);
});
