const ZingMp3 = require('zingmp3-api');

module.exports.getSectionPlaylist = async(req, res) => {
    const { id } = req.query;

    try {
        console.log(id);
        const data = await ZingMp3.getSectionPlaylist(id);
        
        res.json(data);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};
