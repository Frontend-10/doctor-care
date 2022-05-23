function scrolling() {
    if (scrollY) navigation.classList.add('scroll');
    else navigation.classList.remove('scroll');
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}