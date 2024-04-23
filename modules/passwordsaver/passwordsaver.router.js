var express = require('express');
var router = express.Router();
var tempIdController = require('../../utilities/tempid.controller')
var passwordSaverController = require('../../modules/passwordsaver/passwordsaver.controller')


/* PasswordSaver */

router.get('/', tempIdController.secure,passwordSaverController.getSaveData);
router.get('/find/:find', tempIdController.secure,passwordSaverController.getParticularData);
router.post('/create', tempIdController.secure,passwordSaverController.create);
router.delete('/delete/:id', passwordSaverController.delete);
router.put('/update/:id', passwordSaverController.update);

module.exports = router;