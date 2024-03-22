const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    rent: {
      type: Number,
    },
    description: {
      type: String,
    },
    images: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    mobileNo: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);
const farmModel = mongoose.model("farm", schema, "farm");
module.exports = farmModel;
