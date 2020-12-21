const sound = new PlayList(listMusic);

const changeIcon = document.getElementById('play-icon');
document.getElementById('play').addEventListener('click', () => {
    if (changeIcon.classList.contains('fa-play')) {
        updateTime();
        sound.play();
        changeIcon.className = changeIcon.className.replace('play', 'stop');

    } else {
        sound.pause();
        changeIcon.className = changeIcon.className.replace('stop', 'play');
    }
});

document.getElementById('next').addEventListener('click', () => {
    sound.next();
    eventChangeMusic();
});

document.getElementById('prev').addEventListener('click', () => {
    sound.prev();
    eventChangeMusic();
});

function eventChangeMusic() {
    if (!sound.playing()) changeIcon.className = changeIcon.className.replace('play', 'stop');
    
    sound.once('load', () => {
        sound.play();
        updateMusicCurrent();
        getDurationTime();
        genderQueueMusic();
        render();
        
    });
    sound.once('play', updateTime);
}

const progressBar = document.getElementById('progress-bar');
let down = false;

progressBar.addEventListener('click', function (e) {
    let percent = e.offsetX * 100 / this.offsetWidth;
    sound.seek(percent * sound.duration() / 100);
});

progressBar.addEventListener('mousedown', () => {
    down = true;
});

progressBar.addEventListener('mouseup', () => {
    down = false;
});

progressBar.addEventListener('mousemove', function (e) {
    if (down) {
        let percent = e.offsetX * 100 / this.offsetWidth;
        document.getElementById('progress-bar__task').style.width = percent + '%';
    }
});

document.getElementById('volume').addEventListener('click', () => {
    const changeIcon = document.getElementById('volume-icon');
    if (changeIcon.classList.contains('fa-volume-up')) {
        sound.mute(true);
        changeIcon.className = changeIcon.className.replace('up', 'mute');

    } else {
        sound.mute(false);
        changeIcon.className = changeIcon.className.replace('mute', 'up');
    }
});

document.getElementById('volume-btn').addEventListener('click', function (e) {
    let percent = e.offsetX * 100 / this.offsetWidth;
    sound.volume(percent * 1 / 100);
    document.getElementById('volume-task').style.width = percent + "%";
});

sound.once('load', () => {
    // sound.play();
    updateMusicCurrent();
    getDurationTime();
    genderQueueMusic();
    render();
});

sound.once('play', updateTime);

function render() {
    const { thumbnail, artists_names, title } = sound.infoMusic();
    document.getElementById('thumbnail').style.backgroundImage = `url(${thumbnail})`;
    document.getElementById('title').innerText = title;
    document.getElementById('author').innerText = artists_names;

}

function getDurationTime() {
    document.getElementById('cur-time').innerText = "00:00";
    document.getElementById('end-time').innerText = toStringDuration();

}

function updateTime() {
    setTimeout(() => {
        if (sound.playing()) {
            let time = sound.seek();
            let min = Math.floor(time / 60);
            let sec = Math.floor(time % 60);
            document.getElementById('cur-time').innerText = (min < 10 ? '0' + min : min) + ":" + (sec < 10 ? '0' + sec : sec);

            if (!down) {
                let width = time * 100 / sound.duration();
                document.getElementById('progress-bar__task').style.width = width + '%';
            }
            updateTime();
        }
    }, 50);
}

const queueMusicCur = document.getElementById('queue-music-current');
const btnQueueMusic = document.getElementById('btn-queue-music');

btnQueueMusic.addEventListener('click', function () {
    this.classList.toggle('player-icon--active');
    queueMusicCur.classList.toggle('player-queue__music--active');

});

document.getElementById('queue-close').addEventListener('click', () => {
    queueMusicCur.classList.remove('player-queue__music--active');
    btnQueueMusic.classList.remove('player-icon--active');
});

function updateMusicCurrent() {
    let { title, thumbnail, artists_names } = sound.infoMusic();
    document.getElementById('current-thumbnail').style.backgroundImage = `url(${thumbnail})`;
    document.getElementById('current-title').innerText = title;
    document.getElementById('current-info').innerText = `${artists_names} / ${toStringDuration()}`;
}

function toStringDuration() {
    let duration = sound.duration();
    let min = Math.floor(duration / 60);
    let sec = Math.floor(duration % 60);
    return (min < 10 ? '0' + min : min) + ":" + (sec < 10 ? '0' + sec : sec);
}

function genderQueueMusic() {
    document.getElementById('queue-music').innerHTML = '';
    let currentSong = sound.infoMusic();
    const listCurMusic = sound.getListMusic();
    let i = 0
    for (; i < listCurMusic.length; i++){
        if (listCurMusic[i].id === currentSong.id) break;
    }
    
    for (++i; i < listCurMusic.length; i++) renderMusicToQueue(listCurMusic[i]);
}

function renderMusicToQueue({ thumbnail, title, artists_names, time, id }) {
    const main = document.getElementById('queue-music');

    const music = document.createElement('li');
    music.classList.add('player-queue__music-next__item');
    music.setAttribute('id-music', id);

    music.ondblclick = () => {
        sound.playIndex(id);
        eventChangeMusic();
    }

    music.onclick = (e) => {
        if (e.target.closest('.player-queue__music-btn__icon')){
            sound.remove(getIndexFromQueue(id))
            main.removeChild(music);
        }
    }

    music.innerHTML = 
    `
        <div class="player-queue__music-img" style="background-image: url(${thumbnail});"></div>
        <div class="player-queue__music-info">
            <span class="player-queue__music-info__title">${title}</span>
            <span class="player-queue__music-info__artist">${artists_names} / ${time}</span>
        </div>
        <div class="player-queue__music-btn">
            <span class="player-queue__music-btn__icon player-queue__music-btn__icon--hidden">
                <i class="fas fa-ellipsis-h"></i>
            </span>
            <span class="player-queue__music-btn__icon">
                <i class="fas fa-times"></i>
            </span>
        </div>
    `;
    main.appendChild(music);
}


function getIndexFromQueue(id){
    const listCurMusic = sound.getListMusic();
    return listCurMusic.findIndex(item => item.id == id);
}