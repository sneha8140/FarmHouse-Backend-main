const express = require("express");
const router = express.Router();
const userRouter = require("./user.routes");
const adminRouter = require("./admin.routes");
const farmRouter = require("./farm.routes");
const bookingRouter = require("./booking.routes");

router.use("/user", userRouter);
router.use("/admin", adminRouter);
router.use("/farm", farmRouter);
router.use("/booking", bookingRouter);

module.exports = router;
