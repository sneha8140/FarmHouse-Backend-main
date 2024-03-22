const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userId = decodedToken?.id;

    const valid = await userModel.findOne({ _id: userId });
    if (!valid) {
      return res.status(401).json({
        message: "Invalid token.",
      });
    }

    req.id = userId;
    return next();
  } catch (error) {
    return res.status(500).json({
      message: "Interval server error.",
    });
  }
};
