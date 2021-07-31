var owl = $('.owl-carousel')

owl.owlCarousel({
    loop:true,
    dots: false,
    margin:10,
    responsiveClass:true,
    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0: {
            items: 3,
            nav: true,
            loop: false
        },
        1200: {
            items: 4,
            loop: false
        }
    }
})

