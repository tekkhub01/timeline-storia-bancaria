// Timeline Interattiva — Storia del Sistema Bancario
// Dati degli eventi (esempio)
const events = [
    { year: 1252, title: "Primo florino d'oro", description: "Firenze emette il primo florino d'oro, prima valuta internazionale europea.", atto: 1 },
    { year: 1340, title: "Fallimento Bardi e Peruzzi", description: "Primo 'too big to fail' della storia bancaria.", atto: 1 },
    { year: 1472, title: "Monte dei Paschi di Siena", description: "La banca più antica del mondo ancora in attività.", atto: 1 },
    { year: 1694, title: "Fondazione Bank of England", description: "Prima banca centrale moderna.", atto: 2 },
    { year: 1913, title: "Nascita della Federal Reserve", description: "Sistema della banca centrale americana.", atto: 3 },
    { year: 2008, title: "Grande Crisi Finanziaria", description: "Crollo di Lehman Brothers.", atto: 4 },
    { year: 2009, title: "Bitcoin", description: "Satoshi Nakamoto pubblica il white paper.", atto: 5 }
];

function renderTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event';
        eventElement.innerHTML = `
            <div class="event-year">${event.year}</div>
            <div class="event-title">${event.title}</div>
            <div class="event-description">${event.description}</div>
        `;
        timeline.appendChild(eventElement);
    });
}

// Inizializza la timeline quando il DOM è caricato
document.addEventListener('DOMContentLoaded', renderTimeline);