async function renderFusions(){

const response =
await fetch(
"../data/database.json"
);

const data =
await response.json();

const grid =
document.getElementById(
"fusionGrid"
);

data.fusions.forEach(
fusion => {

grid.innerHTML +=

`
<div class="card">

<h2>
${fusion.name}
</h2>

<p>
${fusion.aspect}
</p>

<a href=
"character.html?id=${fusion.id}">

View

</a>

</div>
`;

});
}

renderFusions();