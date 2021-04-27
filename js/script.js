$(document).ready(function () {
    $(".recent-works__slider").slick({
        dots: true,
        responsive: [
            {
                breakpoint: 769,
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
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
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

function backToTop() {
    let topBtn = $(".top-button");

    $(window).on("scroll", () => {
        if ($(this).scrollTop() >= 800) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    })
}

backToTop();