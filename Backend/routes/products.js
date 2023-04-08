const express = require("express");
const Product = require("../models/product");
const router = express.Router();
const {
  verifyToken,
  verifyUser,
  isAdmin,
} = require("../verifyToken/verifyToken");
//Create Products

router.post("/createproducts", async (req, res) => {
  const newProducts = await Product.create(req.body);
  res.status(200).json(newProducts);
});

//update Products

router.put("/updateproducts/:id", verifyUser, async (req, res) => {
  const products = await Product.findById(req.params.id);
  if (!products) {
    res.status(400).json("Cannot find Products");
  }
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.status(200).json(updatedProduct);
});

//delete Products

router.delete("/deleteproduct/:id", verifyUser, async (req, res) => {
  const deleteProducts = await Product.findByIdAndDelete(req.params.id);
  res.status(200).json(deleteProducts);
});

// Random videos
router.get("/random", async (req, res) => {
  const deleteProducts = await Product.aggregate([{ $sample: { size: 4 } }]);
  res.status(200).json(deleteProducts);
});

//Get one Product

router.get("/getoneproduct/:id", async (req, res) => {
  const oneProduct = await Product.findById(req.params.id);
  res.status(200).json(oneProduct);
});

//Get all Products

router.get("/getallproducts", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(10);
    } else if (qCategory) {
      products = await Product.find({
        category: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
