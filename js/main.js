
(function() {
    
        $(".wrapper #myMessage p").lettering();
        var para = $('.wrapper #myMessage [class^="char"]');

        $(para).each(function(i){
        TweenMax.from($(this), 1, {
            opacity: 0,
            x: random(-200, 200),
            y: random(-200, 200),
            z: random(-500, 500),
            scale: .1,
            delay: i * .02
            });
        });
    
        function random(min, max) {
            return (Math.random() * (max - min)) + min;
         }  
    
    
    var text1 = $('.wrapper #myMessage h2');
    var text2 = $('.wrapper #myMessage h1');
    
    var tl1 = new TimelineMax({delay: 2.5});
    
    tl1.from(text1, .5, {autoAlpha: 0, y: -50});
    tl1.from(text2, .5, {autoAlpha:0},"+=.5");
    
    
    
    /*$('.wrapper #myMessage [class^="char"]').each(function(i){
    TweenMax.from($(this), 1,{
        opacity: 0,
        x: random(-250, 250),
        y: random(-250, 250),
        z: random(-500, 500),
        scale: .1,
        delay: i * .02
    },"+=3");

});*/

})();


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
