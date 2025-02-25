gsap.registerPlugin(ScrollTrigger);

const selectors = document.querySelectorAll(".service_tab-selector");

// Fonction pour mettre à jour la hauteur du wrapper
function updateWrapperHeight(activeSwiper) {
  const wrapper = document.querySelector(".service_price-tabs");
  const height = activeSwiper.offsetHeight;

  if (height > 0) {
    gsap.to(wrapper, {
      height: height,
      duration: 0.5,
      ease: "power2.out",
    });
  }
}

// Fonction pour animer les cartes d'un swiper
function animateCards(swiper, reverse = false, zIndex = 1) {
  const timeline = gsap.timeline();
  const swiperElement = document.querySelector(swiper);
  const isDesktop = window.innerWidth > 991;

  gsap.set(swiperElement, { zIndex: zIndex });

  timeline.fromTo(
    swiperElement,
    {
      opacity: reverse ? 1 : 0,
      visibility: reverse ? "visible" : "hidden",
    },
    {
      opacity: reverse ? 0 : 1,
      visibility: reverse ? "hidden" : "visible",
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        if (!reverse) {
          updateWrapperHeight(swiperElement);
        }
      },
    }
  );

  // Animation de rotation uniquement sur desktop
  if (isDesktop) {
    timeline
      .fromTo(
        `${swiper} .service_tab-item.is-01`,
        {
          x: reverse ? 20 : 150,
          rotate: -3,
        },
        {
          x: reverse ? 150 : 20,
          rotate: -3,
          duration: 1,
          ease: "power2.out",
        },
        "<"
      )
      .fromTo(
        `${swiper} .service_tab-item.is-03`,
        {
          x: reverse ? -20 : -150,
          rotate: 3,
        },
        {
          x: reverse ? -150 : -20,
          rotate: 3,
          duration: 1,
          ease: "power2.out",
        },
        "<"
      );
  }

  return timeline;
}

selectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    if (selector.classList.contains("is-active")) return;

    const tabNumber = selector.getAttribute("tab");
    const currentActive = document.querySelector(
      ".service_tab-selector.is-active"
    );
    const currentContent = document.querySelector(
      `.swiper.service-tabs[tab-content="${currentActive.getAttribute("tab")}"]`
    );
    const newContent = document.querySelector(
      `.swiper.service-tabs[tab-content="${tabNumber}"]`
    );

    currentActive.classList.remove("is-active");
    selector.classList.add("is-active");

    animateCards(
      `.swiper.service-tabs[tab-content="${currentActive.getAttribute(
        "tab"
      )}"]`,
      true,
      1
    );
    animateCards(`.swiper.service-tabs[tab-content="${tabNumber}"]`, false, 2);
  });
});

// Initialisation
const contentWrapper = document.querySelector(".service_price-tabs");
const firstSwiper = document.querySelector(
  '.swiper.service-tabs[tab-content="1"]'
);

gsap.set(contentWrapper, {
  position: "relative",
  height: firstSwiper.offsetHeight,
});

// Initialiser les positions des swipers
gsap.set(".swiper.service-tabs", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
});

// Initialiser les états de visibilité
gsap.set('.swiper.service-tabs[tab-content="1"]', {
  opacity: 0,
  visibility: "visible",
});

gsap.set('.swiper.service-tabs[tab-content="2"]', {
  opacity: 0,
  visibility: "hidden",
});

// Animation initiale
animateCards('.swiper.service-tabs[tab-content="1"]');

if (window.innerWidth <= 991) {
  const swiper1 = new Swiper(".swiper.service-tabs.is-01", {
    slidesPerView: "auto",
    spaceBetween: 24,
    centeredSlides: true,
    initialSlide: 1,
    speed: 500,
  });

  const swiper2 = new Swiper(".swiper.service-tabs.is-02", {
    slidesPerView: "auto",
    spaceBetween: 24,
    centeredSlides: true,
    initialSlide: 1,
    speed: 500,
  });
}

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

window.onload = () => {
  // Gestion des vidéos dans le hero
  const heroVideos = document.querySelectorAll(".hero_video video");

  heroVideos.forEach((video) => {
    // Vérifier si la vidéo est déjà chargée
    if (video.readyState >= 3) {
      video.play();
    } else {
      // Si la vidéo n'est pas encore chargée, attendre qu'elle le soit
      video.addEventListener("canplay", () => {
        video.play();
      });
    }
  });
};

/* ANIMATION CHECK ICON  */
gsap.from(".service_checklist-wrapper .is-relative", {
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
