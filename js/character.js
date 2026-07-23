async function loadCharacter() {

const params =
new URLSearchParams(
window.location.search
);

const id =
params.get("id");

const response =
await fetch(
"../data/database.json"
);

const data =
await response.json();

const allCharacters = [

...data.fragments,

...data.fusions,

...data.thrones

];

const character =
allCharacters.find(
c => c.id === id
);

if(!character){

document.body.innerHTML =
"<h1>Character Not Found</h1>";

return;
}

document.getElementById(
"character"
).innerHTML =

`
<h1>${character.name}</h1>

<p>${character.aspect || ""}</p>

<img
src="../${character.image}"
alt="${character.name}"
>

<h2>Abilities</h2>

<ul>

${character.abilities
.map(
ability =>
`<li>${ability}</li>`
)
.join("")}

</ul>

<p>

${character.disposition
|| character.personality
|| ""}

</p>
`;
}

loadCharacter();