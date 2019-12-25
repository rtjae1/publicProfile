const menu = document.querySelector('.letter-e');
const btn = menu.querySelector('.nav-tgl');
btn.addEventListener('click', evt => {
    if (menu.className.indexOf('active') === -1) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
})
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}