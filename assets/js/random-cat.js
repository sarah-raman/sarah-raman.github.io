const img = document.getElementById("random-cat-img");
const caption = document.getElementById("random-cat-caption")

const recentCats = [0] //default image is hardcoded as the first

function showRandomCat() {
    let i;

    if (recentCats.length == 15) { //allow a cat to leave recents when shown more than fifteen cats ago
        recentCats.splice(0, 1);
    }

    do {i = Math.floor(Math.random() * cats.length); //try until you find a cat photo not in recents
    } while(recentCats.includes(i));

    img.src = cats[i].image; //set new cat photo and caption
    img.alt = cats[i].caption;
    caption.textContent = cats[i].caption;
    
    recentCats.push(i); //add current cat to list of recents

}

document.getElementById("random-cat-btn").addEventListener("click", showRandomCat);
