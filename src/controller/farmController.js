const farmModel = require("../model/farmModel");

exports.createFarm = async (req, res) => {
  try {
    const checkDuplication = await farmModel.findOne({ name: req.body.name });
    if (checkDuplication) {
      return res.status(400).json({
        message: "Farm already exist.",
      });
    }

    const data = await farmModel.create(req.body);
    return res.status(200).json({
      message: "Farm created successfully.",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Interval server error.",
      data: error,
    });
  }
};

exports.getFarmList = async (req, res) => {
  try {
    const data = await farmModel.find();
    return res.status(200).json({
      message: "Farm list get successfully.",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Interval server error.",
      data: error,
    });
  }
};

exports.updateFarm = async (req, res) => {
  try {
    await farmModel.updateOne({ _id: req.params.farmId }, req.body);
    return res.status(200).json({
      message: "Farm updated successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Interval server error.",
      data: error,
    });
  }
};

exports.deleteFarm = async (req, res) => {
  try {
    await farmModel.deleteOne({ _id: req.params.farmId });
    return res.status(200).json({
      message: "Farm deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Interval server error.",
      data: error,
    });
  }
};
