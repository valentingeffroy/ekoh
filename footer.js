// PRE-FOOTER IMAGES ANIMATION
// Créer la timeline
const preFooterTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".pre-footer_images-wrapper",
    start: "top 70%", // Démarre quand le haut de la section atteint 70% de la fenêtre (30% visible)
    toggleActions: "play none none none",
  },
});

// Animation des images
preFooterTl
  // Premier élément (is-01)
  .from(".pre-footer_image-effect.is-01", {
    y: "10%",
    scale: 0.85,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  })

  // Deuxième élément (is-02)
  .from(
    ".pre-footer_image-effect.is-02",
    {
      y: "100%",
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "<"
  )

  // Troisième élément (is-03)
  .from(
    ".pre-footer_image-effect.is-03",
    {
      y: "200%",
      scale: 0.95,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "<"
  );
