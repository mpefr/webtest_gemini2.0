console.log("Le fichier script.js est chargé !");

// Défilement doux (smooth scrolling) - Code unique et optimisé
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) { // Vérification si l'élément cible existe
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Exemple d'interaction : afficher une alerte au clic sur le bouton "Get Started" de la section Hero
const btnGetStarted = document.querySelector('#hero .btn-get-started');

if (btnGetStarted) {
    btnGetStarted.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Vous avez cliqué sur Démarrer !");
    });
}

// Ajout de la classe "sticky" au header lors du scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Ajouter un bouton de fermeture dynamique à la Lightbox
document.addEventListener('click', function () {
    const lightboxOverlay = document.querySelector('.lb-overlay'); // Overlay généré par Lightbox2
    if (lightboxOverlay) {
        // Vérifier si le bouton de fermeture existe déjà
        if (!document.querySelector('.lb-close-btn')) {
            // Créer le bouton de fermeture
            const closeButton = document.createElement('button');
            closeButton.textContent = '×'; // Symbole de fermeture
            closeButton.style.position = 'absolute';
            closeButton.style.top = '10px';
            closeButton.style.right = '10px';
            closeButton.style.fontSize = '30px';
            closeButton.style.color = 'white';
            closeButton.style.background = 'none';
            closeButton.style.border = 'none';
            closeButton.style.cursor = 'pointer';
            closeButton.style.zIndex = '1001'; // Assure que le bouton est au-dessus de tout
            closeButton.classList.add('lb-close-btn'); // Classe pour identification

            // Ajouter le bouton dans l'overlay
            lightboxOverlay.appendChild(closeButton);

            // Ajouter l'événement de fermeture
            closeButton.addEventListener('click', () => {
                lightboxOverlay.style.display = 'none'; // Cache la Lightbox
            });
        }
    }
});
