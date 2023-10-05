const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});