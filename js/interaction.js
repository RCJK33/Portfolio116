function menuToggle(params) {
    let menu = document.getElementById('nav-mobile');

    if (menu.className == 'nav-mobile') {
        menu.classList.remove('nav-mobile');
        menu.classList.add('hidden');
    } else {
        menu.classList.remove('hidden');
        menu.classList.add('nav-mobile');
    }
}

function clearForm() {
    let form = document.getElementById('emailForm');
    form.reset();
}