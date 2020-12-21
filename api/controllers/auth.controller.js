const shortid = require('shortid');

const db = require('../../db');

module.exports.postRegister = (req, res) => {
    let {firstname, lastname, gender, email, pass, year, month, date} = req.body;
    let id = shortid.generate();
    
    db.get('users').push({
        id, firstname, lastname,gender, email, pass, year, month, date
    }).write();

    res.json({
        status: true,
        msg: "Account successfully created!"
    });
};

module.exports.postLogin = (req, res) => {
    let {email, pass} = req.body;
    
    let checkUser = db.get('users').find({email}).value();
    
    if (!checkUser) {
        res.json({
            status: false,
            msg: "Email is not exists!"
        });
        return;
    }

    if (checkUser.pass !== pass) {
        res.json({
            status: false,
            msg: "Incorrect email or password!"
        });
        return;
    }
    res.cookie('userId', checkUser.id);
    res.json({
        status: true,
        msg: "Login successfully created! "
    });
};

module.exports.index = (req, res) => {
    res.send('Hello');
};