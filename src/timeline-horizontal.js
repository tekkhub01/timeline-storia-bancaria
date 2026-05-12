// Timeline Orizzontale - Interattività
document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.getElementById('timeline');
    const events = timeline.querySelectorAll('.event');
    
    // Click su un evento per selezionarlo
    events.forEach(event => {
        event.addEventListener('click', function() {
            // Rimuovi selezione da tutti
            events.forEach(e => e.classList.remove('active'));
            // Seleziona questo
            this.classList.add('active');
            
            // Scrolla l'evento al centro
            this.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });
    });
    
    // Scroll orizzontale con rotellina mouse
    timeline.addEventListener('wheel', function(e) {
        if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
            e.preventDefault();
            timeline.scrollLeft += e.deltaY;
        }
    });
    
    // Drag per scroll (touch e mouse)
    let isDown = false;
    let startX;
    let scrollLeft;
    
    timeline.addEventListener('mousedown', (e) => {
        isDown = true;
        timeline.style.cursor = 'grabbing';
        startX = e.pageX - timeline.offsetLeft;
        scrollLeft = timeline.scrollLeft;
    });
    
    timeline.addEventListener('mouseleave', () => {
        isDown = false;
        timeline.style.cursor = 'grab';
    });
    
    timeline.addEventListener('mouseup', () => {
        isDown = false;
        timeline.style.cursor = 'grab';
    });
    
    timeline.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - timeline.offsetLeft;
        const walk = (x - startX) * 2;
        timeline.scrollLeft = scrollLeft - walk;
    });
    
    // Touch events per mobile
    let touchStartX = 0;
    let touchScrollLeft = 0;
    
    timeline.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].pageX - timeline.offsetLeft;
        touchScrollLeft = timeline.scrollLeft;
    });
    
    timeline.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - timeline.offsetLeft;
        const walk = (x - touchStartX) * 2;
        timeline.scrollLeft = touchScrollLeft - walk;
    });
    
    // Inizializza cursore
    timeline.style.cursor = 'grab';
});