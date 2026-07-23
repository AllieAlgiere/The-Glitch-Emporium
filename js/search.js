async function loadFAQ(){

const response =
await fetch(
"../data/database.json"
);

const data =
await response.json();

const container =
document.getElementById(
"faqContainer"
);

data.faq.forEach(
entry => {

container.innerHTML +=

`
<div class="card">

<h3>
${entry.question}
</h3>

<p>
${entry.answer}
</p>

</div>
`;

});
}

loadFAQ();