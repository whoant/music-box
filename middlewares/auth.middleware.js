const db = require('../db');

module.exports.requireAuth = (req, res, next) => {
    let {userId} = req.cookies;
    if (!userId){
        res.redirect('/auth');
        return;
    }
    
    let checkUser = db.get('users').find({id: userId}).value();
    if (!checkUser) {
        res.redirect('/auth');
        return;
    }
    next();
};