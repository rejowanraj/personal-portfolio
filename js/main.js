$(document) .ready (function() {
// nav bar
$(".menu-bar") .click (function(){
$(".menu-list") .slideToggle();
})

$(window) .resize (function(){

var screenWidth = $(window) .width();

if (screenWidth > 768){
$(".menu-list") .removeAttr("style");
}
});

$(window).on('scroll', function(){
    if($(window).scrollTop()>=50 && !$('nav').hasClass('fixed-top')){
        $('nav').addClass('fixed-top'); 
    }
    else if($(window).scrollTop()<50 && $('nav').hasClass('fixed-top')){
       $('nav').removeClass('fixed-top') 
    }
});



/* typed js*/
var typed = new Typed('.typing', {
strings: [
'web designer and coder',
'wordpress specialist',
'web developer'
],
typeSpeed: 100,
backSpeed: 60,
loop:true
});
$('.skillbar').skillBars({
// number start
from: 0,
// number end
to: false,
// animation speed
speed: 1000,
// how often the element should be up<a href="https://www.jqueryscript.net/time-clock/">date</a>d
interval: 100,
// the number of decimal places to show
decimals: 0,
// callback method for every time the element is updated,
onUpdate: null,
// callback method for when the element finishes updating
onComplete: null,
// CSS classes
classes:{
skillBarBar : '.skillbar-bar',
skillBarPercent : '.skill-bar-percent',
}

});
//topbox active
$('.lightbox').topbox();
//mixitup activated
var mixer = mixitup('.mixitup-item');
// owl active
$('.owl-carousel.client') .owlCarousel({
item:3,
loop:true,
margin:20,
autoplay: true,
autoplayTimeout: 3000,
autoplayHoverPause: true,
responsiveClass:true,
responsive:{
0:{
items:1,
nav:false,
},
600:{
items:1,
nav:false,
},
1000:{
items:3,
nav:false,
loop:true,
}
}
});
// COUNTER START
let visibilityIds=['#counters_1'];
// default counter class
let counterClass='.counter';
// default animated speed
let defaultSpeed=3000;
})

