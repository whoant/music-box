const express = require('express');

const route = express.Router();

const controller = require('../controllers/song.controller');

route.get('/', controller.getInfoSong);

module.exports = route;
