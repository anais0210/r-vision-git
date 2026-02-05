// Compteur de clics - Application principale
let compteur = 0;

const countDisplay = document.getElementById('count');
const btnPlus = document.getElementById('btn-plus');
const btnMoins = document.getElementById('btn-moins');
const btnReset = document.getElementById('btn-reset');

console.log('App chargée');

btnPlus.addEventListener('click', function() {
    compteur = compteur + 1;
    countDisplay.textContent = compteur;
    console.log('compteur: ' + compteur);
});

btnMoins.addEventListener('click', function() {
    compteur = compteur - 1;
    countDisplay.textContent = compteur;
});

btnReset.addEventListener('click', function() {
    compteur = 0;
    countDisplay.textContent = compteur;
});
