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
   
    const immaginiGriglia = document.querySelectorAll('.item img, div[class*="item"] img');

    immaginiGriglia.forEach(img => {
        
        img.addEventListener('click', function(e) {
            e.stopPropagation(); 
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');

            
            lightboxImg.src = this.src;
            
            
            lightbox.style.display = 'flex';
        });
    });
});


function chiudiLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

//---FAVORITE BTN---

document.addEventListener("DOMContentLoaded", () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const items = document.querySelectorAll(".item");

    items.forEach((item, index) => {
        const img = item.querySelector("img");
        if (!img) return;

        const imgSrc = img.src;
        const imgId = "img-" + index; 

        
        const btn = document.createElement("button");
        btn.className = "favorite-btn";
        btn.setAttribute("aria-label", "Aggiungi ai preferiti");

        
        const isFavorite = favorites.some(fav => fav.src === imgSrc);
        if (isFavorite) {
            btn.classList.add("active");
            btn.innerHTML = '<i class="fa-solid fa-heart" style="color: #ff3b30;"></i>';
        } else {
            btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
        }

        
        item.appendChild(btn);

       
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            const icon = btn.querySelector("i");
            const existingIndex = favorites.findIndex(fav => fav.src === imgSrc);

            if (existingIndex > -1) {
                
                favorites.splice(existingIndex, 1);
                btn.classList.remove("active");
                icon.classList.remove("fa-solid");
                icon.classList.add("fa-regular");
                icon.style.color = "";
            } else {
                
                favorites.push({ id: imgId, src: imgSrc });
                btn.classList.add("active");
                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");
                icon.style.color = "#ff3b30";
            }

            
            localStorage.setItem("favorites", JSON.stringify(favorites));
        });
    });
});