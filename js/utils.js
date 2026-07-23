export function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

export function createAbilityList(abilities) {
    return abilities
        .map(ability => `<li>${ability}</li>`)
        .join("");
}

export function createTagList(tags) {
    return tags
        .map(tag => `<span class="tag">${tag}</span>`)
        .join("");
}

export function formatFusionList(fusionOf) {
    return fusionOf.join(" + ");
}

export function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}