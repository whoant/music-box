const db = require('../../db');

module.exports.postRegister = (req, res, next) => {
    let {fistname, lastname, gender, email, pass, repeatPass, year, month, date} = req.body;
    


    if (fistname === "" || lastname === "" || gender === "" ||email === "" || pass === "" || repeatPass === "" || year === "" || month === "" || date === "") {
        res.json({
            status: false,
            msg: "Please fill full infomation!"
        });
        return;
    }

    let checkUser = db.get('users').find({email}).value();
    if (checkUser){
        res.json({
            status: false,
            msg: "Email is exists!"
        });
        return;
    }

    next();
};

module.exports.postLogin = (req, res, next) => {
    let {email, pass} = req.body;
    
    if (email === "" || pass === "" ) {
        res.json({
            status: false,
            msg: "Please fill full infomation!"
        });
        return;
    }

    next();
};