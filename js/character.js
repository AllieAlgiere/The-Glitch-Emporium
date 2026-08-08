async function loadCharacter() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        params.get("id");

    const response =
        await fetch(
            "../data/characters.json"
        );

    const data =
        await response.json();

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
            "<h2>Character Not Found</h2>";

        return;
    }

    container.innerHTML = `

        <div class="character-profile">

            <img
                src="${character.image}"
                alt="${character.name}"
                class="character-image"
            >

            <h1>${character.name}</h1>

            <h2>${character.title || ""}</h2>

            <p>
                <strong>Aspect:</strong>
                ${character.aspect || ""}
            </p>

            <p>
                <strong>Disposition:</strong>
                ${
                    character.disposition ||
                    character.personality ||
                    ""
                }
            </p>

            <h3>Abilities</h3>

            <ul>

                ${
                    (character.abilities || [])
                    .map(
                        ability =>
                            `<li>${ability}</li>`
                    )
                    .join("")
                }

            </ul>

            <h3>Relationships</h3>

            <ul>

                ${
                    (character.relationships || [])
                    .map(
                        relation =>
                            `<li>${relation}</li>`
                    )
                    .join("")
                }

            </ul>

        </div>

    `;
}

loadCharacter();