const db = require('../db');

const ZingMp3 = require('../modules/ZingMp3');

module.exports.index = async(req, res) => {
    const id = req.signedCookies.userId;
    
    try {
        const data = await Promise.all([ZingMp3.getHome(), ZingMp3.getHome(2)]);
        let slide0 = data[0].items[2].items.map(item => {
            return {
                encodeId: item.encodeId,
                img: item.thumbnailM,
                title: item.title,
                heart: 110000
            };

        });

        let slider = data[1].items[1];

        let browse = {
            title: slider.title,
            items: slider.items.map(item => {
                return {
                    encodeId: item.encodeId,
                    img: item.thumbnailHasText
                };
            })
        };
        browse.items.length = 6;

        let slider2 = data[1].items[2];
        let topic = {
            title: slider2.title,
            items: slider2.items.map(item => {
                return {
                    encodeId: item.encodeId,
                    img: item.thumbnailHasText
                };
            })
        };
        
        topic.items.length = 6;

        let slide3 = data[1].items[0];
        let radio = {
            title: slide3.title,
            items: slide3.items.map(item => {
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
        items.push(JSON.stringify({items: slide0, title: data[0].items[2].title}));
        items.push(browse);
        items.push(topic);
        items.push(JSON.stringify(radio));
        
        res.render('home/index', {
            ...info,
            items
        });

    } catch (error) {
        console.log(error);
    }


   
}