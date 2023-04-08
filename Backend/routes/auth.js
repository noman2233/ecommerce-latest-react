const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");

// REGISTRATION  Route

router.post(
  "/register",
  [
    body("username", "Name must contain at least 5 characters").isLength({
      min: 5,
    }),
    body("email", "Email must be a valid email").isEmail(),
    body("password", "Password must contain at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = User;
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        return res.status(403).json("Email already registered");
      }

      const salt = bcryptjs.genSaltSync(10);
      const hashedPassword = bcryptjs.hashSync(req.body.password, salt);

      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        // password:req.body.password
        password: hashedPassword,
      });

      res.status(200).json( newUser);
    } catch (error) {
      res.status(500).json({ status: "server error", message: error.message });
    }
  }
);

// Login Route

router.post(
  "/login",
  [
    body("email", "Email must be a valid email").isEmail(),
    body("password", "Password must contain at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json("User with this email does not exists");
      }

      const bcryptPassword = await bcryptjs.compare(password, user.password);
      if (!bcryptPassword) {
        return res.status(400).json("Please login with correct credentials");
      }

      const data = {
        id: user.id,
      };

      const token = jwt.sign({ password, data }, process.env.SECRET_KEY);

      res.cookie("access_token", token, {
        httpOnly: true,
      });

      res.status(200).json({ user, token });
    } catch (error) {
      res.status(500).json({ status: "server error", message: error.message });
    }
  }
);

module.exports = router;
