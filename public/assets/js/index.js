const modal = document.getElementById('modal');
const formLogin = document.getElementById('login-form');
const fornSign = document.getElementById('sign-form');

document.getElementById('btn-enable-signUp').addEventListener('click', () => {
    enableFormSignUp();
});

document.getElementById('switch-login').addEventListener('click', () => {
    enableFormLogin();
});

document.getElementById('switch-signup').addEventListener('click', () => {
    enableFormSignUp();
});

document.getElementById('btn-enable-login').addEventListener('click', () => {
    enableFormLogin();
});

document.getElementById('close-modal').addEventListener('click', () => {
    modal.classList.remove('modal--show');
});

document.getElementById('btn-form-login').addEventListener('click', () => {
    let email = document.getElementById('email-login').value;
    let pass = document.getElementById('pass-login').value;

    if (email === '' || pass === '')
    {
        toast({
            title: 'Error!',
            msg: 'Please fill email or password!',
            type: 'error',
            duration: 3000
        });
        return ;
    }

    axios.post('/api/auth/login', {email,pass})
        .then(({data}) => {
            if (data.status) {
                window.location.replace('/users');
                return;
            }
            toast({
                title: 'Error!',
                msg: data.msg,
                type: 'error',
                duration: 3000
            });
        })
        .catch(err => {
            toast({
                title: 'Error!',
                msg: 'Server error!',
                type: 'error',
                duration: 3000
            });
        });

});

document.getElementById('btn-form-signup').addEventListener('click', () => {
    let email = document.getElementById('email-sign').value;
    let pass = document.getElementById('pass-sign').value;
    let repeatPass = document.getElementById('repeat-pass-sign').value;

    if (email === '' || pass === '' || repeatPass === '')
    {
        toast({
            title: 'Error !',
            msg: 'Please fill email or password !',
            type: 'error',
            duration: 3000
        });
    }else {
        toast({
            title: 'Success !',
            msg: 'Login success !',
            type: 'success',
            duration: 3000
        });
    }
});


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


function enableFormSignUp(){
    modal.classList.add('modal--show');
    formLogin.style.display = 'none';
    fornSign.style.display = 'flex';
}

function enableFormLogin(){
    modal.classList.add('modal--show');
    formLogin.style.display = 'flex';
    fornSign.style.display = 'none';
}

function checkYear(year){
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function fillOption(obj, start = 1990, end = 2020){
    let res = [];
    for (let i = start; i <= end; i++) res.push(`<option value="${i}">${i}</option>`);
    document.getElementById(obj).innerHTML = res.join('');
}
fillOption('year');
