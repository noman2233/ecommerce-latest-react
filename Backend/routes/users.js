const express = require("express");
const User = require("../models/user");
const router = express.Router();
const {
  verifyToken,
  verifyUser,
  isAdmin,
} = require("../verifyToken/verifyToken");

//update users

router.put("/updateusers/:id", isAdmin, async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400).json("Cannot find user");
  }
  const updatedusers = await User.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.status(200).json(updatedusers);
});

//delete users

router.delete("/deleteuser/:id", isAdmin, async (req, res) => {
  const deleteuser = await User.findByIdAndDelete(req.params.id);
  res.status(200).json(deleteuser);
});

//Get all users

router.get("/getallusers", async (req, res) => {
  const allusers = await User.find();
  res.status(200).json(allusers);
});

//Get one users

router.get("/getoneuser/:id", isAdmin, async (req, res) => {
  const oneuser = await User.findById(req.params.id);
  res.status(200).json(oneuser);
});

module.exports = router;
