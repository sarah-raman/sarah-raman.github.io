const img = document.getElementById("random-cat-img");
const caption = document.getElementById("random-cat-caption")

function showRandomCat() {
    let i;
    i = Math.floor(Math.random() * cats.length);
    img.src = cats[i].image;
    img.alt = cats[i].caption;
    caption.textContent = cats[i].caption;
}

document.getElementById("random-cat-btn").addEventListener("click", showRandomCat);
