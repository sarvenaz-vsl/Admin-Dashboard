let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let user = document.querySelector('.sidebar-user');

toggle.addEventListener('click', toggleMenu);

function toggleMenu() {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
    user.classList.toggle('active');
}