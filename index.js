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
  try {

  
  const response = await fetch(
    "https://rickandmortyapi.com/api/character"
  );
  const data = await response.json();
  console.log("character", data);

  const characters = data.results;

  characters.forEach(character => {
    console.log("Character", character);
    const card = CharacterCard(character.image, character.name, character.status, character.type, character.episode);
    cardContainer.append(card);
  });

  } catch (error) {
    console.error(error)
  }
} 






