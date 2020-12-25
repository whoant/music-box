module.exports.coverToTime = (duration) => {
    let min = Math.floor(duration / 60);
    let sec = Math.floor(duration % 60);
    return (min < 10 ? '0' + min : min) + ":" + (sec < 10 ? '0' + sec : sec);
}