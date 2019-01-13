window.onscroll = () => {
    const nav = $('#navbar');
    if (this.scrollY <= 250) nav.removeClass('scrolled');
    else nav.addClass('scrolled');
};