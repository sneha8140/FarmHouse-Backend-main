const express = require("express");
const router = express.Router();
const {
  createFarm,
  getFarmList,
  updateFarm,
  deleteFarm,
} = require("../controller/farmController");
const adminAuth = require("../middleware/adminAuth");

router.post("/create", createFarm);
router.get("/get", getFarmList);
router.patch("/update/:farmId", adminAuth, updateFarm);
router.delete("/delete/:farmId", adminAuth, deleteFarm);

module.exports = router;
