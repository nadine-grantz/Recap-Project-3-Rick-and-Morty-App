const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

const image = "";

function CharacterCard(image, name, status, type, episode) {
  const card = document.createElement("li");
  card.innerHTML = `  
  <li class="card">
      <div class="card__image-container">
        <img
          class="card__image"
          src=${image} 
          alt=${name}
        />
        <div class="card__image-gradient"></div>
      </div>
      <div class="card__content">
      <h2 class="card__title">${name}</h2>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${status}</dd>

        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${type}</dd>
        
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${episode.length()}</dd>
        </dl>
      </div>
    </li>`;
  return card;
}

async function fetchCharacters() {
const response = await fetch(
  "https://rickandmortyapi.com/api/character"
);
console.log(response);
const data = await response.json();
console.log("character", data);
return data;
}
fetchCharacters();

