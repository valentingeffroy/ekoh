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

/* ANIMATION CHECK ICON  */
gsap.from(".is-relative", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".service_checklist-right-wrapper",
    start: "top center",
    // markers: true,
  },
});
