var express = require('express');
var router = express.Router();
var tempIdController = require('../../utilities/tempid.controller')
var mailIdController = require('./mailIdsaver.controller')

/* mailId */

router.get('/',  tempIdController.secure, mailIdController.getMailIdData);
router.get('/find/:find',  tempIdController.secure, mailIdController.getParticularData);
router.post('/create', tempIdController.secure,mailIdController.create);
router.delete('/delete/:id', mailIdController.delete);
router.put('/update/:id', mailIdController.update);

module.exports = router;