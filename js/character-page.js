import { loadJSON } from "./data-loader.js";
import { getURLParameter } from "./utils.js";

async function loadCharacter() {

    const id =
        getURLParameter("id");

    const data =
        await loadJSON("../data/characters.json");

    const character =
        data.characters.find(
            c => c.id === id
        );

    const container =
        document.getElementById(
            "character-container"
        );

    if (!character) {

        container.innerHTML =
            "<h2>Character not found.</h2>";

        return;

    }

    container.innerHTML = `
        <img
            src="${character.image}"
            alt="${character.name}"
            class="character-image"
        >

        <h1>${character.name}</h1>

        <h2>${character.title}</h2>

        <p>
            <strong>Aspect:</strong>
            ${character.aspect}
        </p>

        <p>
            <strong>Disposition:</strong>
            ${character.disposition}
        </p>

        <h3>Abilities</h3>

        <ul>

        ${character.abilities
            .map(
                ability =>
                    `<li>${ability}</li>`
            )
            .join("")}

        </ul>

        <h3>Relationships</h3>

        <ul>

        ${character.relationships
            .map(
                relationship =>
                    `<li>${relationship}</li>`
            )
            .join("")}

        </ul>
    `;

}

loadCharacter();