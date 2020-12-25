const ZingMp3 = require('../../modules/ZingMp3');

module.exports.getSectionPlaylist = async(req, res) => {
    const {id} = req.query;

    try {
        const data = await ZingMp3.getSectionPlaylist(id);
        res.json(data);
    } catch (err) {
        res.json(err);
    }
};