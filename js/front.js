/**
 * For changing nav bar background
 */
window.onscroll = () => {
    const nav = $('#navbar');
    if (this.scrollY <= 250) nav.removeClass('scrolled');
    else nav.addClass('scrolled');
};

/**
 * For rotating cards
 */
$('.rot').on('click', function() {
    $(this).parent().parent().parent().addClass('rotate');
});

$('.clrot').on('click', function() {
    $(this).parent().parent().parent().removeClass('rotate');
});

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
    });
});