var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  speed: 100,
  loop: true,
  preventClicks: true,
  noSwiping: true,
  freeMode: false,
  navigation: {
    prevEl: ".prev",
    nextEl: ".next",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

/* segundo*/

var swiper1 = new Swiper(".swiper1", {
  slidesPerView: 4,
  spaceBetween: 10,
  speed: 100,
  loop: true,
  preventClicks: true,
  noSwiping: true,
  freeMode: false,
  navigation: {
    prevEl: ".prev2",
    nextEl: ".next2",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
