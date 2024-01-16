const menu = document.getElementById('humberger-menu');
const nav = document.querySelector('.navbar-nav');

menu.addEventListener('click', () => {
    nav.classList.toggle('active');
})

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active');
    }
})