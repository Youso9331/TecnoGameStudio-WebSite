/** 
const barre = document.querySelector('.barre');
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