export function getURLParameter(name) {
    const params = new URLSearchParams(window.location.search);

    return params.get(name);
}

export function createTag(tagText) {
    const tag = document.createElement("span");

    tag.classList.add("tag");
    tag.textContent = tagText;

    return tag;
}