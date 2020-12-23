const express = require('express');
const multer = require('multer');

const router = express.Router();

const controller = require('../controllers/user.controller');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let path = './public/uploads';
        cb(null, path);
    },
    filename: (req, file, cb) => {
        let extension = file.originalname.split('.');
        extension = extension[extension.length - 1];
        cb(null, `${req.signedCookies.userId}.${extension}`);

    }
})
let upload = multer({storage});

router.put('/', upload.single('avatar'), controller.updateUser);

module.exports = router;
