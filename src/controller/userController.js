const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  try {
    const checkDuplication = await userModel.findOne({ email: req.body.email });
    if (checkDuplication) {
      return res.status(400).json({
        message: "Email address already exist.",
      });
    }

    const data = await userModel.create(req.body);
    return res.status(200).json({
      message: "User created successfully.",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Interval server error.",
    });
  }
};

exports.userLogin = async (req, res) => {
  try {
    const data = await userModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!data) {
      return res.status(400).json({
        message: "Invalid email or password.",
      });
    }

    let token = jwt.sign({ id: data._id }, process.env.JWT_SECRET_KEY);

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

exports.getUserProfile = async (req, res) => {
  try {
    const data = await userModel.findOne({ _id: req.id });
    return res.status(200).json({
      message: "Get profile successfully.",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Interval server error.",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    await userModel.updateOne({ _id: req.params.id }, req.body);
    return res.status(200).json({
      message: "User updated successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Interval server error.",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await userModel.deleteOne({ _id: req.params.id });
    return res.status(200).json({
      message: "User deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Interval server error.",
    });
  }
};
