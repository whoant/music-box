function fillOption(obj, start = 1990, end = 2020, current){
    let res = [];
    for (let i = start; i <= end; i++) {
        if (i === current) {
            res.push(`<option class="contact__form-controls-option" value="${i}" selected>${i}</option>`);
        }else res.push(`<option class="contact__form-controls-option" value="${i}">${i}</option>`);
        
    }
    document.getElementById(obj).innerHTML = res.join('');
}

function checkYear(year){
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

fillOption('year', 1990, 2020, year);
fillOption('month', 1, 12, month);

if (month === 2) {
    if (checkYear(year)) fillOption('date', 1, 29, date);
    else fillOption('date', 1, 28, date);
}else {
    if (month <= 7) fillOption('date', 1, 30 + month % 2);
    else fillOption('date', 1, 31 - month % 2);
}

document.getElementById('logout').addEventListener('click', () => {
    
});