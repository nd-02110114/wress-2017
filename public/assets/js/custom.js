
/*=============================================================
    Authour URL: www.designbootstrap.com

    http://www.designbootstrap.com/

    License: MIT

    http://opensource.org/licenses/MIT

    100% Free To use For Personal And Commercial Use.

    IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE

========================================================  */

$(document).ready(function() {

    // FOR SCROLL ANIMATIONS
    window.scrollReveal = new scrollReveal();

    // SCROLL SCRIPTS
    $('.scroll-me a').bind('click', function(event) { //just pass scroll-me class and start scrolling
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutQuad');
        event.preventDefault();
    });

    //COLLAPSE HEADER ON SCRLL
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 40) {
            $(".navbar-fixed-top").addClass("navbar-pad-original");
        } else {
            $(".navbar-fixed-top").removeClass("navbar-pad-original");
        }
    });

    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });

    //FANCY BOX PLUGIN SCRIPT FOR POPUP IMAGE
    $('.fancybox-media').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        helpers: {
            title: {
                type: 'inside'
            }
        }
    });

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        paginationBulletRender: function (swiper, index, className) {
           return '<span class="' + className + '">' + (index + 1) + '</span>';
       }
    });

});
