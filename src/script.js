// Timeline Interattiva — Storia del Sistema Bancario
// Script base per interattività (opzionale)

document.addEventListener('DOMContentLoaded', function() {
    // Esempio: al click su un contenuto, aggiungi classe 'active'
    const contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.addEventListener('click', function() {
            // Rimuovi classe 'active' da tutti
            contents.forEach(function(c) { c.classList.remove('active'); });
            // Aggiungi classe 'active' al cliccato
            this.classList.add('active');
        });
    });
});