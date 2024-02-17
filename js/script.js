'use strict';

$(window).on('load', function() {
    $('#menu_open').on('click', () => {
        $('.menu_cont ul').fadeIn('slow', () => {});
    });
    $('#menu_close').on('click', () => {
        $('.menu_cont ul').fadeOut('slow', () => {});
    });
});