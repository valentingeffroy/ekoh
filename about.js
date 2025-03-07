// HERO BLOCKS ANIM
function animateHeroBlocks() {
  const leftBlock = document.querySelector(".about_hero-block-left");
  const rightBlock = document.querySelector(".about_hero-block-right");

  // Configuration initiale
  gsap.set([leftBlock, rightBlock], {
    y: 50,
    opacity: 0,
  });

  // Animation
  gsap.to([leftBlock, rightBlock], {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".about_hero-contents-wrapper",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });
}

// Initialisation
animateHeroBlocks();


// Animation du texte dans le bloc violet
const splitTypes = document.querySelectorAll(".success-stories_gsap");
splitTypes.forEach((char, i) => {
  const text = new SplitType(char, {
    types: ["chars", "words"],
  });

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 100%",
      end: "top 20%",
      scrub: true,
      markers: true, // À mettre à false en production
      toggleActions: "play reverse play reverse", // Pour avoir l'effet reverse
    },
    opacity: 0.2,
    stagger: 0.1,
  });
});
