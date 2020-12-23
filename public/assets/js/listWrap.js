const limitItem = 6;
const widthHidden = 251;


function wrapList({parent, title,content}){
    let countClick = 0;

    const main = document.createElement('div')
    main.classList.add('musicSlide');
    const header = document.createElement('header')
    header.classList.add('musicSlide-header');
    header.innerHTML = `<h3 class="musicSlide-header__name">${title}</h3>`;

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
    let addClass = (type === 'circle') ? 'musicSlide-wrap__link--circle' : '';
    return `
    <li class="musicSlide-wrap__item">
        <a href="#" class="musicSlide-wrap__link ${addClass}">
            <div class="musicSlide-wrap__item-img"style="background-image: url(${img});"></div>
            <span class="musicSlide-wrap__item-name">${title}</span>
            <span class="musicSlide-wrap__item-info">
                <i class="fas fa-heart"></i>
                ${heart}
            </span>
        </a>
    </li>`;
}