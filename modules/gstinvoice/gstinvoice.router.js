var express = require('express');
var router = express.Router();
var tempIdController = require('../../utilities/tempid.controller')
var gstController = require('./gstinvoice.controller')


/* GST Invoice */

router.get('/',  tempIdController.secure, gstController.getGstInvoiceData);
router.get('/find/:find',  tempIdController.secure, gstController.getParticularData);
router.post('/create', tempIdController.secure,gstController.create);
router.delete('/delete/:id', gstController.delete);
router.put('/update/:id', gstController.update);

module.exports = router;