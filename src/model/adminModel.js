const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    mobileNo: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);
const adminModel = mongoose.model("admin", schema, "admin");
module.exports = adminModel;
