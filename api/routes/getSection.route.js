const express = require('express');

const route = express.Router();

const controller = require('../controllers/getSection.controller');

route.get('/', controller.getSectionPlaylist);

module.exports = route;
