const db = require('../../db');

module.exports.updateUser = (req, res) => {
    const id = req.signedCookies.userId;
    req.body.gender = (req.body.gender == 'true');
    if (req.file) req.body.avatar = `/uploads/${req.file.filename}`;
    
    db.get('users').find({id}).assign(req.body).write();
    res.redirect('/users');
};