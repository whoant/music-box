const ZingMp3 = require('zingmp3-api');
const utilities = require('../../utilities/index');

module.exports.getPlayList = async(req, res) => {
    let { id } = req.query;

    try {
        const data = await ZingMp3.getDetailPlaylist(id);
        console.log(data);
        let playList = {
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
                        duration: item.duration,
                        formatDuration: utilities.coverToTime(item.duration)
                    };
                }),
                like: data.like
            },
        };
        res.json(playList);
    } catch (error) {
        console.log(error);
        res.json(error);
    }


};
