$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoplay:false,
        autoplayHoverPause: true,
        smartSpeed: 450,
        center:true,
        loop: true,
        //margin:10,
        dots: false,
        dotsEach: 1,
        nav: false,
       // navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
       
        responsive: {
            0: { items: 1 },
            768: { items: 1 },
            980: { items: 1 }
        }
    });
});