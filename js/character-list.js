import { loadCharacters } from "./data-loader.js";

const container = document.getElementById("character-grid");

async function renderCharacters() {
    const characters = await loadCharacters();

    container.innerHTML = characters.map(character => `
        <a href="character.html?id=${character.id}" class="character-card">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            <p>${character.aspect}</p>
        </a>
    `).join("");
}

renderCharacters();