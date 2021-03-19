

$('.icone-menu').click(function () {
   $('.icone-menu,.menu__container').toggleClass('active');
   $('body').toggleClass('lock');
});

$('.menu__link').click(function () {
   $('.icone-menu,.menu__container').removeClass('active');
   $('body').removeClass('lock');
});

