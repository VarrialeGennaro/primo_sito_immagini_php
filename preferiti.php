<?php 
    include "header.php"; 
?>

<main class="container-hero-grid" style="padding: 30px 20px;">
    <h1>I tuoi Preferiti</h1>
    

    <div class="hero-grid" id="favorites-container" style="margin-top: 20px;">
       
    </div>
</main>

<script>
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("favorites-container");
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    
    if (favorites.length === 0) {
        container.innerHTML = "<p style='color: #868F9B;'>Non hai ancora aggiunto nessun preferito alla tua galleria.</p>";
        return;
    }

    
    favorites.forEach(fav => {
        const div = document.createElement("div");
        div.className = "item"; 
        div.innerHTML = `
            <img src="${fav.src}" alt="Immagine preferita">
            <button class="favorite-btn active" aria-label="Rimuovi dai preferiti">
                <i class="fa-solid fa-heart" style="color: #ff3b30;"></i>
            </button>
        `;

        
        const btn = div.querySelector(".favorite-btn");
        btn.addEventListener("click", () => {

            favorites = favorites.filter(item => item.src !== fav.src);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            div.remove(); 


            if (favorites.length === 0) {
                container.innerHTML = "<p style='color: #868F9B;'>Non hai ancora aggiunto nessun preferito alla tua galleria.</p>";
            }
        });

        container.appendChild(div);
    });
});
</script>

<?php 
    include "footer.php"; 
?>