const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth.controller');
const middleware = require('../middlewares/auth.middleware');

router.get('/', controller.index);

router.post('/login', middleware.postLogin, controller.postLogin);

router.post('/register', middleware.postRegister, controller.postRegister);

module.exports = router;