const bookingModel = require("../model/bookingModel");

exports.createBooking = async (req, res) => {
  try {
    const check = await bookingModel.findOne({
      farmName: req.body.farmName,
      $or: [
        {
          checkInTime: {
            $gt: ISODate(req.body.checkInTime),
          },

          checkOutTime: {
            $gt: ISODate(req.body.checkOutTime),
          },
        },
        {
          checkInTime: {
            $lt: ISODate(req.body.checkInTime),
          },

          checkOutTime: {
            $lt: ISODate(req.body.checkOutTime),
          },
        },
      ],
    });
    if (check) {
      return res.status(400).json({
        message: "Farm already booked. Please choose another one.",
      });
    }
    const data = await bookingModel.create(req.body);
    return res.status(200).json({
      message: "Booking successfully.",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Interval server error.",
      data: error,
    });
  }
};

exports.getBookingList = async (req, res) => {
  try {
    const data = await bookingModel
      .find({ farmName: req.params.farmName, isCancel: false })
      .sort({ createdAt: -1 })
      .limit(20);
    return res.status(200).json({
      message: "Booking data get successfully.",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Interval server error.",
      data: error,
    });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    await bookingModel.updateOne(
      { _id: req.params.bookingId },
      { isCancel: true }
    );

    return res.status(200).json({
      message: "Booking cancel successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Interval server error.",
      data: error,
    });
  }
};
