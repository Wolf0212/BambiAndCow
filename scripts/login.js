let login_txt = document.getElementById('login-text');
let register_txt = document.getElementById('register-text');
let login_btn = document.getElementById('login-btn');
let register_btn = document.getElementById('register-btn');

function isActive(param) {
    //param == login -> Login form
    if(param == 'login') {
        login_btn.classList.add('active-btn');
        login_btn.classList.remove('inactive-btn');
        register_btn.classList.remove('active-btn');
        register_btn.classList.add('inactive-btn')
        login_txt.classList.add('active');
        login_txt.classList.remove('inactive');
        register_txt.classList.add('inactive');
        register_txt.classList.remove('active');
    }
    else if(param == 'register') {
        register_btn.classList.add('active-btn');
        register_btn.classList.remove('inactive-btn');
        login_btn.classList.remove('active-btn');
        login_btn.classList.add('inactive-btn');
        register_txt.classList.add('active');
        register_txt.classList.remove('inactive');
        login_txt.classList.add('inactive');
        login_txt.classList.remove('active');
    }
}