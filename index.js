import { CharacterCard } from './CharacterCard.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
// const searchBarContainer = document.querySelector(
//   '[data-js="search-bar-container"]'
// );
// const searchBar = document.querySelector('[data-js="search-bar"]');
// const navigation = document.querySelector('[data-js="navigation"]');
// const prevButton = document.querySelector('[data-js="button-prev"]');
// const nextButton = document.querySelector('[data-js="button-next"]');
// const pagination = document.querySelector('[data-js="pagination"]');

// // States
// const maxPage = 1;
// const page = 1;
// const searchQuery = "";

// const image = "";

fetchCharacters();

async function fetchCharacters() {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character"
  );
  const data = await response.json();
  console.log("character", data);

  const dataArray = data.results;

  dataArray.forEach(element => {
    console.log("Element aus dataRuMArray",element);
    const cardAppend = CharacterCard(element.image, element.name, element.status, element.type, element.episode);
    cardContainer.append(cardAppend);
  });
  } 






