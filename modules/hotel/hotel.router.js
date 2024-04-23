var express = require('express');
var router = express.Router();
var tempIdController = require('../../utilities/tempid.controller')
var hotelController = require('./hotel.controller')

/* Hotel */

router.get('/',  tempIdController.secure, hotelController.getHotelData);
router.get('/find/:find',  tempIdController.secure, hotelController.getParticularData);
router.post('/create', tempIdController.secure,hotelController.create);
router.delete('/delete/:id', hotelController.delete);
router.put('/update/:id', hotelController.update);

module.exports = router;