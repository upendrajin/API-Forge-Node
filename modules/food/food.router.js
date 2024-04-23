var express = require('express');
var router = express.Router();
var tempIdController = require('../../utilities/tempid.controller')
var foodController = require('./food.controller')

/* Food */

router.get('/',  tempIdController.secure, foodController.getFoodData);
router.get('/find/:find',  tempIdController.secure, foodController.getParticularData);
router.post('/create', tempIdController.secure,foodController.create);
router.delete('/delete/:id', foodController.delete);
router.put('/update/:id', foodController.update);

module.exports = router;