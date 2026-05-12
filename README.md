# Timeline Interattiva — Storia del Sistema Bancario

**Stato:** Bozza  
**Data:** 2026-05-12  
**Tag:** #progetto #web #storia #finanza #brix-ia

## Concept
Timeline dinamica e scrollabile che racconta l'evoluzione del sistema bancario dalle origini medievali italiane fino all'era digitale.

## Struttura
La timeline è divisa in 5 atti:
1. Le Origini (1200–1500)
2. La Rivoluzione Olandese e Inglese (1500–1800)
3. L'Era Industriale (1800–1944)
4. L'Era Moderna (1944–2009)
5. L'Era Digitale (2009–oggi)

## Tech Stack
- HTML/CSS/JS puro (zero dipendenze, embeddabile ovunque)
- Oppure React + Vite per componenti riutilizzabili
- Immagini: Wikipedia Commons + illustrazioni AI-generated
- Deploy: GitHub Pages o brix-ia.com

## Prototipi attuali

### Timeline Verticale (HTML5 + CSS)
- Eventi alternati sinistra/destra, linee verticali e marker
- **Palette**: oro (#c9a84c), bordeaux (#6b1a1a), avorio (#f5f0e8), nero (#1a1a1a)
- **Interattività**: click su un evento per evidenziarlo (classe `.active`)
- **Responsive**: media query per schermi ≤600px
- **File**: `index.html`

### Timeline Orizzontale (HTML5 + CSS + JS)
- Scrollabile orizzontalmente con drag, rotellina mouse e touch
- **Emoji** al posto delle foto per ogni evento
- **Articoli** (`<article>`) per ogni evento storico
- **Interattività**: click per selezionare e centrare l'evento
- **Design**: card con bordo colorato per atto, emoji grande
- **File**: `timeline-orizontal.html`

- **Deploy**: [GitHub Pages](https://tekkhub01.github.io/timeline-storia-bancaria/)

## Next Steps
1. Validare lista eventi con Peter
2. Scegliere stack tecnologico (React/Vite o HTML puro)
3. Aggiungere immagini storiche per ogni evento
4. Implementare modal per dettagli estesi
5. Aggiungere filtri per atto/tema
6. Deploy su brix-ia.com o GitHub Pages

## Note
- Ottimo contenuto per BRIX-IA — storia + finanza + tech convergono
- Potenziale articolo abbinato su brix-ia.com
- Possibile uso come lead magnet / landing page per la community

## Riferimenti
- Nota Obsidian: [Timeline-Storia-Bancaria.md](../../workspace/Obsidian/Progetti/Timeline-Storia-Bancaria.md)