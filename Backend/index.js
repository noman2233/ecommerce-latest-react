const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const productRouter = require("./routes/products");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const stripeRouter = require("./routes/stripe");
const main = require("./db");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();
main();
const cors = require('cors')

 
app.use(cors())
// LOCALHOST
const hostname = "127.0.0.1";
const port = 80;

app.use(cookieParser(""));
app.use(express.json());

// API Routes
app.use("/api/auth", authRouter);
app.use("/api/user", usersRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/checkout", stripeRouter);

//SERVER
app.listen(port, hostname, () => {
  console.log(`App is running at http://${hostname}:${port}`);
});
