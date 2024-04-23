var express = require('express');
var router = express.Router();

/* Temporary Id */
router.get('/', (req, res, next) => {
    res.send("API running successful")
});


module.exports = router;
