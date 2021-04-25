$(document).ready(function () {
    $(".recent-works__slider").slick({
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    buttons: false,
                    arrows: false,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $(".team__slider").slick({
        slidesToShow: 3,
    });
});