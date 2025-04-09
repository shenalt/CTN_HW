const OGdata = [
    {
        locality:'Westchester',
        source: 'CON ED Y50 U/G FEEDER',
        year: '2025',
        amountSpilled: '1,152',
        imgPath: 'img/yonkers.jpg'
    },
    {
        locality:'Westchester',
        source: 'CON ED Y50 FEEDER LEAK',
        year: '2024',
        amountSpilled: '3,015',
        imgPath: 'img/Mount-Vernon.jpeg'
    },
    {
        locality:'NYC',
        source: 'CON ED Y50 U/G FEEDER',
        year: '2025',
        amountSpilled: '1,152',
        imgPath: 'img/TheBronx.jpg'
    }
]

let data = OGdata;

function showCards(){
    const container = document.getElementById('spills-container'); // Grab the artist-container div
     container.innerHTML = ''; // Clear the div

     // Go through each spill and make a card
     data.forEach((d, i) => { // put , i and wrap in a ()
         const spillDiv = document.createElement('div');
         spillDiv.classList.add('spill');

        // Populate div for each artist
        spillDiv.innerHTML = `
            <div class="img-container">
                <img src="${d.imgPath}" alt="${d.source}" />
            </div>
            <div class="info">
                <h1>${d.amountSpilled} Gallons</h1>
                <h2>${d.locality}</h2>
                <h3>Source: ${d.source}</h3>
                <h3>Year: ${d.year}</h3>
                <h3>Dielectric Fluid</h3>
            </div>           
        `;
        container.appendChild(spillDiv) // Append the artist div to the container
    })   
}

function filterCards() {
    const localityFilter = document.getElementById('locality').value;
    const yearFilter = document.getElementById('year').value;

    // Apply filters
    data = OGdata.filter(d => {
        return (
            (d.locality === localityFilter || localityFilter === "all") && (d.year === yearFilter || yearFilter === "all") 
        );
    });

    showCards();
    data = OGdata;
}

const locality_selector = document.getElementById('locality');
locality_selector.addEventListener('change', filterCards);

const year_selector = document.getElementById('year');
year_selector.addEventListener('change', filterCards);

// Initial display
showCards();