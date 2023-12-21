import { CharacterCard } from "./CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// // States
let maxPage = 42;
let page = 1;
let searchQuery = "";

const image = "";

fetchCharacters();

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
    pagination.textContent = `${page}/${maxPage}`;
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
    pagination.textContent = `${page}/${maxPage}`;

  }
});

searchBar.addEventListener("submit", (event) => {
event.preventDefault();

searchQuery = event.target.elements.query.value;
fetchCharacters();
});

async function fetchCharacters() {
  cardContainer.innerHTML = "";
  
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character?page=" + page + "&name=" + searchQuery
    );
    const data = await response.json();
    console.log("data", data);

    const characters = data.results;

    maxPage = data.info.pages;
    console.log("maxpage" , maxPage);
    
    pagination.textContent = `${page}/${maxPage}`;

    characters.forEach((character) => {
      console.log("Character", character);
      const card = CharacterCard(
        character.image,
        character.name,
        character.status,
        character.type,
        character.episode
      );
      cardContainer.append(card);
    });
  } catch (error) {
    console.error(error);
  }
}
