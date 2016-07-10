
(function() {

        CSSPlugin.defaultForce3D = false; 
    
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

})();


(function($) {
    $('#mySlider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 500,
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
