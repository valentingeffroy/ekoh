  moveContentsForMobile();
  
  // Trouve le tab de départ et son contenu
  const startTab = document.querySelector('[js-tabs-link][js-tabs-start="true"]');
  if (startTab) {
    const startTabId = startTab.getAttribute('js-tabs-link');
    
    // Cache tous les contenus sauf celui du tab de départ
    document.querySelectorAll("[js-tabs-content]").forEach(content => {
      if (content.getAttribute('js-tabs-content') !== startTabId) {
        content.style.display = "none";
        content.style.opacity = '0';
      } else {
        content.style.display = "flex";
      }
    });

    // Active le tab de départ
    startTab.querySelector('.service_pill').classList.add("is-active");
  }
  
  document.querySelectorAll("[js-tabs-link]").forEach((tab) => {
    tab.addEventListener("click", function() {
      let tabId = this.getAttribute("js-tabs-link");
      switchTabs(tabId, this);
    });
  });
  
  function switchTabs(newTabId, clickedTab) {
    // Mise à jour des pills
    document.querySelectorAll(".service_pill").forEach((pill) => {
      pill.classList.remove("is-active");
    });
    clickedTab.querySelector('.service_pill').classList.add("is-active");
  
    // Récupère l'ancien contenu actif
    const oldContent = document.querySelector('[js-tabs-content][style*="display: flex"]');
    const newContent = document.querySelector(`[js-tabs-content="${newTabId}"]`);
  
    // Configuration des transitions
    const fadeOutDuration = 300; // durée en ms
    const fadeInDuration = 400; // durée en ms
    const delayBetweenFades = 50; // réduit à 50ms pour minimiser le blanc
  
    // Si l'ancien contenu existe, on fait un fade out
    if (oldContent && oldContent !== newContent) {
      oldContent.style.transition = `opacity ${fadeOutDuration}ms ease-in-out`;
      oldContent.style.opacity = '0';
  
      // On commence à préparer le nouveau contenu plus tôt
      setTimeout(() => {
        oldContent.style.display = 'none';
        
        // Prépare le nouveau contenu
        newContent.style.display = "flex";
        newContent.style.opacity = '0';
        newContent.style.transition = `opacity ${fadeInDuration}ms ease-out`;
        
        // Délai réduit avant le fade in
        setTimeout(() => {
          requestAnimationFrame(() => {
            newContent.style.opacity = '1';
          });
        }, delayBetweenFades);
        
      }, fadeOutDuration * 0.8); // Commence un peu avant la fin du fade out
    } else {
      // Si pas d'ancien contenu, on montre directement le nouveau
      newContent.style.display = "flex";
      newContent.style.opacity = '0';
      newContent.style.transition = `opacity ${fadeInDuration}ms ease-out`;
      
      requestAnimationFrame(() => {
        newContent.style.opacity = '1';
      });
    }
  }
  
  
  
  
  function moveContentsForMobile() {
    const isMobile = window.matchMedia('(max-width: 991px)').matches;
    
    if (isMobile) {
      const contents = document.querySelectorAll('[js-tabs-content]');
      
      contents.forEach(content => {
        const contentId = content.getAttribute('js-tabs-content');
        const associatedTab = document.querySelector(`[js-tabs-link="${contentId}"]`);
        
        if (associatedTab) {
          associatedTab.insertAdjacentElement('afterend', content);
        }
      });
    }
  }
  