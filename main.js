// --- HEADER ---
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

if (closeBtn && sidebar) {
    closeBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        menuBtnChange();
    });
}

if (searchBtn && sidebar) {
    searchBtn.addEventListener("click", () => { 
        sidebar.classList.toggle("open");
        menuBtnChange(); 
    });
}

function menuBtnChange() {
    if (sidebar && closeBtn) {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
    }
}


// --- TASTO TORNA SU ---
window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    }
})

//--- INGRANDISCI IMMAGINE ---

document.addEventListener("DOMContentLoaded", function() {
    // Seleziona tutte le immagini dentro le card
    const immaginiGriglia = document.querySelectorAll('.item img, div[class*="item"] img');

    immaginiGriglia.forEach(img => {
        // Al click sull'immagine, apri il lightbox
        img.addEventListener('click', function(e) {
            e.stopPropagation(); // Evita conflitti
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');

            // Imposta l'src dell'immagine grande uguale a quella cliccata
            lightboxImg.src = this.src;
            
            // Mostra il modale (passando a flex per centrarlo)
            lightbox.style.display = 'flex';
        });
    });
});

// Funzione per chiudere il lightbox quando si clicca sullo sfondo o sull'immagine
function chiudiLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}