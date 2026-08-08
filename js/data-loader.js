export async function loadJSON(path) {
    const response = await fetch(path);

    if (!response.ok) {
        throw new Error(`Failed loading ${path}`);
    }

    return await response.json();
}