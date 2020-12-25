const db = require('../db');

const ZingMp3 = require('../modules/ZingMp3');

module.exports.index = async(req, res) => {
    const id = req.signedCookies.userId;
    
    try {
        const data = await Promise.all([ZingMp3.getHome(), ZingMp3.getHome(2)]);
        let slide0 = {
            title: data[0].items[2].title,
            items: data[0].items[2].items.map(item => {
                return {
                    encodeId: item.encodeId,
                    img: item.thumbnailM,
                    title: item.title,
                    heart: 110000
                };
    
            })
        };

        let slide1 = {
            title: data[1].items[1].title,
            items: data[1].items[1].items.map(item => {
                return {
                    encodeId: item.encodeId,
                    img: item.thumbnailHasText
                };
            })
        };
        slide1.items.length = 6;

        let slide2 = {
            title: data[1].items[2].title,
            items: data[1].items[2].items.map(item => {
                return {
                    encodeId: item.encodeId,
                    img: item.thumbnailHasText
                };
            })
        };
        slide2.items.length = 6;

        let slide3 = {
            title: data[1].items[0].title,
            items: data[1].items[0].items.map(item => {
                return {
                    encodeId: item.encodeId,
                    img: item.thumbnailM,
                    title: item.title,
                    heart: 110000,
                    type: 'square'
                };
            })
        }

        let info = db.get('users').find({id}).value();
        let items = [];
        items.push(JSON.stringify(slide0));
        items.push(slide1);
        items.push(slide2);
        items.push(JSON.stringify(slide3));
        
        res.render('home/index', {
            ...info,
            items
        });

    } catch (error) {
        console.log(error);
    }


   
}