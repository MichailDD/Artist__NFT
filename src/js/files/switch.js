const switch_container = document.querySelector('.switch-admin');
let loginjs = document.querySelector('.loginjs');
let signinjs = document.querySelector('.signinjs');
const select_role_admin = document.querySelector('.select-role-admin');
const login_bottom_text = document.querySelector('.login-bottom-text');
const signin_bottom_text = document.querySelector('.signin-bottom-text');

switch_container.addEventListener('click', (e) => {
    if (e.target.nodeName == "BUTTON") {
        if (e.target.classList.contains('loginjs')) {
            e.target.classList.add("button-bg", "inspire__btn-bg", "button-active")
            e.target.classList.remove("unactive-login")
            signinjs
                .classList
                .remove("button-bg", "inspire__btn-bg", "active-signin");
            signinjs
                .classList
                .add("button-unactive");
            select_role_admin.style.display = "none";
            login_bottom_text.style.display = "flex";
            signin_bottom_text.style.display = "none";
        } else {
            loginjs
                .classList
                .remove("button-bg", "inspire__btn-bg", "button-active");
            loginjs
                .classList
                .add("unactive-login");
            signinjs
                .classList
                .add("button-bg", "inspire__btn-bg", "active-signin");
            signinjs
                .classList
                .remove("button-unactive");
            select_role_admin.style.display = "flex";
            login_bottom_text.style.display = "none";
            signin_bottom_text.style.display = "flex";
        }
    }
})