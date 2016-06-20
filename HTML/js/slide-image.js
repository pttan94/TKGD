$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        item:1,
        autoplay:true,
        autoplayHoverPause: true,
        smartSpeed: 450,
        center:true,
        loop: false,
        //margin:10,
        dots: false,
        dotsEach: 1,
        nav: false,
        URLhashListener: true,
        startPosition: '#zero',
       // navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
       
        responsive: {
            0: { items: 1 },
            768: { items: 1 },
            980: { items: 1 }
        }
    });
});