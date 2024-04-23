var express = require('express');
var router = express.Router();
var paymentController = require('./payment.controller')
var tempIdController = require('../../utilities/tempid.controller')

/* Payment */
router.get('/', tempIdController.secure,paymentController.getpaymentData);
router.get('/find/:find', tempIdController.secure,paymentController.getParticularData);
router.post('/create', tempIdController.secure, paymentController.create);
router.delete('/delete/:id', paymentController.delete);
router.put('/update/:id', paymentController.update);

module.exports = router;

