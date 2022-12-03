const ZingMp3 = require('zingmp3-api');

module.exports.getInfoSong = async(req, res) => {
    const { id } = req.query;

    try {
        const data = await ZingMp3.getStreaming(id);
        res.json(data);
    } catch (err) {
        res.json(err);
    }
};
