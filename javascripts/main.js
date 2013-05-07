$(document).ready(function () {
    // initialize foundation
    $(document).foundation();

    // sticky navigation in desktop
    var stickyHeight = $('.top-bar').offset().top;
    $(window).scroll(function(){
        if ($('html').hasClass('no-touch')) {
            if($(window).scrollTop() > stickyHeight) {
                $('.top-bar').addClass('stickybar');
                $('header').addClass('stickybar');
            }
            else {
                $('.top-bar').removeClass('stickybar');
                $('header').removeClass('stickybar');
            }
        }
    });
});
