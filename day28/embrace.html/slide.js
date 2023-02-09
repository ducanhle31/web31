const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  // And if we need scrollbar
  /* scrollbar: {
    el: ".swiper-scrollbar",
  }, */
  breakpoints: {
    // when window width is >= 320px
    1440: {
      slidesPerView: 3,
      spaceBetween: 236,
    },
    
  },
});
