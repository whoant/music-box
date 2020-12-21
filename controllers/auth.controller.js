module.exports.index = (req, res) => {
    if (req.signedCookies.userId) {
        res.redirect('/users');
        return ;
    }
    res.render('auths/index', {
        title: 'MusicBox'
    });
};

module.exports.logOut = (req, res) => {
    res.clearCookie('userId');
    res.redirect('/auth');
};