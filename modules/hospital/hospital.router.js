var express = require('express');
var router = express.Router();
var tempIdController = require('../../utilities/tempid.controller')
var hospitalController = require('../../modules/hospital/hospital.controller')


/* Hospital */

router.get('/',  tempIdController.secure, hospitalController.getHospitalData);
router.get('/find/:find',  tempIdController.secure, hospitalController.getParticularData);
router.post('/create', tempIdController.secure,hospitalController.create);
router.delete('/delete/:id', hospitalController.delete);
router.put('/update/:id', hospitalController.update);

module.exports = router;