const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    farmName: {
      type: String,
    },
    userName: {
      type: String,
    },
    mobileNo: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    rent: {
      type: Number,
    },
    checkInTime: {
      type: Date,
    },
    checkOutTime: {
      type: Date,
    },
    total: {
      type: Number,
    },
    paidAmt: {
      type: Number,
    },
    advanceAmt: {
      type: Number,
    },
    notes: {
      type: String,
    },
    isCancel: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);
const bookingModel = mongoose.model("booking", schema, "booking");
module.exports = bookingModel;
