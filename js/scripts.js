$(document).ready(function() {
    $('.ko-dy').slick({
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });

    $('.folio').slick({
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });


    $('.image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.thumb').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        //dots: true,
        centerMode: true,
        focusOnSelect: true
      });



});
