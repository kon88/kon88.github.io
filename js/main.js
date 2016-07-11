
    
        $(".wrapper #myMessage p").lettering();
        var para = $('.wrapper #myMessage [class^="char"]');

    var text1 = $('.wrapper #myMessage h2');
    var text2 = $('.wrapper #myMessage h1');
    
    var tl1 = new TimelineMax();
    
    tl1.from(text1, 1, {autoAlpha: 0, y: -50})
    .from(text2, 1, {autoAlpha:0},"+=.5")
    .call(function(){
        animpar();
    });

    function animpar() {
        TweenMax.set(".wrapper #myMessage p", {autoAlpha: 1});
        $('.container #myMessage [class^="char"]').each(function(i) {
        TweenMax.from($(this), 1, {
            autoAlpha: 0,
            x: random(-300, 300),
            y: random(-300, 300),
            z: random(-300, 300),
            scale: 1.5,
            delay: i * .02
            });
    });

  function random(min, max) {
    return (Math.random() * (max - min)) + min;
  }
};
        


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
