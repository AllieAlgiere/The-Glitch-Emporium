export async function loadCharacters() {
    const response =
        await fetch("../data/characters.json");

    const data = await response.json();

    return data.characters;
}

export async function getCharacter(id) {
    const characters = await loadCharacters();

    return characters.find(
        character => character.id === id
    );
}