// ANIM BRUITS ARC DE CERCLE
gsap.registerPlugin(ScrollTrigger);

// Configuration initiale
gsap.set(".home_bruits-cards", {
  translateX: "0%",
});

// Créer l'animation
const cardsBruit = document.querySelectorAll(".home_bruits-cards-wrapper");
const containerBruit = document.querySelector(".home_bruits-cards-container");

if (cardsBruit.length && containerBruit) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerBruit,
      start: "top center", // Ajuster selon vos besoins
      end: "80% center", // Ajuster selon vos besoins
      scrub: 1,
      // markers: true, // Pour le debug - à enlever en production
    },
  });

  // Animation du conteneur principal
  tl.to(".home_bruits-cards", {
    translateX: "-100%",
    ease: "power1.inOut",
    duration: 1,
  });

  // Rotations ajustées pour créer   un arc de cercle plus naturel
  const rotations = {
    start: [5, 15, 25, 35, 45], // Rotations initiales progressives
    end: [-25, -15, -8, -2, 2], // Rotations finales pour former l'arc
  };

  // Animer chaque carte
  cardsBruit.forEach((card, i) => {
    gsap.set(card, {
      // rotation: rotations.start[i],
    });

    tl.to(
      card,
      {
        // rotation: rotations.end[i],
        ease: "power1.inOut",
        duration: 1,
      },
      0
    );
  });
}

// ANIM MASK IMAGE + TEXT REVEAL

// Timeline pour synchroniser les animations
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home_echo-mask-icon",
    start: "30% center",
    toggleActions: "play pause pause pause",
  },
});

// Animation de l'image (1.2s)
tl.to(".home_echo-mask-icon", {
  rotation: 90,
  scale: 8,
  duration: 1.2,
  ease: "power1.out",
})

  // Animation du texte (0.4s) qui commence à 0.8s
  .to(
    ".home_masked-text",
    {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "none",
    },
    "-=0.8"
  ); // Le texte commence 0.8s avant la fin de l'animation de l'image

// ANIM SUCCESS STORIES PILLS
// Configuration initiale
gsap.set(".success-stories_step", {
  translateY: "20%",
  opacity: 0,
});

const stepsContainers = document.querySelectorAll(".success-stories_steps");

stepsContainers.forEach((container) => {
  const steps = container.querySelectorAll(".success-stories_step");

  // Créer un timeline pour gérer le stagger
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "50% bottom",
      // markers: true,
      toggleActions: "play none none none",
    },
  });

  steps.forEach((step) => {
    // Récupérer la rotation finale du CSS
    let finalRotation = 0;

    if (step.classList.contains("is-01-01")) finalRotation = 4.08;
    else if (step.classList.contains("is-01-02")) finalRotation = -6.35;
    else if (step.classList.contains("is-01-03")) finalRotation = -3.97;
    else if (step.classList.contains("is-01-04")) finalRotation = 11.8;
    else if (step.classList.contains("is-02-01")) finalRotation = -4.36;
    else if (step.classList.contains("is-02-02")) finalRotation = 7.31;
    else if (step.classList.contains("is-02-03")) finalRotation = 0.97;
    else if (step.classList.contains("is-02-04")) finalRotation = 8.95;

    // Ajouter chaque animation à la timeline avec un stagger
    tl.to(
      step,
      {
        rotate: `${finalRotation}deg`,
        translateY: "0%",
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "<+=0.2"
    ); // Ajoute 0.2s de délai entre chaque animation
  });
});

// ANIM SUCCESS STORIES BIG TEXT
// Animation des capsules
const capsules = document.querySelectorAll(".success-stories_capsule");

capsules.forEach((capsule, index) => {
  // Créer une timeline pour chaque capsule
  const tl = gsap.timeline({
    repeat: -1, // Répétition infinie
    yoyo: true, // Aller-retour
    defaults: {
      ease: "power1.inOut",
      duration: 2,
    },
  });

  // Valeurs différentes pour chaque capsule pour un effet plus naturel
  const yOffset = index === 0 ? 10 : -10; // Premier capsule monte, deuxième descend

  tl.to(capsule, {
    y: yOffset,
  });
});

// Garder votre animation de texte existante
const splitTypes = document.querySelectorAll(".success-stories_gsap");
splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: ["chars", "words"] });
  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 100%",
      end: "top 20%",
      scrub: true,
      markers: false,
    },
    opacity: 0.2,
    stagger: 0.1,
  });
});

// ANIM VOS RÉSEAUX
const benefitsBlocks = document.querySelectorAll(".benefits_block-text");

benefitsBlocks.forEach((block, index) => {
  // Définir les rotations initiales et finales selon si le block est pair ou impair
  const isPair = block.classList.contains("is-pair");
  const startRotation = isPair ? 6 : -6;
  const endRotation = isPair ? -2 : 2;

  gsap.fromTo(
    block,
    {
      rotate: startRotation,
    },
    {
      rotate: endRotation,
      scrollTrigger: {
        trigger: block,
        start: "top bottom", // Commence quand le haut du block atteint le bas de la fenêtre
        end: "top center", // Finit quand le haut du block atteint le centre de la fenêtre
        scrub: true,
        // markers: true, // Pour debug
      },
    }
  );
});

// ANIM HERO HOME
window.onload = () => {
  // Gestion des vidéos dans le hero
  const heroVideos = document.querySelectorAll(".home-hero_video video");

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

  // Vérification simple de la largeur d'écran
  if (window.matchMedia("(min-width: 992px)").matches) {
    // Timeline principale
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.out",
        duration: 1,
      },
    });

    // Animation des éléments
    tl
      // Premier élément
      .to(".home-hero_asset-wrapper.is-01", {
        bottom: "-40%",
      })
      .to(
        ".home-hero_image-rotate.is-01",
        {
          rotation: 4,
        },
        "<"
      )

      // Deuxième élément
      .to(
        ".home-hero_asset-wrapper.is-02",
        {
          bottom: "-45%",
        },
        "<"
      )
      .to(
        ".home-hero_video-wrapper.is-02",
        {
          rotation: -4,
        },
        "<"
      )

      // Troisième élément
      .to(
        ".home-hero_asset-wrapper.is-03",
        {
          bottom: "-8%",
        },
        "<"
      )
      .to(
        ".home-hero_image-rotate.is-03",
        {
          rotation: -2,
        },
        "<"
      )

      // Quatrième élément
      .to(
        ".home-hero_asset-wrapper.is-04",
        {
          bottom: "-15%",
        },
        "<"
      )
      .to(
        ".home-hero_video-wrapper.is-04",
        {
          rotation: 2,
        },
        "<"
      );
  }
};
