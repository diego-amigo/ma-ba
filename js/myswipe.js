var galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView:3,
    slidesPerColumn: 2, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }, 
    watchSlidesVisibility: true,
    watchSlidesProgress: true, 
    spaceBetween:10,
    updateOnWindowResize:true,
     
});
var galleryTop = new Swiper('.gallery-top', {  
    loop: true,
    loopedSlides: 1, 
    thumbs: {
        swiper: galleryThumbs,
    },
    centeredSlides: true,

});
var galleryBooking = new Swiper('.swiper__booking-gallery', {
    slidesPerView: 4,
    slidesPerColumn:4, 
    spaceBetween: 10, 
    pagination: {
        el: '.booking__pagination',
        clickable: true,
    }, 
    breakpoints: {
       576: {
          slidesPerView: 6, 
        },
        768: {
          slidesPerView: 8, 
        },
        992: {
          slidesPerView: 10,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 12,
          spaceBetween: 20,
        },
      },
    watchSlidesVisibility: true,
    watchSlidesProgress: true, 
    updateOnWindowResize:true,
     
});