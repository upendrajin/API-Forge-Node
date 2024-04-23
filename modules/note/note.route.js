var express = require('express');
var router = express.Router();
var noteController = require('./note.controller')
var tempIdController = require('../../utilities/tempid.controller')

/* Note */
router.get('/', tempIdController.secure,noteController.getNoteData);
router.get('/find/:find', tempIdController.secure,noteController.getParticularData);
router.post('/create', tempIdController.secure, noteController.create);
router.delete('/delete/:id', noteController.delete);
router.put('/update/:id', noteController.update);

module.exports = router;
