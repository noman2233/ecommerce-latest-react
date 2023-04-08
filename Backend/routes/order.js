const express = require("express");
const Order = require("../models/order");
const router = express.Router();
const {
  verifyToken,
  verifyUser,
  isAdmin,
} = require("../verifyToken/verifyToken");

//Create Order

router.post("/createorder",verifyToken, async (req, res) => {
  const newOrder = await Order.create(req.body);
  res
    .status(200)
    .json( newOrder);
});

//update Order

router.put("/updateorder/:id",isAdmin, async (req, res) => {
  const Order = await Order.findById(req.params.id);
  if (!Order) {
    res.status(400).json("Cannot find Order");
  }
  const updatedOrder = await Order.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res
    .status(200)
    .json( updatedOrder);
});

//delete Order

router.delete("/deleteorder/:id",isAdmin, async (req, res) => {
  const deleteOrder = await Order.findByIdAndDelete(req.params.id);
  res
    .status(200)
    .json( deleteOrder );
});

//Get user Order

router.get("/getoneorder/:userId",verifyUser, async (req, res) => {
  const oneOrder = await Order.findById(req.params.id);
  res.status(200).json(oneOrder );
});

//Get all Order

router.get("/getallorders",isAdmin, async (req, res) => {
  const allOrders = await Order.find();
  res.status(200).json(allOrders);
});


module.exports = router;
