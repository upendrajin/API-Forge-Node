var express = require('express');
var router = express.Router();
var tempIdController = require('../../utilities/tempid.controller')
var mobileController = require('../../modules/mobile/mobile.controller')


/* MOBILE */

router.get('/',  tempIdController.secure, mobileController.getMobileData);
router.get('/find/:find',  tempIdController.secure, mobileController.getParticularData);
router.post('/create', tempIdController.secure,mobileController.create);
router.delete('/delete/:id', mobileController.delete);
router.put('/update/:id', mobileController.update);

module.exports = router;