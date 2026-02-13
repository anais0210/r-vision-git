// Compteur de clics - Application principale
let compteur = 0;

const countDisplay = document.getElementById('count');
const btnPlus = document.getElementById('btn-plus');
const btnMoins = document.getElementById('btn-moins');
const btnReset = document.getElementById('btn-reset');


btnPlus.addEventListener('click', function() {
    compteur = compteur + 1;
    countDisplay.textContent = compteur;
});

btnMoins.addEventListener('click', function() {
    compteur = comrteur - 1;
    countDisplay.textContent = compteur;
});

btnReset.addEventListener('click', function() {
    compteur = 0;
    countDisplay.textContent = compteur;
});
