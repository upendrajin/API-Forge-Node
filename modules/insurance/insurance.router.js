var express = require('express');
var router = express.Router();
var tempIdController = require('../../utilities/tempid.controller')
var insuranceController = require('../insurance/insurance.controller')


/* INSURANCE */

router.get('/',  tempIdController.secure, insuranceController.getInsuranceData);
router.get('/find/:find',  tempIdController.secure, insuranceController.getParticularData);
router.post('/create', tempIdController.secure,insuranceController.create);
router.delete('/delete/:id', insuranceController.delete);
router.put('/update/:id', insuranceController.update);

module.exports = router;