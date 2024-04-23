const deleteUserFromAllCollections = require("../../utilities/DeleteFromAllCollection");
var HOSPITAL = require("../hospital/hospital.model");

exports.getHospitalData = async function (req, res, next) {
  try {
    Data = await HOSPITAL.find({ tempId: req.tempId });
    res.status(201).json({
      status: "Success",
      message: "Hospital Data Get Successfully",
      data: Data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.getParticularData = async function (req, res, next) {
  try {
    let nonNumericFields = Object.keys(HOSPITAL.schema.paths).filter(
      (field) =>
        field !== "_id" && HOSPITAL.schema.paths[field].instance !== "Number"
    );

    let query = {
      tempId: req.tempId,
      $or: nonNumericFields.map((field) => ({
        [field]: { $regex: req.params.find, $options: "i" },
      })),
    };

    let Data = await HOSPITAL.find(query);

    res.status(201).json({
      status: "Success",
      message: "Data Get Successfully",
      data: Data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.create = async function (req, res, next) {
  try {
    let allData = await HOSPITAL.find({ tempId: req.tempId });
    if (allData.length >= 50) {
      await deleteUserFromAllCollections(req.tempId);
      return res.status(404).json({
        status: "You Rich Limit",
        message: "Your Data Was Delete.Now Create New Token",
      });
    }

    req.body.tempId = req.tempId;
    let Data = await HOSPITAL.create(req.body);
    res.status(201).json({
      status: "Success",
      message: "Fild Data Create Successfully",
      data: Data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.delete = async function (req, res, next) {
  try {
    let Data = await HOSPITAL.findByIdAndDelete(req.params.id);
    if (!Data) {
      throw new Error("Data Was Not Found");
    }
    res.status(201).json({
      status: "Success",
      message: "Hospital Data Delete SuccessFully",
      data: Data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.update = async function (req, res, next) {
  try {
    let Data = await HOSPITAL.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!Data) {
      throw new Error("Data Was Not Found");
    }
    res.status(201).json({
      status: "Success",
      message: "Hospital Data Update SuccessFully",
      data: Data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
