var express = require("express");
var router = express.Router();
var tempIdController = require("../utilities/tempid.controller");

/* Temporary Id */
router.get("/", tempIdController.getData);
router.post("/create", tempIdController.create);

module.exports = router;
