const adminModel = require("../model/adminModel");

exports.defaultCreateAdmin = async () => {
  try {
    const check = await adminModel.findOne({});
    if (check) return;

    await adminModel.create({
      name: "s",
      email: "s@gmail.com",
      password: "s@123",
    });
    return;
  } catch (error) {
    console.log("admin = ", error);
    return res.status(500).json({
      message: "Interval server  error",
    });
  }
};
