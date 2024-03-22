const jwt = require("jsonwebtoken");
const adminModel = require("../model/adminModel");

exports.adminLogin = async (req, res) => {
  try {
    const data = await adminModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!data) {
      return res.status(400).json({
        message: "Invalid email or password.",
      });
    }

    const token = jwt.sign({ id: data._id }, process.env.JWT_SECRET_KEY);

    return res.status(200).json({
      message: "Login successfully.",
      data: token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Interval server error.",
    });
  }
};
