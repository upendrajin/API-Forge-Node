const nodemailer = require("nodemailer");
var TEMPID = require("../utilities/tempid.model");
var jwt = require("jsonwebtoken");
const deleteUserFromAllCollections = require("./DeleteFromAllCollection");

exports.secure = async function (req, res, next) {
  try {
    let token = req.headers.token;
    if (!token) {
      throw new Error("Please Send Token");
    }
    
    jwt.verify(token, "cdmi", async (error, decode) => {
      if (error) {
        if (error.name === "TokenExpiredError") {
          let decodeId = jwt.decode(token, "cdmi", { varify: false });

          await deleteUserFromAllCollections(decodeId.id);
          return res.status(404).json({
            status: "Token Was Expired",
            message: "Please Create New Token",
          });
        }
        return res.status(404).json({
          status: "Token Was Invalid",
          message: "Please Enter Right Token",
        });
      }

      req.tempId = decode.id;
      let checkId = await TEMPID.findOne({ tempId: decode.id });
      if (!checkId) {
        return res.status(404).json({
          status: "Token Was Expire",
          message: "Please Create New Token",
        });
      }
      next();
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.getData = async function (req, res, next) {
  try {
    Data = await TEMPID.find();
    res.status(201).json({
      status: "Success",
      message: "All Temporary Data",
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
    let uniqueId = new Date() + Math.round(Math.random() * 1e9);
    var token = jwt.sign({ id: uniqueId }, "cdmi", { expiresIn: 3600 * 48 });
    let Data = await TEMPID.create({ tempId: uniqueId, email: req.body.email });
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "apiforge.token@gmail.com",
        pass: "akbvnkexkcvrauze",
      },
    });
    let mailOptions = {
      from: "apiforge.token@gmail.com",
      to: req.body.email,
      subject: "Your Token Was Create Now You Can Use It For 2 Day's",
      html: `<h5 style="color:#002884;">Your Token Was Create</h5><p style="color:#1565c0;">${token}</p><h4 style="color:#002884">This token work for only Two Days after this create new token</h4>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log("Error occurred:", error);
      }
      console.log("Message sent successfully!");
      console.log("Message ID:", info.messageId);
    });
    res.status(201).json({
      status: "Success",
      message: "Temporary Id Create",
      data: Data,
      token,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
