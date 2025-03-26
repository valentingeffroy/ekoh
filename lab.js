// ANIM HERO HOME
window.onload = () => {
  // Gestion des vidéos dans le hero
  const heroVideos = document.querySelectorAll(".lab_hero-image video");

  heroVideos.forEach((video) => {
    // Trouver l'image poster associée (dans le même wrapper)
    const posterImage = video
      .closest(".lab_hero-image")
      .querySelector(".lab_image-poster");

    const hideImageAndPlay = () => {
      video.play();
      if (posterImage) {
        posterImage.style.display = "none"; // ou bien 'opacity: 0' selon l'effet voulu
      }
    };

    // Vérifier si la vidéo est déjà chargée
    if (video.readyState >= 3) {
      hideImageAndPlay();
    } else {
      // Si la vidéo n'est pas encore chargée, attendre qu'elle le soit
      video.addEventListener("canplay", hideImageAndPlay);
    }
  });
};

// Vérification unique de la largeur de l'écran au chargement
if (window.innerWidth > 992) {
  // Animation GSAP uniquement pour les écrans > 992px
  gsap.set(
    [
      ".lab_hero-column-images.is-01",
      ".lab_hero-column-images.is-02",
      ".lab_hero-column-images.is-03",
    ],
    {
      y: 200,
      opacity: 0,
    }
  );

  gsap.to(".lab_hero-column-images.is-01", {
    y: 0,
    opacity: 1,
    duration: 3,
    ease: "power3.out",
  });

  gsap.to(".lab_hero-column-images.is-02", {
    y: 0,
    opacity: 1,
    duration: 3,
    delay: 0.2,
    ease: "power3.out",
  });

  gsap.to(".lab_hero-column-images.is-03", {
    y: 0,
    opacity: 1,
    duration: 3,
    delay: 0.4,
    ease: "power3.out",
  });
} else {
  // Réinitialiser les propriétés pour les petits écrans
  gsap.set(
    [
      ".lab_hero-column-images.is-01",
      ".lab_hero-column-images.is-02",
      ".lab_hero-column-images.is-03",
    ],
    {
      y: 0,
      opacity: 1,
    }
  );
}

// SECTION GRID - Slide droite vers gauche ou inverse
const animConfig = {
  desktop: {
    duration: 1.2,
    ease: "power3.out",
    startPosition: "100%",
    scrollStart: "top 60%",
    scrollEnd: "top 20%",
  },
  mobile: {
    duration: 0.5,
    ease: "power2.out",
    startY: 50,
    scrollStart: "top 75%",
    stagger: 0.08, // Réduit le délai entre chaque bloc
  },
  mobileBreakpoint: 767,
};

function createMobileAnimation() {
  const blocks = gsap.utils.toArray(".lab_feature-block");

  // Utilisation de batch pour optimiser les animations
  gsap.set(blocks, {
    y: animConfig.mobile.startY,
    opacity: 0,
  });

  blocks.forEach((block, index) => {
    gsap.to(block, {
      y: 0,
      opacity: 1,
      duration: animConfig.mobile.duration,
      ease: animConfig.mobile.ease,
      delay: index * animConfig.mobile.stagger,
      scrollTrigger: {
        trigger: block,
        start: animConfig.mobile.scrollStart,
        toggleActions: "play none none none",
        // markers: true,
        once: true, // L'animation ne se joue qu'une fois
      },
    });
  });
}

function createDesktopAnimation() {
  const wrappers = gsap.utils.toArray(".lab_feature-wrapper");

  wrappers.forEach((wrapper, index) => {
    const direction = index % 2 === 0 ? 1 : -1;

    gsap.set(wrapper, {
      x: direction * parseInt(animConfig.desktop.startPosition),
      opacity: 0,
    });

    gsap.to(wrapper, {
      x: 0,
      opacity: 1,
      duration: animConfig.desktop.duration,
      ease: animConfig.desktop.ease,
      scrollTrigger: {
        trigger: wrapper,
        start: animConfig.desktop.scrollStart,
        end: animConfig.desktop.scrollEnd,
        toggleActions: "play none none none",
        // markers: true,
        once: true, // L'animation ne se joue qu'une fois
      },
    });
  });
}

function initAnimations() {
  gsap.set(".lab_feature-wrapper, .lab_feature-block", { clearProps: "all" });

  if (window.innerWidth <= animConfig.mobileBreakpoint) {
    createMobileAnimation();
  } else {
    createDesktopAnimation();
  }
}

// Simple initialisation
initAnimations();

// Animation des steps
function animateSteps() {
  const steps = gsap.utils.toArray(".success-stories_step");

  // Configuration initiale
  gsap.set(steps, {
    opacity: 0,
    y: 30,
  });

  // Configuration spécifique des rotations
  gsap.set(steps[0], { rotate: -2 });
  gsap.set(steps[1], { rotate: 1.5 });

  // Animation
  gsap.to(steps, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".lab_block-cta-right-content",
      start: "top 75%",
      toggleActions: "play none none none",
      // markers: true,
      once: true,
    },
  });
}

// Initialisation
animateSteps();
