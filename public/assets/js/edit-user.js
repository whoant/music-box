function fillOption(obj, start = 1990, end = 2020, current = null){
    let res = [];
    for (let i = start; i <= end; i++) {
        if (i === current && current !== null) {
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

document.getElementById('year').addEventListener('change', function(e){
    let domMonth = document.getElementById('month');
    domMonth.disabled = false;

    fillOption('month', 1, 12);
    if (document.getElementById('date').disabled) return;
    let year = this.value;
    let month = Number(domMonth.value);

    if (month === 2){
        if (checkYear(year)) fillOption('date', 1, 29);
        else fillOption('date', 1, 28);
    }
    else {
        if (month <= 7) fillOption('date', 1, 30 + month % 2);
        else fillOption('date', 1, 31 - month % 2);
    }
});

document.getElementById('month').addEventListener('change', function(e){
    document.getElementById('date').disabled = false;
    let year = document.getElementById('year').value;
    let month = Number(this.value);
    if (month === 2){
        if (checkYear(year)) fillOption('date', 1, 29);
        else fillOption('date', 1, 28);
    }
    else {
        if (month <= 7) fillOption('date', 1, 30 + month % 2);
        else fillOption('date', 1, 31 - month % 2);
        
    }
});


