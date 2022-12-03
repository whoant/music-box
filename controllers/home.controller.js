const db = require('../db');

const ZingMp3 = require('zingmp3-api');

module.exports.index = async(req, res) => {
    const id = req.signedCookies.userId;

    try {
        const data = await Promise.all([ZingMp3.getHome(), ZingMp3.getHome(2)]);

        //console.log(data[0].items[3].items[0]);
        let slide0 = {
            title: data[0].items[3].title,
            items: data[0].items[3].items.all.map(song => {
                return {
                    encodeId: song.encodeId,
                    img: song.thumbnailM,
                    title: song.title,
                    heart: 110000
                };
            })
        };


        let slide1 = {
            title: data[1].items[0].title,
            items: data[1].items[0].items.map(song => {
                return {
                    encodeId: song.encodeId,
                    img: song.thumbnailM
                };
            })
        };
        slide1.items.length = 5;

        let slide2 = {
            ...slide1
        };


        let slide3 = {
            ...slide0
        }

        let info = db.get('users').find({ id }).value();
        let items = [];
        items.push(JSON.stringify(slide0));
        items.push(slide1);
        items.push(slide2);
        items.push(JSON.stringify(slide3));
        const dataRender = {
            ...info,
            items
        }
        res.render('home/index', dataRender);

    } catch (error) {
        console.log(error);
    }


}
