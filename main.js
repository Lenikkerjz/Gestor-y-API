const apiUrl = "https://rickandmortyapi.com/api/character";

function makeCard (character) {
    const {status, name, image} = character;
    const cardContainer = document.querySelector(".cards-container");
    const title = document.createElement("h5");
    title.textContent = name;

    const characterStatus = document.createElement("p");
    characterStatus.textContent = status;
    if(status == "Alive") characterStatus.style.color = "black";
    else characterStatus.style.color = "black";

    const characterImage = document.createElement("img");
    characterImage.src = image;
    characterImage.width = 200;

    const card = document.createElement("div");
    card.appendChild(title);
    card.appendChild(characterImage);
    card.appendChild(characterStatus);
    card.style.backgroundColor = "white";

    cardContainer.appendChild(card);
    
}

async function getCharacters () {
    try {
        const response = await fetch (apiUrl);
        const { results } = await response.json();
        for (let i  = 0; i < results.length; i++){
            makeCard(results[i]);
        }
    } catch (error) {
        console.error(error);
    }
}

getCharacters();
