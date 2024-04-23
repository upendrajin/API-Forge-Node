const deleteUserFromAllCollections = require("../../utilities/DeleteFromAllCollection");
var HOTEL = require("../hotel/hotel.model");

exports.getHotelData = async function (req, res, next) {
  try {
    Data = await HOTEL.find({ tempId: req.tempId });
    res.status(201).json({
      status: "Success",
      message: "Hotel Data Get Successfully",
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
    let nonNumericFields = Object.keys(HOTEL.schema.paths).filter(
      (field) =>
        field !== "_id" && HOTEL.schema.paths[field].instance !== "Number"
    );

    let query = {
      tempId: req.tempId,
      $or: nonNumericFields.map((field) => ({
        [field]: { $regex: req.params.find, $options: "i" },
      })),
    };

    let Data = await HOTEL.find(query);

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
    let allData = await HOTEL.find({ tempId: req.tempId });
    if (allData.length >= 50) {
      await deleteUserFromAllCollections(req.tempId);
      return res.status(404).json({
        status: "You Rich Limit",
        message: "Your Data Was Delete.Now Create New Token",
      });
    }

    req.body.tempId = req.tempId;
    let Data = await HOTEL.create(req.body);
    res.status(201).json({
      status: "Success",
      message: "Hotel Data Create Successfully",
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
    let Data = await HOTEL.findByIdAndDelete(req.params.id);
    if (!Data) {
      throw new Error("Data Was Not Found");
    }
    res.status(201).json({
      status: "Success",
      message: "Hotel Data Delete SuccessFully",
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
    let Data = await HOTEL.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!Data) {
      throw new Error("Data Was Not Found");
    }
    res.status(201).json({
      status: "Success",
      message: "Hotel Data Update SuccessFully",
      data: Data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
