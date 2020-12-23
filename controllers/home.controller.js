const db = require('../db');

module.exports.index = (req, res) => {
    const id = req.signedCookies.userId;
    
    let test = [
        {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 1', heart: '232313', type: 'circle'},
        {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 2', heart: '232313'},
        {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 3', heart: '232313'},
        {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 4', heart: '232313'},
        {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 5', heart: '232313'},
        {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 6', heart: '232313'},
        {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 7', heart: '232313'},
        {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 8', heart: '232313'},
        {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 9', heart: '232313', type: 'square'},
        {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 10', heart: '232313', type: 'square'},
        {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 11', heart: '232313', type: 'square'},
        {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 12', heart: '232313', type: 'square'},
        {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 13', heart: '232313', type: 'square'},
    ];
    let info = db.get('users').find({id}).value();
    
    res.render('home/index', {
        ...info,
         content: JSON.stringify(test)
    });
}