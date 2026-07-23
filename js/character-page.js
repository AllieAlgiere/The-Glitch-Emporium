import { getCharacter } from "./data-loader.js";
import {
    getQueryParam,
    createAbilityList,
    formatFusionList
} from "./utils.js";

const characterContainer =
    document.getElementById("character-container");

async function renderCharacter() {

    const id = getQueryParam("id");

    if (!id) {
        characterContainer.innerHTML = `
            <h1>Character Not Found</h1>
            <p>No character ID provided.</p>
        `;
        return;
    }

    const character = await getCharacter(id);

    if (!character) {
        characterContainer.innerHTML = `
            <h1>Character Not Found</h1>
            <p>The requested character does not exist.</p>
        `;
        return;
    }

    characterContainer.innerHTML = `
        <div class="character-header">

            <img
                src="${character.image}"
                alt="${character.name}"
                class="character-image"
            >

            <div>
                <h1>${character.name}</h1>
                <h2>${character.title}</h2>
            </div>

        </div>

        <section>
            <h3>Fusion Of</h3>
            <p>${formatFusionList(character.fusionOf)}</p>
        </section>

        <section>
            <h3>Embodied Aspect</h3>
            <p>${character.aspect}</p>
        </section>

        <section>
            <h3>Abilities</h3>
            <ul>
                ${createAbilityList(character.abilities)}
            </ul>
        </section>

        <section>
            <h3>Combat Attributes</h3>
            <p>${character.combatAttributes}</p>
        </section>

        <section>
            <h3>Disposition</h3>
            <p>${character.disposition}</p>
        </section>
    `;
}

renderCharacter();