$(document).ready(function () {
    $(".recent-works__slider").slick({
        dots: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $(".team__slider").slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
});

const menu = document.querySelector('.menu-list');
const burgerBtn = document.querySelector('.header__burger');

burgerBtn.addEventListener("click", function (event) {
    menu.classList.toggle("menu-list_disabled");
});

$("a.scroll-to").on("click", function (e) {
    e.preventDefault();
    const anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});