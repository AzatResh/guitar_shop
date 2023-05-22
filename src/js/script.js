window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector('.nav-menu'),
        menuItem = document.querySelectorAll('.nav-menu__list-item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    })

    menuItem.forEach(item => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    })
})

$("a[href*='#']").on('click', function() {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370, // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });
    return false;
});