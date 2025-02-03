// Sélectionner les éléments
const menuWrapper = document.querySelector(".navbar_menu-wrapper");
const navbarComponent = document.querySelector(".navbar_component");
const menuLinks = document.querySelectorAll(".navbar_menu-links .link-effect_content");
// const menuBackground = document.querySelector(".navbar_background-menu-open");
const navbarMenu = document.querySelector(".navbar_menu");
const navbarLogo = document.querySelector(".navbar_logo");
const navFixed = document.querySelector(".nav_fixed");
const imageMask = document.querySelector(".navbar_menu-image-wrapper");

// Configuration initiale
gsap.set(menuLinks, {
  y: "-100%",
});

/*
gsap.set(menuBackground, {
  height: "0%",
});
*/

gsap.set(navbarMenu, {
  height: 0,
});

gsap.set(imageMask, {
  scale: "0.5",
  opacity: 0,
});


// Fonction pour fermer le menu
const closeMenu = () => {
  // Animation de fermeture
  const tl = gsap.timeline();

  // Mise à jour des classes
  navbarComponent.classList.remove("menu-open");
  menuWrapper.classList.remove("menu-open");

  /*
  // Toutes les animations commencent en même temps
  tl.to(menuBackground, {
    height: "0%",
    duration: 1,
    ease: "power2.inOut",
  });
  */

  // Animation du menu
  tl.to(
    navbarMenu,
    {
      height: 0,
      duration: 1,
      ease: "power2.inOut",
    },
    "<"
  );

  // Animation des liens
  tl.to(
    menuLinks,
    {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
    },
    "<"
  );

  // Animation du logo en noir
  tl.to(
    navbarLogo,
    {
      color: "black",
      duration: 1,
      ease: "power2.inOut",
    },
    "<"
  );

  // Animation de l'image
  tl.to(
    imageMask,
    {
      scale: "0.5",
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    },
    "<"
  );
};

// Fonction pour ouvrir le menu
const openMenu = () => {
  // Animation d'ouverture
  const tl = gsap.timeline();

  // Animation du logo en blanc immédiatement
  tl.to(navbarLogo, {
    color: "white",
    duration: 1,
    ease: "power2.inOut",
  });

  // Animation du menu
  tl.to(
    navbarMenu,
    {
      height: "auto",
      duration: 1,
      ease: "power2.inOut",
    },
    "<"
  );

  // Animation des liens
  tl.to(
    menuLinks,
    {
      y: "0%",
      duration: 1,
      ease: "power2.inOut",
    },
    "<"
  );

  // Animation de l'image
  tl.to(
    imageMask,
    {
      scale: "1",
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    },
    "<"
  );
};

// Gestionnaire de clic sur le menu wrapper
menuWrapper.addEventListener("click", (e) => {
  e.stopPropagation(); // Empêche la propagation du clic au document
  const isOpening = !navbarComponent.classList.contains("menu-open");

  // Arrêter toutes les animations en cours
  gsap.killTweensOf([menuLinks, navbarMenu, navbarLogo]);

  if (isOpening) {
    navbarComponent.classList.add("menu-open");
    menuWrapper.classList.add("menu-open");
    openMenu();
  } else {
    closeMenu();
  }
});

// Gestionnaire de clic sur le document
document.addEventListener("click", (e) => {
  // Si le menu est ouvert et que le clic n'est pas sur nav_fixed ou ses enfants
  if (
    navbarComponent.classList.contains("menu-open") &&
    !navFixed.contains(e.target)
  ) {
    gsap.killTweensOf([menuLinks, navbarMenu, navbarLogo]);
    closeMenu();
  }
});
