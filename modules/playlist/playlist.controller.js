const deleteUserFromAllCollections = require("../../utilities/DeleteFromAllCollection");
var PLAYLIST = require("./playlist.model");

exports.getPlaylistData = async function (req, res, next) {
  try {
    Data = await PLAYLIST.find({ tempId: req.tempId });
    res.status(201).json({
      status: "Success",
      message: "Playlist Data Get Successfully",
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
    let nonNumericFields = Object.keys(PLAYLIST.schema.paths).filter(
      (field) =>
        field !== "_id" && PLAYLIST.schema.paths[field].instance !== "Number"
    );

    let query = {
      tempId: req.tempId,
      $or: nonNumericFields.map((field) => ({
        [field]: { $regex: req.params.find, $options: "i" },
      })),
    };

    let Data = await PLAYLIST.find(query);

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
    let allData = await PLAYLIST.find({ tempId: req.tempId });
    if (allData.length >= 50) {
      await deleteUserFromAllCollections(req.tempId);
      return res.status(404).json({
        status: "You Rich Limit",
        message: "Your Data Was Delete.Now Create New Token",
      });
    }

    req.body.tempId = req.tempId;
    let Data = await PLAYLIST.create(req.body);
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
    let Data = await PLAYLIST.findByIdAndDelete(req.params.id);
    if (!Data) {
      throw new Error("Data Was Not Found");
    }
    res.status(201).json({
      status: "Success",
      message: "Playlist Data Delete SuccessFully",
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
    let Data = await PLAYLIST.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!Data) {
      throw new Error("Data Was Not Found");
    }
    res.status(201).json({
      status: "Success",
      message: "Playlist Data Update SuccessFully",
      data: Data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
