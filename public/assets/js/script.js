const listMusic = [
    { "id": "ZOI6BFA9", "title": "Gặp Nhưng Không Ở Lại", "artists_names": "Hiền Hồ, Vương Anh Tú", "thumbnail": "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/a/4/b/fa4b429fda0c4d3d2100f64ad3c7a616.jpg", "lyric": "https://static-zmp3.zadn.vn/lyrics/1/b/3/6/1b3625298a5236bebea0aac749a92e39.lrc", "streaming": "./audio/ZOI6BFA9.mp3", "url": "https://mp3-s1-zmp3.zadn.vn/85da807e2e39c7679e28/7802439898798850891?authen=exp=1607449372~acl=/85da807e2e39c7679e28/*~hmac=731c4a439d60e1c61e68b359db75c9e6", "time": "04:36" }, { "id": "ZWDAAU8Z", "title": "Hoa Hải Đường", "artists_names": "Jack", "thumbnail": "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/a/8/6/2/a8626a5671f5a01250a074c4c8140cae.jpg", "lyric": "https://static-zmp3.zadn.vn/lyrics/e/6/a/6/e6a6be98fb0201dd9f99db41d6ceee9a.lrc", "streaming": "./audio/ZWDAAU8Z.mp3", "url": "https://mp3-s1-zmp3.zadn.vn/5ea0ffce4b89a2d7fb98/5383891903338973067?authen=exp=1607449372~acl=/5ea0ffce4b89a2d7fb98/*~hmac=ca14287e1f8ea78c6a1c391cb0208be4", "time": "03:49" }, { "id": "ZWC6EWA8", "title": "Ai Mang Cô Đơn Đi", "artists_names": "K-ICM, APJ", "thumbnail": "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/1/5/1/0151bcc5dc64312a9b6d9d2245aab54c.jpg", "lyric": "https://static-zmp3.zadn.vn/lyrics/3/1/6/1/3161a1e2e3baac38a719c9c89ec51ea8.lrc", "streaming": "./audio/ZWC6EWA8.mp3", "url": "https://mp3-s1-zmp3.zadn.vn/ce82a43bc27c2b22726d/4310689468054045178?authen=exp=1607449372~acl=/ce82a43bc27c2b22726d/*~hmac=0ca95c106b8d669eb92154cb593e7e56", "time": "03:41" }, { "id": "ZWDBBADB", "title": "Đánh Mất Em", "artists_names": "Quang Đăng Trần", "thumbnail": "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/3/6/9/83690ac46c2ba7cf46b153e6226c974d.jpg", "lyric": "https://static-zmp3.zadn.vn/lyrics/5/c/a/f/5caf9efe336d39ff551db42d723d909e.lrc", "streaming": "./audio/ZWDBBADB.mp3", "url": "https://mp3-s1-zmp3.zadn.vn/10dbaa50e2170b495206/5778850278162108473?authen=exp=1607449372~acl=/10dbaa50e2170b495206/*~hmac=b580bcbdebbf7b3a375d425a2bd43e94", "time": "04:24" }, { "id": "ZWDZCE80", "title": "Bông Hoa Đẹp Nhất", "artists_names": "Quân A.P", "thumbnail": "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/8/1/e/f81efd92fa9a3d52eb37f3b867ab9d32.jpg", "lyric": "https://static-zmp3.zadn.vn/lyrics/b/0/6/5/b065b749c340442769df09a2a96df760.lrc", "streaming": "./audio/ZWDZCE80.mp3", "url": "https://mp3-s1-zmp3.zadn.vn/9b04b3c11f86f6d8af97/3435269899872427346?authen=exp=1607449372~acl=/9b04b3c11f86f6d8af97/*~hmac=c7dd63677dd61b64df928c6c11eaa364", "time": "05:15" }, { "id": "ZO0FW0Z8", "title": "Sao Em Lại Tắt Máy?", "artists_names": "Phạm Nguyên Ngọc, Vanh, B.", "thumbnail": "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/6/5/5/f6553e5d6281763a103897dbefa05088.jpg", "lyric": "https://static-zmp3.zadn.vn/lyrics/9/e/5/1/9e517b369c7fce2b94d201a784928595.lrc", "streaming": "./audio/ZO0FW0Z8.mp3", "url": "https://mp3-s1-zmp3.zadn.vn/9b04b3c11f86f6d8af97/3435269899872427346?authen=exp=1607449372~acl=/9b04b3c11f86f6d8af97/*~hmac=c7dd63677dd61b64df928c6c11eaa364", "time": "03:18" }, { "id": "ZWEW9WI8", "title": "Kẹo Bông Gòn", "artists_names": "H2K, TRUNKY", "thumbnail": "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/e/9/1/de91f9c8b08e1fb4b35e2b64e1c2ed15.jpg", "lyric": "https://static-zmp3.zadn.vn/lyrics/9/a/7/e/9a7ebc1f6e937f45d5086eb135608250.lrc", "streaming": "./audio/ZWEW9WI8.mp3", "url": "https://mp3-s1-zmp3.zadn.vn/3460312f77689e36c779/9223137467722303909?authen=exp=1607449372~acl=/3460312f77689e36c779/*~hmac=8ae32e487d279e21a5182de0b9af9a4d", "time": "03:24" }
];

const limitItem = 6;
const widthHidden = 251;
let countBtn = 0;

document.addEventListener('DOMContentLoaded', render(listMusic));

document.getElementById('search-playlist').addEventListener('keyup', function(event){
    let keyword = this.value.toLowerCase();
    let res = listMusic.filter(item => item.title.toLowerCase().includes(keyword));
    if (keyword == '') res = listMusic;
    
    render(res);
    
});

document.getElementById('artist-next').addEventListener('click', function(e){
    countBtn++;
    let countArtist = document.getElementsByClassName('artist__item').length;
    let floor = Math.floor(countArtist / limitItem);

    if (countBtn > floor) {
        countBtn = floor;
        return;
    }
    
    this.classList.toggle('artists__controller-btn__link--active', countBtn < floor);
    document.getElementById('artist-prev').classList.toggle('artists__controller-btn__link--active', countBtn > 0);
    let tempWidth;
    if ((countBtn + 1) * limitItem > countArtist) tempWidth = (countArtist - limitItem) * widthHidden + 13;
    else tempWidth = (countBtn * limitItem) * widthHidden + 13;
    document.getElementById('artist-wrap').style.transform = `translateX(-${tempWidth}px)`;
});

document.getElementById('artist-prev').addEventListener('click', function(){
    countBtn--;
    let countArtist = document.getElementsByClassName('artist__item').length;
    if (countBtn < 0) {
        countBtn = 0;
        return;
    }
 
    document.getElementById('artist-next').classList.toggle('artists__controller-btn__link--active', countBtn < Math.floor(countArtist / limitItem));
    this.classList.toggle('artists__controller-btn__link--active', countBtn > 0);
    
    let tempWidth;
    if ((countBtn + 1) * limitItem > countArtist) tempWidth = (countArtist - limitItem) * widthHidden + 13;
    else tempWidth = (countBtn * limitItem) * widthHidden + 13;
    document.getElementById('artist-wrap').style.transform = `translateX(-${tempWidth}px)`;
});

function render(list){
    let arrayRender = list.map((item, i) => coverListMusic({...item, i}));
}


function coverListMusic({i, thumbnail, artists_names, title, time}){
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
        <span class="list__item-card__time">${time}</span>
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
    // document.getElementById('player').toggleAttribute()
});