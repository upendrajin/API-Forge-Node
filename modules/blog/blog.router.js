var express = require('express');
var router = express.Router();
var tempIdController = require('../../utilities/tempid.controller')
var blogController = require('../../modules/blog/blog.controller')


/* Bolg */

router.get('/',  tempIdController.secure, blogController.getBlogData);
router.get('/find/:find',  tempIdController.secure, blogController.getParticularData);
router.post('/create', tempIdController.secure,blogController.create);
router.delete('/delete/:id', blogController.delete);
router.put('/update/:id', blogController.update);

module.exports = router;