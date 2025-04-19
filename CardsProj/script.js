const url = 'https://raw.githubusercontent.com/shenalt/CTN_HW/refs/heads/main/CardsProj/data/cardsProjData.csv'

// Create a function to parse the CSV into an array
function parseCSV(data) { 
    const regex = /,(?=(?:[^"]*"[^"]*")*[^"]*$)/; // Sets regex rule in order to split based on commas but not commas inside double-quoted substrings

    const rows = data.trim().split('\n'); // Splits the csv into rows


    const headers = rows[0].split(','); // Splits the first rows into header names


    const res = rows.slice(1).map(row => {  // Skip the headers and extract the rest of the row

        const vals = row.split(',');
        const obj = {}; // Init the container to be created containing the relevant info for each of the artists
        headers.forEach((header, i) => {
            obj[header.trim()] = vals[i]?.trim(); // ? in case no value is there so as not to break the code, filling the artist with the proper info
        });
        return obj;
    });
    return res; // Contains the three artists and their info
}

function fetchData(){
    return fetch(url)
        .then(response => response.text()) // Convert what was fetched into plain text
        .then(data => {
            const parsedData = parseCSV(data); 
            return parsedData
        })
        .catch(err => console.error('Error: ', err));
}

function showCards(theData){
    
    const container = document.getElementById('spills-container'); // Grab the container div
    container.innerHTML = ''; // Clear the div

     // Go through each spill and make a card
     theData.forEach((d, i) => { // put , i and wrap in a ()
         const spillDiv = document.createElement('div');
         spillDiv.classList.add('spill');
         
         //Clean the Locality value
         let stringVal = d['Locality_x'].toLowerCase()
         //console.log(d['Locality_x'])
         d['Locality_x'] = stringVal.charAt(0).toUpperCase() + stringVal.slice(1);

         //Clean the year value
         d['Year_x'] = parseInt(d['Year_x']).toString()

         //Clean the spilled value
         d['Unrecovered Amount_x'] = parseInt(d['Unrecovered Amount_x']).toLocaleString()

         let imgCode = ``;
         if(d['County_x'] === 'County_x'){
            imgCode =  `<img src="./img/question-mark.jpg" alt="Question Mark" />`
         } else if(d['County_x'] === 'Bronx'){
            imgCode =  `<img src="./img/bronx.jpg" alt="Bronx" />`
         } else if(d['County_x'] === 'Kings'){
            imgCode =  `<img src="./img/kings.jpg" alt="Brooklyn" />`
         } else if(d['County_x'] === 'New York'){
            imgCode =  `<img src="./img/newYorkManhattan.jpg" alt="Manhattan" />`
         } else if(d['County_x'] === 'Queens'){
            imgCode =  `<img src="./img/queens.jpg" alt="Queens" />`
         } else if(d['County_x'] === 'Richmond'){
            imgCode =  `<img src="./img/si.jpg" alt="Staten Island" />`
         } else if(d['County_x'] === 'Rockland'){
            imgCode =  `<img src="./img/rockland.jpg" alt="Rockland" />`
         } else {
            imgCode =  `<img src="./img/westchester.jpg" alt="Westchester" />`
         }
         

        // Populate div for each artist
        spillDiv.innerHTML = `
            <div class="img-container">
                ${imgCode}
            </div>
            <div class="info">
                <p>Gallons Spilled: <span>${d['Unrecovered Amount_x']}</span></p>
                <h1>${d['County_x']}</h1>
                <h2>Locality: ${d['Locality_x']}</h2>
                <h3>Source: ${d['Source_x']}</h3>
                <h3>Main Factor: ${d['Contributing Factor_x']}</h3>
                <h3>Material Spilled: ${d['Material Name_x']}</h3>
                <h3>Year: ${d['Year_x']}</h3>
            </div>           
        `;
        container.appendChild(spillDiv) // Append the artist div to the container
    })   
}

function filterCards() {
    const countyFilter = document.getElementById('county').value;
    const yearFilter = document.getElementById('year').value;

    fetchData().then(spills => {       
        data = spills.filter((d, i) => {
            return(
                (d['County_x'] === countyFilter || countyFilter === "all") && (d['Year_x'] === yearFilter || yearFilter === "all")
            )
        })
        showCards(data); // Now you can access the parsed data
    });
}

const county_selector = document.getElementById('county');
county_selector.addEventListener('change', filterCards);

const year_selector = document.getElementById('year');
year_selector.addEventListener('change', filterCards);

fetchData().then(theSpills => {
    showCards(theSpills)
})