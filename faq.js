// ANIM FAQ

// Sélectionne tous les boutons de dropdown
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
// Définit la durée de l'animation en secondes
const animDuration = 0.3;

// Pour chaque bouton de dropdown, ajoute un écouteur de clic
dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', function() {
    // Récupère les éléments nécessaires
    const wrapper = this.closest('.dropdown-wrapper');
    const content = wrapper.querySelector('.dropdown-content');
    const verticalIcon = wrapper.querySelector('.dropdown-icon.is-vertical');
    
    // Si le dropdown est déjà ouvert (classe is-active présente)
    if (wrapper.classList.contains('is-active')) {
      // Animation de fermeture
      // Anime la hauteur du contenu vers 0
      gsap.to(content, {
        height: 0,
        duration: animDuration,
        ease: "power2.inOut"
      });
      
      // Anime la rotation de l'icône vers 90 degrés
      gsap.to(verticalIcon, {
        rotation: 90,
        duration: animDuration,
        ease: "power2.inOut"
      });
      
      // Retire la classe active
      wrapper.classList.remove('is-active');
    } else {
      // Si le dropdown est fermé
      // Ajoute la classe active
      wrapper.classList.add('is-active');
      
      // Anime la hauteur du contenu vers sa hauteur naturelle
      gsap.to(content, {
        height: content.scrollHeight,
        duration: animDuration,
        ease: "power2.inOut"
      });
      
      // Anime la rotation de l'icône vers 0 degré
      gsap.to(verticalIcon, {
        rotation: 0,
        duration: animDuration,
        ease: "power2.inOut"
      });
    }
  });
});
