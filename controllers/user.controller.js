const db = require('../db');

module.exports.index = (req, res) => {
    let {userId} = req.signedCookies; 
    let user = db.get('users').find({id: userId}).value();
    res.render('users/index', user);
};

