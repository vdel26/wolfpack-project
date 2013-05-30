var Wolf = (function ($, win, doc, undefined) {
    var root = {},
        d = $(doc),
        w = $(win),
        nav = $('.top-bar'),
        header = $('header');

    root.init = function () {
        d.foundation();
        root.stickyNav();

        // attach event listeners for navbar
        $('.top-bar a').click(function (evt) {
            evt.preventDefault();
            if($('html').hasClass('touch')) {
                $('.nav-item').toggleClass('closed');
            }
            root.smoothScroll($(evt.target.hash), 400);
        });

        if($('html').hasClass('touch')) {
            this.touchMode();
        }
    };

    root.stickyNav = function () {
        var stickyHeight = nav.offset().top;

        w.resize(function () {
            stickyHeight = nav.offset().top;
        });

        w.scroll(function () {
            if ($('html').hasClass('no-touch')) {
                if (w.scrollTop() > stickyHeight) {
                    nav.addClass('stickybar');
                    header.addClass('stickybar');
                }
                else {
                    nav.removeClass('stickybar');
                    header.removeClass('stickybar');
                }
            }
        });
    };

    root.smoothScroll = function (elem, duration) {
        Foundation.lib_methods.scrollTo(w, elem.offset().top - nav.height(), duration);
    };

    root.touchMode = function () {
        $('.nav-item').addClass('touch-item closed');
        $('.top-bar .column-list').removeClass('inline-list column-list').addClass('touch-list closed');
        nav.addClass('touch-bar');

        $('.hamb').on('touchstart', function (evt) {
            $('.touch-list').toggleClass('closed');
            $('.nav-item').toggleClass('closed');
        });
    };

    return root;
}($, window, document));

$(document).ready(function (){
    Wolf.init();
});