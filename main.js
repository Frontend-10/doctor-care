function scrolling() {
    showNavOnScroll();
    showBackToTopOnScroll();
}

function showNavOnScroll() {
    if (scrollY) navigation.classList.add('scroll');
    else navigation.classList.remove('scroll');
}

function showBackToTopOnScroll() {
    if (scrollY > 400) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`
    #home .subtitle,
    #home .title,
    .home__content,
    .home__stats,
    .services__subtitle,
    .services__title,
    .service,
    .about__subtitle,
    .about__title,
    .about .text-generic,
    .about__img,
    .contact__title,
    .contact__item,
    #contact .button,
    .contact__img,
    .footer
    `);