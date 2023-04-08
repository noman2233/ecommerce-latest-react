const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(403).json("You are not autorized");
  }
  try {
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err)
        return res.json({ status: "Invalid Token", message: err.message });

      req.user = user;
      next();
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "internal server error", message: error.message });
  }
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      res
        .status(400)
        .json("You are logged in user.You can delete anything you want");
      next();
    } else {
      return res.status(403).json({
        status: "You are not autherized.So you cannot perform this function",
      });
    }
  });
};

const isAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      res.status(403).json("You are admin of this website");
      next();
    } else {
      return res.status(403).json({ status: "You are not autherized" });
    }
  });
};

module.exports = { verifyToken, verifyUser, isAdmin };
