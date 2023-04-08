const express = require("express");
const Cart = require("../models/cart");
const router = express.Router();
const {
  verifyToken,
  verifyUser,
  isAdmin,
} = require("../verifyToken/verifyToken");
//Create Orders

router.post("/createcart", async (req, res) => {
  const newCart= await Cart.create(req.body);
  res
    .status(200)
    .json( newCart );
});

//update Orders

router.put("/updatecart/:id",verifyUser, async (req, res) => {
  const cart = await Cart.findById(req.params.id);
  if (!cart) {
    res.status(400).json("Cannot find Orders");
  }
  const updatedCart = await Cart.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res
    .status(200)
    .json(updatedCart );
});

//delete Orders

router.delete("/deletecart/:id",verifyUser, async (req, res) => {
  const deleteCart = await Cart.findByIdAndDelete(req.params.id);
  res
    .status(200)
    .json( deleteCart );
});

//Get user Order

router.get("/getonecart/:userId",verifyUser, async (req, res) => {
  const oneCart = await Cart.findOne({userId:req.params.id});
  res.status(200).json( oneCart );
});

//Get all Orders

router.get("/getallcart",isAdmin, async (req, res) => {
    const carts = await Cart.find();
    res.status(200).json( carts);
  
});

module.exports = router;
