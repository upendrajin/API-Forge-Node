var express = require('express');
var router = express.Router();
var tempIdController = require('../../utilities/tempid.controller')
var sportsController = require('../sports/sports.controller')

/* Sports */

router.get('/',  tempIdController.secure, sportsController.getSportsData);
router.get('/find/:find',  tempIdController.secure, sportsController.getParticularData);
router.post('/create', tempIdController.secure,sportsController.create);
router.delete('/delete/:id', sportsController.delete);
router.put('/update/:id', sportsController.update);

module.exports = router;