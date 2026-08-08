import { loadJSON } from "./data-loader.js";

async function buildCharacterList() {

    const data = await loadJSON("../data/characters.json");

    const container =
        document.getElementById("character-list");

    data.characters.forEach(character => {

        const card =
            document.createElement("div");

        card.classList.add("character-card");

        card.innerHTML = `
            <a href="character.html?id=${character.id}">
                <img
                    src="${character.image}"
                    alt="${character.name}"
                >

                <h2>${character.name}</h2>

                <p>${character.title}</p>
            </a>
        `;

        container.appendChild(card);

    });

}

buildCharacterList();