var express = require('express');
var router = express.Router();
var movieController = require('./movie.controller')
var tempIdController = require('../../utilities/tempid.controller')

/* Movie */
router.get('/', tempIdController.secure, movieController.getmovieData);
router.get('/find/:find', tempIdController.secure, movieController.getParticularData);
router.post('/create', tempIdController.secure, movieController.create);
router.delete('/delete/:id', movieController.delete);
router.put('/update/:id', movieController.update);

module.exports = router;

