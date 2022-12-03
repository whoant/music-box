const ZingMp3 = require('zingmp3-api');
const db = require('../db');

const utilities = require('../utilities/index');

module.exports.index = async(req, res) => {

    try {
        const idPlaylist = req.params.id;
        const data = await ZingMp3.getDetailPlaylist(idPlaylist);
        let playList = {
            encodeId: data.encodeId,
            title: data.title,
            thumbnail: data.thumbnailM,
            song: {
                total: data.song.total,
                items: data.song.items.map(item => {
                    return {
                        id: item.encodeId,
                        title: item.title,
                        artists_names: item.artistsNames,
                        thumbnail: item.thumbnailM,
                        duration: utilities.coverToTime(item.duration)
                    };
                }),
                like: data.like
            },
        };

        let id = req.signedCookies.userId;

        let info = db.get('users').find({ id }).value();

        res.render('playlist/index', { info, playList });
    } catch (error) {
        console.log(error);
    }


};
