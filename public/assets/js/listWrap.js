const limitItem = 6;
const widthHidden = 251;

let test = [
    {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 1', heart: '232313'},
    {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 2', heart: '232313'},
    {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 3', heart: '232313'},
    {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 4', heart: '232313'},
    {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 5', heart: '232313'},
    {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 6', heart: '232313'},
    {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 7', heart: '232313'},
    {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 8', heart: '232313'},
    {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 9', heart: '232313', type: 'square'},
    {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 10', heart: '232313', type: 'square'},
    {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 11', heart: '232313', type: 'square'},
    {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 12', heart: '232313', type: 'square'},
    {img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', title: 'Tuan 13', heart: '232313', type: 'square'},
];


wrapList({parent: 'test', title: 'Featured artists', content: test});

function wrapList({parent, title,content}){
    let countClick = 0;

    const main = document.createElement('div')
    main.classList.add('musicSlide');
    const header = document.createElement('header')
    header.classList.add('musicSlide-header');
    header.innerHTML = `<h3 class="musicSlide-header-name">${title}</h3>`;

    const headerBtn = document.createElement('div')
    headerBtn.classList.add('musicSlide-header-btn');

    const nextBtn = document.createElement('span');
    nextBtn.classList.add('musicSlide-header__btn-link');
    nextBtn.classList.add('musicSlide-header__btn-link--active');
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

    const prevBtn = document.createElement('span');
    prevBtn.classList.add('musicSlide-header__btn-link');
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';

    const divContent = document.createElement('div');
    divContent.classList.add('musicSlide-wrap');

    const listWrap = document.createElement('ul');
    listWrap.classList.add('musicSlide-wrap__list');
    let listItem = content.map(item => generationList(item));
    listWrap.innerHTML = listItem.join('');
    

    nextBtn.onclick = function(e){
        countClick++;
        let countArtist = content.length; // get length item
        let countShow = Math.floor(countArtist / limitItem);
        if (countClick > countShow) {
            countClick = countShow;
            return;
        }
        this.classList.toggle('musicSlide-header__btn-link--active', countClick < countShow);
        prevBtn.classList.toggle('musicSlide-header__btn-link--active', countClick > 0);
        let tempWidth;
        if ((countClick + 1) * limitItem > countArtist) tempWidth = (countArtist - limitItem) * widthHidden + 13;
        else tempWidth = (countClick * limitItem) * widthHidden + 13;
        listWrap.style.transform = `translateX(-${tempWidth}px)`;
    }

    prevBtn.onclick = function(e) {
        countClick--;
        let countArtist = document.getElementsByClassName('musicSlide-wrap__item').length;
        if (countClick < 0) {
            countClick = 0;
            return;
        }
    
        this.classList.toggle('musicSlide-header__btn-link--active', countClick > 0);
        nextBtn.classList.toggle('musicSlide-header__btn-link--active', countClick < Math.floor(countArtist / limitItem));
        
        let tempWidth;
        if ((countClick + 1) * limitItem > countArtist) tempWidth = (countArtist - limitItem) * widthHidden + 13;
        else tempWidth = (countClick * limitItem) * widthHidden + 13;
        listWrap.style.transform = `translateX(-${tempWidth}px)`;
    }
        
    headerBtn.appendChild(prevBtn);
    headerBtn.appendChild(nextBtn);
    header.appendChild(headerBtn);

    divContent.appendChild(listWrap);
    main.appendChild(header);
    main.appendChild(divContent);

    document.getElementById(parent).appendChild(main);
}


function generationList({type = 'circle', img, title, heart}){
    let addClass = (type === 'circle') ? 'musicSlide-wrap__item-img--circle' : '';
    return `
    <li class="musicSlide-wrap__item">
        <a href="#" class="musicSlide-wrap__link">
            <div class="musicSlide-wrap__item-img ${addClass}"style="background-image: url(${img});"></div>
            <span class="musicSlide-wrap__item-name">${title}</span>
            <span class="musicSlide-wrap__item-info">
                <i class="fas fa-heart"></i>
                ${heart}
            </span>
        </a>
    </li>`;
}