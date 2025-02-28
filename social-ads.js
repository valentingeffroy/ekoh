const testimonialsSwiper = new Swiper(".swiper.testimonials", {
  grabCursor: true,
  breakpoints: {
    // Mobile (<768px)
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // Tablet (768px - 991px)
    768: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    // Desktop (>=992px)
    992: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

const packSwiper = new Swiper(".swiper.social-ads-pack", {
  grabCursor: true,
  breakpoints: {
    // Mobile (<768px)
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // Tablet (768px - 991px)
    768: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    // Desktop (>=992px)
    992: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});
