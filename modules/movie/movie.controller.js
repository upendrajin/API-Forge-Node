var MOVIE = require("./movie.model");
const deleteUserFromAllCollections = require("../../utilities/DeleteFromAllCollection");

exports.getmovieData = async function (req, res, next) {
  try {
    Data = await MOVIE.find({ tempId: req.tempId });
    res.status(201).json({
      status: "Success",
      message: "Movie Data Get Successfully",
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
    let nonNumericFields = Object.keys(MOVIE.schema.paths).filter(
      (field) =>
        field !== "_id" && MOVIE.schema.paths[field].instance !== "Number"
    );

    let query = {
      tempId: req.tempId,
      $or: nonNumericFields.map((field) => ({
        [field]: { $regex: req.params.find, $options: "i" },
      })),
    };

    let Data = await MOVIE.find(query);

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
    let allData = await MOVIE.find({ tempId: req.tempId });
    if (allData.length >= 50) {
      await deleteUserFromAllCollections(req.tempId);
      return res.status(404).json({
        status: "You Rich Data Limit",
        message: "Your Data Was Delete",
      });
    }

    req.body.tempId = req.tempId;
    let Data = await MOVIE.create(req.body);

    res.status(201).json({
      status: "Success",
      message: "Movie Data Create Successfully",
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
    let Data = await MOVIE.findByIdAndDelete(req.params.id);
    if (!Data) {
      throw new Error("Data Was Not Found");
    }
    res.status(201).json({
      status: "Success",
      message: "Movie Data Delete SuccessFully",
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
    let Data = await MOVIE.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!Data) {
      throw new Error("Data Was Not Found");
    }
    res.status(201).json({
      status: "Success",
      message: "Movie Data Update SuccessFully",
      data: Data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
