var express = require('express');
var router = express.Router();
var tempIdController = require('../../utilities/tempid.controller')
var contackbookController = require('../contackbook/contackbook.controller')

/* contackbook */

router.get('/',  tempIdController.secure, contackbookController.getContackbookData);
router.get('/find/:find',  tempIdController.secure, contackbookController.getParticularData);
router.post('/create', tempIdController.secure,contackbookController.create);
router.delete('/delete/:id', contackbookController.delete);
router.put('/update/:id', contackbookController.update);

module.exports = router;