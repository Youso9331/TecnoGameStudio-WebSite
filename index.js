
/**const barre = document.querySelector('.barre');
let dernierScroll = 0;
const barre = document.querySelector('.barre');

window.addEventListener('scroll', function() {
    const scrollActuel = window.scrollY;

    if (scrollActuel > dernierScroll && scrollActuel > 100) {
        barre.classList.add('cachee');
    } else {
        barre.classList.remove('cachee');
    }

    dernierScroll = scrollActuel;
});
*/

const images = ["image1.png", "image2.png", "image3.png"];

let indexActuel = 0;

const imageElement = document.getElementById("image-carousel");

function mettreAJourImage() {
    imageElement.src = images[indexActuel];
}

document.getElementById("fleche-droite").addEventListener("click", () => {
    indexActuel = (indexActuel + 1) % images.length;
    mettreAJourImage();
});

document.getElementById("fleche-gauche").addEventListener("click", () => {
    indexActuel = (indexActuel - 1 + images.length) % images.length;
    mettreAJourImage();
});