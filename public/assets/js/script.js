function coverToTime(duration) {
    let min = Math.floor(duration / 60);
    let sec = Math.floor(duration % 60);
    return (min < 10 ? '0' + min : min) + ":" + (sec < 10 ? '0' + sec : sec);
}


// document.addEventListener('DOMContentLoaded', render(listMusic));

function render(list){
    let arrayRender = list.map((item, i) => coverListMusic({...item, i}));
}

function coverListMusic({i, thumbnail, artists_names, title, duration}){
    const main = document.getElementById('list-music');
    const itemMusic = document.createElement('li');
    itemMusic.classList.add('list__item-card');
    itemMusic.innerHTML = 
        `
        <span class="list__item-card-prefix">${i+1}</span>
        <div class="list__item-card__title">
            <a href="#" class="list__item-card__title-img" style="background-image: url(${thumbnail});"></a>
            <span class="list__item-card__title-name">${title}</span>
        </div>
        <span class="list__item-card__artist">${artists_names}</span>
        <span class="list__item-card__album">123</span>
        <span class="list__item-card__time">${coverToTime(duration)}</span>
        <div class="list__item-card__controller">
            <span class="list__item-card__controller-link">
                <i class="fas fa-ellipsis-h list__item-card__controller-icon"></i>
            </span>
            <span class="list__item-card__controller-link">
                <i class="far fa-heart list__item-card__controller-icon"></i>
            </span>
            <span class="list__item-card__controller-link">
                <i class="fas fa-plus list__item-card__controller-icon"></i>
            </span>
        </div>
        `;
    main.appendChild(itemMusic);
}

/* Player */

document.getElementById('play-music').addEventListener('click', function(){
    document.getElementById('player').classList.toggle('player--show');
    if (this.innerText === 'PAUSE') {
        this.innerText = "PLAY";
        
    }else {
        this.innerText = "PAUSE";
    }
});