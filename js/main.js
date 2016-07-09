
(function() {
    $(".wrapper #myMessage p").lettering();
})(jQuery);

function random(min, max) {
    return (Math.random() * (max - min)) + min;
    }

$('.wrapper #myMessage [class^="char"]').each(function(i){
    TweenMax.from($(this), 1, {
        opacity: 0,
        x: random(-500, 500),
        y: random(-500, 500),
        z: random(-500, 500),
        scale: .1,
        delay: i * .02
    });
});


(function($) {
    $('#mySlider').slick({
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1050,
            settings: {
                arrows: false
            }
        }
    ]
});
})(jQuery);
