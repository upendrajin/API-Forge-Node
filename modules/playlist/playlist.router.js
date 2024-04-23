var express = require('express');
var router = express.Router();
var tempIdController = require('../../utilities/tempid.controller')
var playlistController = require('./playlist.controller')


/* Playlist */

router.get('/',  tempIdController.secure, playlistController.getPlaylistData);
router.get('/find/:find',  tempIdController.secure, playlistController.getParticularData);
router.post('/create', tempIdController.secure,playlistController.create);
router.delete('/delete/:id', playlistController.delete);
router.put('/update/:id', playlistController.update);

module.exports = router;