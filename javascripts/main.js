var Wolf = (function ($, win, doc, undefined) {
    var root = {},
        d = $(doc),
        w = $(win),
        nav = $('.top-bar'),
        header = $('header');

    root.init = function () {
        d.foundation();
        root.stickyNav();
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

    return root;
}($, window, document));

$(document).ready(function (){
    Wolf.init();
});