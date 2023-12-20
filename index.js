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

/*
id	175--
name	"Jerry Smith" --
status	"Alive" --
species	"Human"
type	"" --
gender	"Male"
origin	
name	"Earth (C-137)"
url	"https://rickandmortyapi.com/api/location/1"
location	
name	"Earth (C-137)"
url	"https://rickandmortyapi.com/api/location/1"
image	"https://rickandmortyapi.com/api/character/avatar/175.jpeg"
episode	
0	"https://rickandmortyapi.com/api/episode/1"
1	"https://rickandmortyapi.com/api/episode/2"
2	"https://rickandmortyapi.com/api/episode/3"
3	"https://rickandmortyapi.com/api/episode/4"
4	"https://rickandmortyapi.com/api/episode/5"
5	"https://rickandmortyapi.com/api/episode/6"
6	"https://rickandmortyapi.com/api/episode/22"
url	"https://rickandmortyapi.com/api/character/175"
created	"2017-12-29T18:07:17.610Z"*/
