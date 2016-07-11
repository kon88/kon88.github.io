
$(document).ready(function(){

$(".wrapper #myMessage p").lettering();
        
    var text1 = $('.wrapper #myMessage h2');
    var text2 = $('.wrapper #myMessage h1');
    
    var tl1 = new TimelineMax({delay: .75});
    
    tl1.from(text1, .7, {autoAlpha: 0, y: -50})
    .from(text2, .7, {autoAlpha:0},"+=.3")
    .call(function(){
       TweenMax.set(".wrapper #myMessage p", {autoAlpha: 1});
        $('.wrapper #myMessage [class^="char"]').each(function(i) {
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
});
        

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


    });

    
        