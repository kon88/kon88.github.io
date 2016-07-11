
$(document).ready(function(){

    CSSPlugin

$(".wrapper #myMessage p").lettering();
        
    var text1 = $('.wrapper #myMessage h2');
    var text2 = $('.wrapper #myMessage h1');
    var btn1 = $('.wrapper #myLinks .btn-1');
    var btn2 = $('.wrapper #myLinks .btn-2');
    var box1 = $('.latestProj');
    var par1 = $('.wrapper #myMessage p');
    
    var tl1 = new TimelineMax({delay: .5});
    
    tl1.from(text1, .5, {autoAlpha: 0, y: -50}).
    from(text2, .5, {autoAlpha:0},"+=.2").
    call(function(){
       TweenMax.set(par1, {autoAlpha: 1});
        $('.wrapper #myMessage [class^="char"]').each(function(i) {
        TweenMax.from($(this), 1, {
            autoAlpha: 0,
            x: random(-300, 300),
            y: random(-300, 300),
            z: random(-300, 300),
            scale: 1.5,
            delay: i * .01
            });
    });

    function random(min, max) {
    return (Math.random() * (max - min)) + min;
  }

var tl2 = new TimelineLite({delay: 1.75});
    tl2.from(btn1, .5, {autoAlpha: 0, x: -25}, "+=.3").
    from(btn2, .5, {autoAlpha: 0, x: 25}, "-=.5").
    to(box1, 1, {autoAlpha: 1, width: "100%"}).
    to(box1, 1, {backgroundColor: "rgba(238,0,0,1)"}, "+=.2");

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

    
        