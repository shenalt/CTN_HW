const data = [
    {
        city:'Yonkers',
        source: 'CON ED Y50 U/G FEEDER',
        year: '2025',
        amountSpilled: '1,152',
        imgPath: 'img/yonkers.jpg'
    },
    {
        city:'Mount Vernon',
        source: 'CON ED Y50 FEEDER LEAK',
        year: '2024',
        amountSpilled: '3,015',
        imgPath: 'img/Mount-Vernon.jpeg'
    },
    {
        city:'The Bronx',
        source: 'CON ED Y50 U/G FEEDER',
        year: '2025',
        amountSpilled: '1,152',
        imgPath: 'img/TheBronx.jpg'
    }
]

     const container = document.getElementById('spills-container'); // Grab the artist-container div
     container.innerHTML = ''; // Clear the div

     // Go through each spill and make a card
     data.forEach((d, i) => { // put , i and wrap in a ()
         const artDiv = document.createElement('div');
         artDiv.classList.add('artist');

        // Populate div for each artist
        artDiv.innerHTML = `
            <div class="img-container">
                <img src="${d.imgPath}" alt="${d.source}" />
            </div>
            <div class="info">
                <h1>${d.amountSpilled} Gallons</h1>
                <h2>${d.city}, NY</h2>
                <h3>Source: ${d.source}</h3>
                <h3>Year: ${d.year}</h3>
                <h3>Dielectric Fluid</h3>
            </div>           
        `;
        container.appendChild(artDiv) // Append the artist div to the container
    })