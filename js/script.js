$(document).ready(function() {
    'use strict'
    $(".nav li").click(function(e) {
        $(".nav li").removeClass('active');
        e.preventDefault();
    });

    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }

    $("li a").on('click', function() {
        var targetSec = $(this).text();
        $('html, body').animate({
            scrollTop: $('#' + targetSec).offset().top
        }, 2000);
    });
});