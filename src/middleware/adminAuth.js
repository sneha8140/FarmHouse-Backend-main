const jwt = require("jsonwebtoken");
const adminModel = require("../model/adminModel");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const adminId = decodedToken?.id;

    const valid = await adminModel.findOne({ _id: adminId });
    if (!valid) {
      return res.status(401).json({
        message: "Invalid token.",
      });
    }

    return next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token.",
    });
  }
};
