/* ANIMATION CHECK ICON  */
gsap.from(".service_checklist-item", {
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
