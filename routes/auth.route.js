const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth.controller');

router.get('/', controller.index);

router.get('/logout', controller.logOut);

router.get('/cookie', (req, res) => {
    res.cookie('userId', 'HfRAWDUhi');
    res.send('Hello');
});




module.exports = router;